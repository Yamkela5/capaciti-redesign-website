"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Upload, CheckCircle } from "lucide-react"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  programName?: string
}

export default function ApplicationModal({ isOpen, onClose, programName = "CAPACITI Program" }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    program: programName,
    experience: "",
    motivation: "",
    availability: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        program: programName,
        experience: "",
        motivation: "",
        availability: "",
      })
      onClose()
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1D2951] to-[#8115D0] text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Apply to {programName}</h2>
              <p className="text-white/90">Join our ecosystem and transform your career</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            // Success State
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1D2951] mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest in {programName}. We'll review your application and get back to you within
                5-7 business days.
              </p>
              <p className="text-sm text-gray-500">This window will close automatically...</p>
            </div>
          ) : (
            // Application Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#1D2951] mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                      className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Surname *</label>
                    <Input
                      type="text"
                      value={formData.surname}
                      onChange={(e) => handleChange("surname", e.target.value)}
                      required
                      className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                      placeholder="Enter your surname"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#1D2951] mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program of Interest *</label>
                <Select onValueChange={(value) => handleChange("program", value)} defaultValue={programName}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Development">Web Development (12 weeks)</SelectItem>
                    <SelectItem value="Data Science">Data Science (16 weeks)</SelectItem>
                    <SelectItem value="Digital Marketing">Digital Marketing (10 weeks)</SelectItem>
                    <SelectItem value="Software Engineering">Software Engineering (20 weeks)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technical Experience Level *</label>
                <Select onValueChange={(value) => handleChange("experience", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete Beginner</SelectItem>
                    <SelectItem value="some-knowledge">Some Basic Knowledge</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                <Select onValueChange={(value) => handleChange("availability", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]">
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                    <SelectItem value="part-time">Part-time (20-30 hours/week)</SelectItem>
                    <SelectItem value="evenings">Evenings & Weekends</SelectItem>
                    <SelectItem value="flexible">Flexible Schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join CAPACITI? *
                </label>
                <Textarea
                  value={formData.motivation}
                  onChange={(e) => handleChange("motivation", e.target.value)}
                  required
                  rows={4}
                  className="border-gray-300 focus:border-[#8115D0] focus:ring-[#8115D0]"
                  placeholder="Tell us about your goals and what you hope to achieve through this program..."
                />
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload CV (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#8115D0] transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag and drop your CV here, or{" "}
                    <button type="button" className="text-[#8115D0] hover:underline">
                      browse files
                    </button>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 5MB</p>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-[#8115D0] border-gray-300 rounded focus:ring-[#8115D0]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-[#8115D0] hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#8115D0] hover:underline">
                    Privacy Policy
                  </a>
                  . I consent to CAPACITI contacting me about this application and future opportunities.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-[#1D2951] to-[#8115D0] hover:shadow-lg hover:shadow-[#8115D0]/25 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
