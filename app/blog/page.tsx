import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Skills Every Tech Professional Needs",
    excerpt:
      "Discover the key technical and soft skills that will set you apart in today's competitive tech landscape.",
    category: "Career Tips",
    date: "June 15, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg?height=240&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "From Zero to Developer: Sarah's Transformation Journey",
    excerpt:
      "Follow Sarah's inspiring journey from complete beginner to landing her dream job as a software developer.",
    category: "Success Stories",
    date: "June 10, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=240&width=400",
    featured: true,
  },
  {
    id: 3,
    title: "The Future of Data Science in Africa",
    excerpt: "Exploring emerging trends and opportunities in data science across the African continent.",
    category: "Industry Trends",
    date: "June 5, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=240&width=400",
    featured: false,
  },
  {
    id: 4,
    title: "Building Your First Portfolio: A Developer's Guide",
    excerpt: "Learn how to create a compelling portfolio that showcases your skills and attracts employers.",
    category: "Career Tips",
    date: "May 28, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg?height=240&width=400",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of Remote Work in African Tech",
    excerpt: "How remote work is reshaping the African tech landscape and creating new opportunities.",
    category: "Industry Trends",
    date: "May 22, 2025",
    readTime: "4 min read",
    image: "/placeholder.svg?height=240&width=400",
    featured: false,
  },
  {
    id: 6,
    title: "Mastering the Technical Interview",
    excerpt: "Tips and strategies to ace your next technical interview and land your dream tech job.",
    category: "Career Tips",
    date: "May 15, 2025",
    readTime: "9 min read",
    image: "/placeholder.svg?height=240&width=400",
    featured: false,
  },
]

const categories = ["All", "Career Tips", "Success Stories", "Industry Trends", "Tech Skills"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1D2951] to-[#8115D0] text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CAPACITI Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Insights, stories, and updates from the world of tech education and career transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-[#8115D0] text-[#8115D0] hover:bg-[#8115D0] hover:text-white transition-all duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#1D2951] mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span className="bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1D2951] mb-3 group-hover:text-[#8115D0] transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-[#8115D0] font-semibold hover:text-[#1D2951] transition-colors duration-200 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D2951] mb-8">Latest Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-gradient-to-r from-[#F25251] to-[#8115D0] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1D2951] mb-3 group-hover:text-[#8115D0] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-[#8115D0] font-semibold hover:text-[#1D2951] transition-colors duration-200 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
