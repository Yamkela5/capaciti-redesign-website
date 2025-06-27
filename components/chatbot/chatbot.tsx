"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const knowledgeBase = {
  about: [
    "CAPACITI is a leading tech career accelerator that transforms lives through innovative training programs.",
    "We bridge the gap between talent and opportunity in the tech industry.",
    "Our mission is to democratize access to tech education and create pathways for underrepresented communities.",
  ],
  programs: [
    "We offer comprehensive tech training programs including Web Development (12 weeks), Data Science (16 weeks), Digital Marketing (10 weeks), and Software Engineering (20 weeks).",
    "Our holistic approach combines technical training, soft skills development, and career placement support.",
    "All programs include hands-on project-based learning with real-world applications.",
  ],
  application: [
    "Applications are typically open at the beginning of each quarter.",
    "No prior coding experience is required for most programs.",
    "The application process includes an online form, interview, and assessment.",
    "Visit our opportunities page or contact us directly to learn about current openings.",
  ],
  contact: [
    "You can reach us at hello@capaciti.org.za or call +27 (0) 21 003 7509",
    "Our office is located in Greenacres, Gqeberha, 6001.",
    "Follow us on LinkedIn, Twitter, and Instagram for updates.",
  ],
}

const suggestions = ["What is CAPACITI?", "Our Programs", "How to Apply"]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm the CAPACITI Assistant. I can help you learn about our tech career acceleration programs, team, and how we're transforming lives through technology education. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("what is") || message.includes("about") || message.includes("capaciti")) {
      return knowledgeBase.about[Math.floor(Math.random() * knowledgeBase.about.length)]
    }

    if (message.includes("program") || message.includes("course") || message.includes("training")) {
      return knowledgeBase.programs[Math.floor(Math.random() * knowledgeBase.programs.length)]
    }

    if (message.includes("apply") || message.includes("application") || message.includes("join")) {
      return knowledgeBase.application[Math.floor(Math.random() * knowledgeBase.application.length)]
    }

    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("phone") ||
      message.includes("email")
    ) {
      return knowledgeBase.contact[Math.floor(Math.random() * knowledgeBase.contact.length)]
    }

    return "I'd be happy to help you learn about CAPACITI! I can tell you about our programs, application process, or how to get in touch with us. What specifically would you like to know?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Container */}
      {isOpen && (
        <div className="mb-4 w-80 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1D2951] text-white px-4 py-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png"
                alt="CAPACITI Assistant"
                className="w-6 h-6"
              />
              <span className="font-semibold text-sm">CAPACITI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "bot" && (
                  <div className="flex items-start gap-2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png"
                      alt="Bot"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="max-w-[85%] p-3 rounded-2xl bg-white shadow-sm border border-gray-100">
                      <p className="text-sm text-gray-800 leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                )}
                {message.sender === "user" && (
                  <div className="max-w-[85%] p-3 rounded-2xl bg-[#1D2951] text-white">
                    <p className="text-sm">{message.text}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Suggestions (only show for first bot message) */}
            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 text-sm bg-white hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shadow-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png"
                    alt="Bot"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  />
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about CAPACITI..."
                className="flex-1 text-sm border-gray-200 focus:border-[#1D2951] focus:ring-[#1D2951] rounded-xl"
                maxLength={500}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="bg-[#1D2951] hover:bg-[#8115D0] px-3 rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 relative border border-gray-200"
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png"
          alt="CAPACITI Assistant"
          className="w-8 h-8"
        />
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#F25251] rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      )}
    </div>
  )
}
