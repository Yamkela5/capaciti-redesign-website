import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Instagram, Send } from "lucide-react"

const footerLinks = {
  programs: [
    { name: "Web Development", href: "#programs" },
    { name: "Data Science", href: "#programs" },
    { name: "Digital Marketing", href: "#programs" },
    { name: "Software Engineering", href: "#programs" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "News & Events", href: "#news" },
    { name: "Opportunities", href: "#opportunities" },
    { name: "Partners", href: "#partners" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1D2951] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_1750254041719-cQhUZiT8A9lGksPSIt6tbKjqE69XrY.png"
                alt="CAPACITI Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">CAPACITI</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Accelerating tech careers and transforming lives through innovative training programs and career support.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8115D0] transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#F25251] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#F25251] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#F25251] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Stay updated with our latest programs and success stories.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#8115D0]"
              />
              <Button size="sm" className="bg-gradient-to-r from-[#F25251] to-[#8115D0] hover:shadow-lg px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 CAPACITI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
