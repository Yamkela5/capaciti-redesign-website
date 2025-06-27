"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message (you can implement a toast notification here)
    alert("Thank you! Your message has been sent successfully.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">Ready to Transform Your Career?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're interested in joining our programs, partnering with us, or learning more about our
                impact, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F25251] to-[#8115D0] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D2951] mb-1">Email</h4>
                  <p className="text-gray-600">hello@capaciti.org.za</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F25251] to-[#8115D0] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D2951] mb-1">Phone</h4>
                  <p className="text-gray-600">+27 (0) 21 003 7509</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F25251] to-[#8115D0] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D2951] mb-1">Location</h4>
                  <p className="text-gray-600">
                    Greenacres, Gqeberha, 6001
                    <br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#1D2951] mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[#1D2951] rounded-full flex items-center justify-center text-white hover:bg-[#8115D0] transition-colors duration-200 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                />
              </div>

              <div>
                <Select onValueChange={(value) => handleChange("subject", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="program-inquiry">Program Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="hiring">Hiring Our Graduates</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={5}
                  className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
