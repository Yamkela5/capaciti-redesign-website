"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, BarChart3, Megaphone, Terminal } from "lucide-react"
import ApplicationModal from "@/components/modals/application-modal"

const programs = [
  {
    icon: Code,
    title: "Web Development",
    description: "Master frontend and backend development with modern frameworks like React, Node.js, and databases.",
    features: ["HTML5, CSS3, JavaScript", "React & Node.js", "Database Management", "API Development"],
    duration: "12 Weeks",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Learn to extract insights from data using Python, machine learning, and visualization tools.",
    features: ["Python & R Programming", "Machine Learning", "Data Visualization", "Statistical Analysis"],
    duration: "16 Weeks",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Master digital marketing strategies, SEO, social media, and analytics for the modern marketplace.",
    features: ["SEO & SEM", "Social Media Marketing", "Analytics & Reporting", "Content Strategy"],
    duration: "10 Weeks",
  },
  {
    icon: Terminal,
    title: "Software Engineering",
    description: "Build robust applications with modern programming languages and industry best practices.",
    features: ["Object-Oriented Programming", "Software Architecture", "Testing & Debugging", "Version Control"],
    duration: "20 Weeks",
  },
]

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState("")

  const handleApplyClick = (programTitle: string) => {
    setSelectedProgram(programTitle)
    setIsModalOpen(true)
  }

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">Comprehensive Tech Training That Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our carefully designed programs combine technical skills, industry experience, and career support to ensure
            you're ready for success in the tech industry.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F25251] to-[#8115D0]"></div>

              {/* Icon */}
              <div className="w-15 h-15 bg-gradient-to-br from-[#1D2951] to-[#8115D0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <program.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1D2951] mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-[#8115D0] rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Duration */}
              <div className="inline-block bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-3 py-1 rounded-md text-sm font-semibold mb-4">
                {program.duration}
              </div>

              {/* Apply Button */}
              <Button
                onClick={() => handleApplyClick(program.title)}
                className="w-full bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        {/* General CTA */}
        <div className="text-center">
          <Button
            onClick={() => handleApplyClick("CAPACITI Program")}
            size="lg"
            className="bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300 px-8 py-3 text-lg"
          >
            Apply Now
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} programName={selectedProgram} />
    </section>
  )
}
