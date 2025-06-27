import { Users, Rocket, Heart, Lightbulb } from "lucide-react"

const timeline = [
  {
    title: "The Vision",
    content:
      "CAPACITI was born from a simple yet powerful vision: to bridge the gap between talent and opportunity in the tech industry. We recognized that while South Africa has incredible human potential, many talented individuals lacked access to the skills and networks needed to break into tech careers.",
  },
  {
    title: "The Mission",
    content:
      "Our mission is to democratize access to tech education and create pathways for underrepresented communities to enter high-growth careers. We believe that by empowering individuals with cutting-edge skills, we can drive both personal transformation and economic development.",
  },
  {
    title: "The Impact",
    content:
      "Today, CAPACITI has become a leading tech career accelerator, with hundreds of graduates working at top companies across the continent. Our holistic approach combines technical training, soft skills development, and career placement support to ensure lasting success.",
  },
]

const values = [
  {
    icon: Users,
    title: "Inclusivity",
    description: "We believe diverse teams drive innovation and create better solutions for everyone.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "We maintain the highest standards in our training programs and career support services.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Every decision we make is guided by our commitment to creating meaningful, lasting change.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our methods to stay ahead of industry trends and employer needs.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">Building Tomorrow's Tech Leaders Today</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8115D0] to-[#F25251]"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-[#1D2951] to-[#8115D0] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2951] mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-[#1D2951] mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-15 h-15 bg-gradient-to-br from-[#F25251] to-[#8115D0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1D2951] mb-3">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
