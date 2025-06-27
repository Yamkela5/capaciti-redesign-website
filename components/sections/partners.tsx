const partners = [
  "Tech Corp",
  "Innovation Hub",
  "Digital Solutions",
  "Future Labs",
  "Code Academy",
  "Tech Ventures",
  "Data Dynamics",
  "Cloud Connect",
]

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#8115D0] bg-gradient-to-r from-[#8115D0] to-[#F25251] bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2951] mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with leading companies and organizations to provide the best opportunities for our graduates.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-24 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="font-semibold text-gray-600 group-hover:text-[#1D2951] transition-colors duration-200">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
