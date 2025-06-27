"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Users, Rocket, GraduationCap, MapPin, Clock, Building, ExternalLink, Share } from "lucide-react"

const tabs = [
  { id: "careers", label: "Careers" },
  { id: "positions", label: "Open Positions" },
]

const features = [
  {
    icon: Heart,
    text: "Make a meaningful impact on people's lives",
  },
  {
    icon: Users,
    text: "Work with a diverse, passionate team",
  },
  {
    icon: Rocket,
    text: "Be part of Africa's tech transformation",
  },
  {
    icon: GraduationCap,
    text: "Continuous learning and development",
  },
]

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState("careers")

  return (
    <section id="opportunities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Join Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore career opportunities and discover how you can be part of our mission to transform lives through
            technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#1D2951] to-[#8115D0] text-white shadow-md"
                    : "text-gray-600 hover:text-[#8115D0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "careers" && (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#1D2951]">Join Our Mission</h3>
                  <span className="bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Multiple Roles
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  At CAPACITI, we're always looking for passionate individuals who share our vision of transforming
                  lives through technology education. Whether you're an educator, industry professional, or someone with
                  a heart for social impact, there's a place for you on our team.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#8115D0] to-[#F25251] rounded-full flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  We believe in creating an inclusive environment where everyone can thrive. Our team represents diverse
                  backgrounds, experiences, and perspectives, united by our shared commitment to empowering others
                  through technology.
                </p>

                <Button
                  asChild
                  className="bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300"
                >
                  <a href="mailto:careers@capaciti.org" className="flex items-center gap-2">
                    Send Your CV
                    <span>✉️</span>
                  </a>
                </Button>
              </div>
            </div>
          )}

          {activeTab === "positions" && (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#1D2951]">Placement Manager - CAPACITI</h3>
                  <span className="bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Full-time
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Cape Town, South Africa
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Full-time
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Career Services
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#1D2951] mb-3">About the Role</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We are seeking a dynamic Placement Manager to join our CAPACITI team. This role is crucial in
                    connecting our graduates with meaningful employment opportunities and building sustainable
                    partnerships with industry employers.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1D2951] mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#8115D0] rounded-full mt-2 flex-shrink-0"></span>
                      Develop and maintain relationships with potential employers and industry partners
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#8115D0] rounded-full mt-2 flex-shrink-0"></span>
                      Create and implement job placement strategies for CAPACITI graduates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#8115D0] rounded-full mt-2 flex-shrink-0"></span>
                      Coordinate career fairs, networking events, and employer engagement activities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#8115D0] rounded-full mt-2 flex-shrink-0"></span>
                      Provide career coaching and job search support to program participants
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#8115D0] rounded-full mt-2 flex-shrink-0"></span>
                      Track and report on placement outcomes and graduate success metrics
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1D2951] mb-3">Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#F25251] rounded-full mt-2 flex-shrink-0"></span>
                      Bachelor's degree in Human Resources, Business, or related field
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#F25251] rounded-full mt-2 flex-shrink-0"></span>
                      3+ years of experience in recruitment, career services, or talent acquisition
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#F25251] rounded-full mt-2 flex-shrink-0"></span>
                      Strong understanding of the South African tech job market
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#F25251] rounded-full mt-2 flex-shrink-0"></span>
                      Excellent communication and relationship-building skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#F25251] rounded-full mt-2 flex-shrink-0"></span>
                      Passion for social impact and youth development
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300"
                  >
                    <a
                      href="https://capaciti.breezy.hr/"
                      target="_blank"
                      className="flex items-center gap-2"
                      rel="noreferrer"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#8115D0] text-[#8115D0] hover:bg-[#8115D0] hover:text-white"
                  >
                    <Share className="w-4 h-4 mr-2" />
                    Share Job
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
