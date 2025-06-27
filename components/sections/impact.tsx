"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Graduates Placed",
    description: "Tech professionals now working across Africa",
  },
  {
    number: 85,
    suffix: "%",
    label: "Job Placement Rate",
    description: "Within 6 months of program completion",
  },
  {
    number: 150,
    suffix: "%",
    label: "Average Salary Increase",
    description: "For graduates entering tech careers",
  },
  {
    number: 50,
    suffix: "+",
    label: "Partner Companies",
    description: "Actively hiring our graduates",
  },
]

const testimonials = [
  {
    text: "CAPACITI didn't just teach me to code – they taught me how to think like a developer. The support I received during and after the program was incredible. I went from having no tech background to landing a role at a leading fintech company.",
    author: "Sarah Mokwena",
    role: "Software Developer at PayFast",
  },
  {
    text: "The practical approach to learning at CAPACITI is what sets them apart. Working on real projects and getting mentorship from industry professionals prepared me for the challenges of a tech career.",
    author: "Thabo Ndaba",
    role: "Full Stack Developer at Takealot",
  },
  {
    text: "CAPACITI's focus on both technical skills and professional development made all the difference. The career support continued long after graduation, helping me navigate my first year in tech.",
    author: "Nomsa Dlamini",
    role: "Data Analyst at Standard Bank",
  },
]

export default function Impact() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              const increment = stat.number / 50
              let current = 0
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.number) {
                  current = stat.number
                  clearInterval(timer)
                }
                setAnimatedStats((prev) => {
                  const newStats = [...prev]
                  newStats[index] = Math.floor(current)
                  return newStats
                })
              }, 40)
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("impact-stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="impact" className="py-20 bg-[#1D2951] text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#F1D1D1] uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforming Lives, One Career at a Time</h2>
        </div>

        {/* Stats */}
        <div id="impact-stats" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl font-extrabold text-[#F25251] mb-2">
                {animatedStats[index]}
                {stat.suffix}
              </div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden mb-8">
            <div className="text-center">
              <Quote className="w-12 h-12 text-[#F25251] mx-auto mb-6" />
              <p className="text-xl md:text-2xl italic leading-relaxed text-gray-200 mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-1">{testimonials[currentTestimonial].author}</h4>
                <p className="text-[#F1D1D1]">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-[#F25251]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
