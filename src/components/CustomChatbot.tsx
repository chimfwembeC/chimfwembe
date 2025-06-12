import { useState, useRef, useEffect } from "react"
import { Send, User, Bot, MessageCircle, X, Mail, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface LeadInfo {
  Name: string
  Email: string
  Phone: string
  submittedAt: string
  formMode: string
}

export default function CustomChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const webhookUrl = "http://localhost:5678/webhook-test/468d5f15-28cc-4db3-8f0d-4fc4a44b3022"

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Initial greeting
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        text: "Hello! I'm Chimfwembe's virtual assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date()
      }
    ])
    setUnreadCount(1)
  }, [])

  // Reset unread count when opening chat
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Send message to n8n webhook with CORS headers
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          message: inputValue,
          userId: "visitor-" + Math.floor(Math.random() * 1000),
          timestamp: new Date().toISOString(),
          leadInfo: leadInfo
        })
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Get response from n8n
      const data = await response.json()
      
      // Check if we should ask for lead info
      if (!leadInfo && !showLeadForm && messages.length >= 2) {
        setShowLeadForm(true)
        
        // Add lead collection message
        const leadMessage: Message = {
          id: Date.now().toString(),
          text: "I'd be happy to help you further. Could you please share your contact information so we can follow up with you?",
          sender: "bot",
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, leadMessage])
      } else {
        // Add bot response
        const botMessage: Message = {
          id: Date.now().toString(),
          text: data.response || "Thanks for your message. I'll make sure Chimfwembe gets back to you soon!",
          sender: "bot",
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, botMessage])
      }
      
      // Increment unread count if chat is closed
      if (!isOpen) {
        setUnreadCount(prev => prev + 1)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      
      // Add error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Sorry, I couldn't process your request. Please try again later or email directly at kangwac3@gmail.com.",
        sender: "bot",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    
    if (!email) return
    
    const newLeadInfo: LeadInfo = { 
      Name: name || "Website Visitor",
      Email: email,
      Phone: phone || "",
      submittedAt: new Date().toISOString(),
      formMode: "website_chat"
    }
    
    setLeadInfo(newLeadInfo)
    setShowLeadForm(false)
    
    // Add thank you message
    const thankYouMessage: Message = {
      id: Date.now().toString(),
      text: `Thank you, ${name || "there"}! I've recorded your contact information. Chimfwembe will get back to you soon.`,
      sender: "bot",
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, thankYouMessage])
    
    // Send lead info to webhook
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify([newLeadInfo]) // Send as array to match expected format
      })
    } catch (error) {
      console.error("Error sending lead info:", error)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        
        {/* Unread badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute bottom-16 right-0 w-80 h-[400px] bg-gradient-to-br from-purple-900 to-indigo-800 rounded-lg shadow-xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-white font-medium flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/favicon-32x32.png" 
                  alt="Logo" 
                  className="w-6 h-6 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <h3 className="text-lg">Chimfwembe's Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`
                    max-w-[80%] p-3 rounded-lg 
                    ${message.sender === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-gray-800 text-gray-100 rounded-tl-none'}
                  `}>
                    <div className="flex items-center gap-2 mb-1">
                      {message.sender === 'bot' ? (
                        <Bot className="h-4 w-4 text-purple-400" />
                      ) : (
                        <User className="h-4 w-4 text-indigo-300" />
                      )}
                      <span className="text-xs opacity-75">
                        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Lead capture form */}
              {showLeadForm && (
                <div className="bg-gray-800 rounded-lg p-4 mb-3">
                  <h4 className="text-white text-sm font-medium mb-3">Please share your contact details:</h4>
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <div>
                      <label className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                        <Mail className="h-3 w-3" />
                        Email (required)
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-gray-700 border-none rounded-md px-3 py-1.5 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                        <User className="h-3 w-3" />
                        Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        className="w-full bg-gray-700 border-none rounded-md px-3 py-1.5 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                        <Phone className="h-3 w-3" />
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full bg-gray-700 border-none rounded-md px-3 py-1.5 text-sm text-white"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-2 rounded-md text-white text-sm font-medium"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-gray-900 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 border-none rounded-full px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full text-white disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
