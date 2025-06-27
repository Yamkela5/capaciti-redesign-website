import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Nash",
    role: "Program Director",
    bio: "Passionate about bridging the skills gap in tech, Nash leads our program development with over 10 years of experience in tech education and training.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nash4_1750253314898.JPG-dXCIuyvOCf29Rbawk2uGKd5mHGt6DW.jpeg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Chanel",
    role: "Career Development Lead",
    bio: "Chanel specializes in career coaching and industry partnerships, helping our graduates transition successfully into their new tech careers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chanel11_1750253314899.JPG-mnpEvYDweL3SJvXBe19vE9d5AcYs0R.jpeg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Chesarae",
    role: "Technical Lead",
    bio: "With a strong background in software development, Chesarae ensures our curriculum stays current with industry standards and emerging technologies.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chesarae3_1750253314899.JPG-01ce6dKmuYY21vzXJrugYOCIdClde3.jpeg",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Kelly",
    role: "Operations Manager",
    bio: "Kelly ensures smooth operations across all our programs, from student onboarding to graduation ceremonies and alumni support.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelly1_1750253314900.JPG-ec4SskG3DagIVMa9HD4VH0yvy6YxFy.jpeg",
    linkedin: "#",
    email: "#",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">The People Behind the Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of educators, industry professionals, and career coaches brings together decades of
            experience in tech education and talent development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1D2951]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1D2951] hover:bg-[#F25251] hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.email}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1D2951] hover:bg-[#F25251] hover:text-white transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1D2951] mb-1">{member.name}</h3>
                <p className="text-[#8115D0] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
