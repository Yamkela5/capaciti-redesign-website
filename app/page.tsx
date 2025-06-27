import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Programs from "@/components/sections/programs"
import Team from "@/components/sections/team"
import Partners from "@/components/sections/partners"
import Impact from "@/components/sections/impact"
import NewsEvents from "@/components/sections/news-events"
import Opportunities from "@/components/sections/opportunities"
import Contact from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Team />
      <Partners />
      <Impact />
      <NewsEvents />
      <Opportunities />
      <Contact />
    </main>
  )
}
