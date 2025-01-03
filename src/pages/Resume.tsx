import React, { useEffect, useState } from "react";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import CV from "../components/assets/docs/chimfwembe Kangwa cv.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const education = [
  {
    degree: "Diploma in Information Technology",
    school: "Evelyn Hone College of Applied Arts and Commerce",
    period: "2021 - 2023",
    description:
      "Focused on software development, system testing, database management, cyber security, and networking. Gained hands-on experience in front-end and back-end development.",
  },
  {
    degree: "Grade 12 Certificate",
    school: "Nakonde Secondary School",
    period: "2018 - 2020",
    description:
      "Achieved strong academic performance with a focus on mathematics and sciences, building a solid foundation for IT studies.",
  },
  {
    degree: "Junior Secondary Certificate",
    school: "Chinsali Day Secondary School",
    period: "2016 - 2018",
    description:
      "Completed foundational studies with emphasis on key academic subjects, preparing for advanced education.! But failed Computer studies (broken) UNBELIEVEABLE!!",
  },
  {
    degree: "Primary School Certificate",
    school: "New Kanyama Primary School",
    period: "2009 - 2015",
    description:
      "Established a strong educational foundation with early exposure to technology and problem-solving skills.",
  },
  {
    degree: "Self-Taught Enthusiast",
    school: "University of Home",
    period: "2009 - Present",
    description:
      "Developed a passion for IT and computers through self-directed learning at home. Explored programming, system troubleshooting, and emerging technologies, which inspired a career in information technology.",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
  },
];

export default function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const previewCv = "../components/assets/docs/chimfwembe Kangwa cv.pdf";
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-gray-600 mb-4">
            Full Stack Developer with expertise in modern web technologies
          </p>

          {/* <div className="flex justify-center items-center">
            <div className="border-indigo-500 border-2 rounded-lg w-1/2 m-4">
              <Document
                file={previewCv}
                onLoadSuccess={onDocumentLoadSuccess}
                className="d-flex justify-content-center"
              >
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </div> */}
          <a
            href={CV}
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="relative group pl-4"
              >
                {/* Timeline line */}
                <div className="absolute left-1 -top-4 h-full w-0.5 bg-gray-200 group-last:h-48"></div>

                {/* Timeline dot */}
                <div className="absolute left-[-8px] -top-8 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white"></div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-600 mb-2">{edu.school}</p>
                  <p className="text-gray-600 mb-2">{edu.period}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-indigo-600 mb-1">{cert.issuer}</p>
                <p className="text-gray-600">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
