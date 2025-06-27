import { Clock, Calendar } from "lucide-react"

const news = [
  {
    category: "Tech Talent",
    date: "June 2, 2025",
    time: "10:07 am",
    readTime: "4 min read",
    title: "Calling African creative entrepreneurs to apply for creative-tech incubation programme",
    excerpt:
      "CAPACITI is launching a new creative-tech incubation programme designed to support African entrepreneurs in building innovative technology solutions that address local challenges.",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    category: "Company Growth",
    date: "May 21, 2025",
    time: "10:24 am",
    readTime: "5 min read",
    title: "CAPACITI Named One of Africa's Fastest Growing Tech Education Companies",
    excerpt:
      "Our commitment to transforming lives through technology education continues as CAPACITI celebrates 5 years of impact and recognition as a leading tech career accelerator.",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    category: "E-Commerce",
    date: "May 5, 2025",
    time: "2:14 pm",
    readTime: "6 min read",
    title: "CAPACITI's Tech Talent is the Key to Africa's E-Commerce Success",
    excerpt:
      "Exploring how our graduates are driving the growth of Africa's e-commerce sector through innovative solutions and technical expertise in web development and digital marketing.",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    category: "Partnership",
    date: "April 28, 2025",
    time: "9:30 am",
    readTime: "3 min read",
    title: "Building Strategic Industry Partnerships for Graduate Placement",
    excerpt:
      "CAPACITI announces new partnerships with leading African companies to create direct pathways from training to employment for our program graduates.",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    category: "Success Stories",
    date: "April 22, 2025",
    time: "11:45 am",
    readTime: "7 min read",
    title: "Cohort 20 Graduation: Celebrating New Tech Professionals",
    excerpt:
      "Join us in celebrating the achievements of our latest cohort of graduates as they embark on their new careers in technology and digital innovation.",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    category: "Education",
    date: "April 15, 2025",
    time: "3:20 pm",
    readTime: "5 min read",
    title: "Transforming Lives Through Technology Access and Education",
    excerpt:
      "Real stories of transformation as we continue to democratize access to technology education and create sustainable career pathways for underrepresented communities.",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

const categories = ["All", "Tech Talent", "Success Stories", "Partnership", "Education", "Company Growth"]

export default function NewsEvents() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">News & Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest programs, success stories, industry insights, and upcoming events.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-[#8115D0] text-[#8115D0] hover:bg-[#8115D0] hover:text-white transition-all duration-200 font-medium text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#1D2951] mb-8">Featured Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news
              .filter((article) => article.featured)
              .map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#1D2951] to-[#8115D0] overflow-hidden">
                    <div className="absolute top-4 left-4 bg-white text-[#1D2951] px-3 py-1 rounded-full text-xs font-semibold">
                      {article.date}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8115D0]/20 to-[#F25251]/20 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{article.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1D2951] mb-3 group-hover:text-[#8115D0] transition-colors duration-200 leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{article.excerpt}</p>

                    <button className="inline-flex items-center text-[#8115D0] font-semibold hover:text-[#1D2951] transition-colors duration-200 group text-sm">
                      READ MORE
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h3 className="text-2xl font-bold text-[#1D2951] mb-8">Recent Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#1D2951] to-[#8115D0] overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white text-[#1D2951] px-3 py-1 rounded-full text-xs font-semibold">
                    {article.date}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8115D0]/20 to-[#F25251]/20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{article.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1D2951] mb-3 group-hover:text-[#8115D0] transition-colors duration-200 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                  <button className="inline-flex items-center text-[#8115D0] font-semibold hover:text-[#1D2951] transition-colors duration-200 group text-sm">
                    READ MORE
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
