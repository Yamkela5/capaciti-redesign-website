"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programmes", href: "#programs" },
  { name: "Impact", href: "#impact" },
  { name: "Blog", href: "/blog" },
  { name: "News & Events", href: "#news" },
  { name: "Opportunities", href: "#opportunities" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/98 backdrop-blur-md shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_1750254041719-cQhUZiT8A9lGksPSIt6tbKjqE69XrY.png"
              alt="CAPACITI Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-[#1D2951]">CAPACITI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#8115D0] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8115D0] to-[#F25251] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300"
            >
              <Link href="#contact">Work With Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#1D2951]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#8115D0] font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full bg-gradient-to-r from-[#1D2951] to-[#8115D0] mt-4">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Work With Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
