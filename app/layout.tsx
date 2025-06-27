import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Chatbot from "@/components/chatbot/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CAPACITI - Accelerating Tech Careers",
  description:
    "CAPACITI transforms lives through innovative tech training programs. Join our community of tech professionals and accelerate your career.",
  keywords: "tech training, career acceleration, programming, data science, web development, South Africa",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
