"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Loader2 } from "lucide-react"

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface GitHubCalendarProps {
  username: string
  className?: string
}

export default function GitHubCalendar({ username, className = "" }: GitHubCalendarProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [stats, setStats] = useState({
    total: 0,
    streak: 0,
    today: 0,
  })

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true)

        // GitHub doesn't provide an official API for contribution data
        // We'll use a proxy service that scrapes the data
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub data: ${response.status}`)
        }

        const data = await response.json()

        // Process the contributions data
        const contributionsData: ContributionDay[] = []
        let totalContributions = 0
        let currentStreak = 0
        let maxStreak = 0
        let todayContributions = 0
        const today = new Date().toISOString().split("T")[0]

        // Track if we're in a streak
        let inStreak = false

        // Process contributions in reverse to calculate streak correctly
        const sortedContributions = [...data.contributions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        )

        // Calculate current streak
        for (const contrib of sortedContributions) {
          if (contrib.count > 0) {
            if (!inStreak) inStreak = true
            currentStreak++
          } else if (inStreak) {
            break
          }
        }

        // Process all contributions for the calendar
        for (const contrib of data.contributions) {
          const count = contrib.count
          totalContributions += count

          // Determine level based on count and max count
          let level: 0 | 1 | 2 | 3 | 4 = 0
          if (count > 0) {
            const maxCount = data.max || 10
            const ratio = count / maxCount
            if (ratio <= 0.25) level = 1
            else if (ratio <= 0.5) level = 2
            else if (ratio <= 0.75) level = 3
            else level = 4
          }

          contributionsData.push({
            date: contrib.date,
            count,
            level,
          })

          // Check if it's today
          if (contrib.date === today) {
            todayContributions = count
          }

          // Calculate max streak (this is a simplification)
          if (count > 0) {
            let streakCount = 1
            const streakDate = new Date(contrib.date)

            // Look back at previous days
            for (let i = 1; i <= 365; i++) {
              streakDate.setDate(streakDate.getDate() - 1)
              const prevDate = streakDate.toISOString().split("T")[0]
              const prevContrib = data.contributions.find((c) => c.date === prevDate)

              if (prevContrib && prevContrib.count > 0) {
                streakCount++
              } else {
                break
              }
            }

            maxStreak = Math.max(maxStreak, streakCount)
          }
        }

        setContributions(contributionsData)
        setStats({
          total: totalContributions,
          streak: currentStreak,
          today: todayContributions,
        })
        setLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err)
        setError("Failed to load GitHub activity")
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  // Group contributions by week
  const weeks = React.useMemo(() => {
    const result = []
    let week = []

    // Sort contributions by date
    const sortedContributions = [...contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    )

    for (let i = 0; i < sortedContributions.length; i++) {
      week.push(sortedContributions[i])

      if (week.length === 7 || i === sortedContributions.length - 1) {
        result.push(week)
        week = []
      }
    }

    return result
  }, [contributions])

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
      </div>
    )
  }

  if (error) {
    return <div className={`flex items-center justify-center p-4 text-red-500 ${className}`}>{error}</div>
  }

  return (
    <motion.div
      className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border-2 border-purple-500 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-medium text-white">GitHub Contributions</h3>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          @{username}
        </a>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Total</p>
          <p className="text-xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Current Streak</p>
          <p className="text-xl font-bold text-white">{stats.streak} days</p>
        </div>
        <div className="flex-1 bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Today</p>
          <p className="text-xl font-bold text-white">{stats.today}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-[740px]">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <motion.div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm ${
                    day.level === 0
                      ? "bg-gray-800/70"
                      : day.level === 1
                        ? "bg-purple-900/70"
                        : day.level === 2
                          ? "bg-purple-700/70"
                          : day.level === 3
                            ? "bg-purple-500/70"
                            : "bg-purple-300/70"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: weekIndex * 0.03 + dayIndex * 0.01,
                    duration: 0.2,
                  }}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end mt-3 gap-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-sm bg-gray-800/70"></div>
          <div className="w-2 h-2 rounded-sm bg-purple-900/70"></div>
          <div className="w-2 h-2 rounded-sm bg-purple-700/70"></div>
          <div className="w-2 h-2 rounded-sm bg-purple-500/70"></div>
          <div className="w-2 h-2 rounded-sm bg-purple-300/70"></div>
        </div>
        <span className="text-xs text-gray-400">Less → More</span>
      </div>
    </motion.div>
  )
}
