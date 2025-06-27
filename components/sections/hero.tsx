"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Rocket, Code, Database, Smartphone, Globe, BarChart3, Cpu } from "lucide-react"
import Link from "next/link"

const stats = [
  { number: "500+", label: "Graduates" },
  { number: "85%", label: "Placement Rate" },
  { number: "20+", label: "Cohorts" },
]

const floatingIcons = [
  { icon: Code, delay: "0s", position: "top-[10%] right-[15%]" },
  { icon: Database, delay: "1s", position: "bottom-[15%] left-[10%]" },
  { icon: BarChart3, delay: "2s", position: "top-[25%] left-[5%]" },
  { icon: Cpu, delay: "0.5s", position: "bottom-[5%] right-[25%]" },
  { icon: Globe, delay: "1.5s", position: "top-[50%] right-[5%]" },
  { icon: Smartphone, delay: "2.5s", position: "top-[70%] left-[25%]" },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D2951]/80 via-[#8115D0]/60 to-[#1D2951]/80 z-10"></div>
        <iframe
          src="https://www.youtube.com/embed/T6tDCv623-A?autoplay=1&mute=1&loop=1&playlist=T6tDCv623-A&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          className="w-full h-full object-cover scale-110"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-20 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f1d1d1' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm font-medium animate-pulse">
              <Rocket className="w-4 h-4" />
              <span>Accelerating Tech Careers</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Accelerating{" "}
              <span className="bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent">Tech</span>
              <br />
              <span className="bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent">
                Careers
              </span>
              ,<br />
              Transforming Lives
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              CAPACITI is more than a training program – we're a catalyst for change, empowering individuals to break
              into the tech industry and build meaningful careers that drive innovation and economic growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-xl hover:shadow-[#8115D0]/30 transition-all duration-300 group"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Work With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <Link href="#about" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Central Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8115D0]/30 via-[#F25251]/20 to-transparent backdrop-blur-3xl border border-white/10 animate-pulse"></div>

              {/* Floating Tech Icons - Made Smaller */}
              {floatingIcons.map((IconComponent, index) => (
                <div
                  key={index}
                  className={`absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${IconComponent.position} group cursor-pointer`}
                  style={{
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: IconComponent.delay,
                  }}
                >
                  <IconComponent.icon className="w-5 h-5 text-[#8115D0] group-hover:text-[#F25251] transition-colors duration-300" />
                </div>
              ))}

              {/* Center Tech Badge - Also Made Smaller */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1D2951] to-[#8115D0] rounded-full flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl font-bold text-[#8115D0] mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(-30px) rotate(-5deg); }
        }
      `}</style>
    </section>
  )
}
