// Impact page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  initializeImpactAnimations()
  initializeScrollCircles()
  initializeCounterAnimations()
})

// Initialize impact page animations
function initializeImpactAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".story-card, .metric-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Initialize scroll-based circle animations
function initializeScrollCircles() {
  const circles = document.querySelectorAll(".circle")
  const impactHero = document.querySelector(".impact-hero")

  if (!circles.length || !impactHero) return

  // Store initial positions
  const initialPositions = Array.from(circles).map((circle) => {
    const rect = circle.getBoundingClientRect()
    const containerRect = impactHero.getBoundingClientRect()
    return {
      element: circle,
      initialX: rect.left - containerRect.left,
      initialY: rect.top - containerRect.top,
      speed: Number.parseFloat(circle.dataset.speed) || 0.5,
    }
  })

  // Scroll handler for circle movement
  function handleCircleScroll() {
    const scrollY = window.scrollY
    const heroRect = impactHero.getBoundingClientRect()
    const heroTop = scrollY + heroRect.top
    const heroHeight = heroRect.height

    // Only animate when hero section is in view
    if (scrollY >= heroTop - window.innerHeight && scrollY <= heroTop + heroHeight) {
      const scrollProgress = (scrollY - heroTop + window.innerHeight) / (heroHeight + window.innerHeight)

      initialPositions.forEach(({ element, speed }) => {
        const moveX = scrollProgress * 100 * speed
        const moveY = Math.sin(scrollProgress * Math.PI * 2) * 20 * speed
        const rotation = scrollProgress * 360 * speed * 0.5

        element.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`
      })
    }
  }

  // Optimized scroll handler
  let ticking = false
  function optimizedScrollHandler() {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleCircleScroll()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener("scroll", optimizedScrollHandler)
}

// Initialize counter animations
function initializeCounterAnimations() {
  const counters = document.querySelectorAll(".stat-number, .metric-number")

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })
}

// Enhanced counter animation function
function animateCounter(element) {
  const target = Number.parseInt(element.dataset.target)
  const duration = 2000 // 2 seconds
  const increment = target / (duration / 16) // 60fps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 16)
}

// Parallax effect for impact hero section
function initializeParallax() {
  const impactHero = document.querySelector(".impact-hero")
  const impactText = document.querySelector(".impact-text")

  if (!impactHero || !impactText) return

  function handleParallax() {
    const scrollY = window.scrollY
    const rate = scrollY * -0.5

    impactText.style.transform = `translateY(${rate}px)`
  }

  let parallaxTicking = false
  function optimizedParallaxHandler() {
    if (!parallaxTicking) {
      requestAnimationFrame(() => {
        handleParallax()
        parallaxTicking = false
      })
      parallaxTicking = true
    }
  }

  window.addEventListener("scroll", optimizedParallaxHandler)
}

// Initialize parallax on load
document.addEventListener("DOMContentLoaded", initializeParallax)

// Smooth reveal animation for impact stats
function initializeStatsReveal() {
  const impactStats = document.querySelector(".impact-stats")

  if (!impactStats) return

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stats = entry.target.querySelectorAll(".impact-stat")
          stats.forEach((stat, index) => {
            setTimeout(() => {
              stat.style.opacity = "1"
              stat.style.transform = "translateY(0)"
            }, index * 200)
          })
          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 },
  )

  // Set initial state
  const stats = impactStats.querySelectorAll(".impact-stat")
  stats.forEach((stat) => {
    stat.style.opacity = "0"
    stat.style.transform = "translateY(30px)"
    stat.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  statsObserver.observe(impactStats)
}

// Initialize stats reveal
document.addEventListener("DOMContentLoaded", initializeStatsReveal)

// Add mouse interaction for circles
function initializeCircleInteraction() {
  const circles = document.querySelectorAll(".circle")
  const impactHero = document.querySelector(".impact-hero")

  if (!circles.length || !impactHero) return

  impactHero.addEventListener("mousemove", (e) => {
    const rect = impactHero.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    circles.forEach((circle) => {
      const circleRect = circle.getBoundingClientRect()
      const circleX = circleRect.left - rect.left + circleRect.width / 2
      const circleY = circleRect.top - rect.top + circleRect.height / 2

      const deltaX = mouseX - circleX
      const deltaY = mouseY - circleY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      if (distance < 200) {
        const force = (200 - distance) / 200
        const moveX = deltaX * force * 0.3
        const moveY = deltaY * force * 0.3

        circle.style.transform += ` translate(${moveX}px, ${moveY}px)`
      }
    })
  })

  impactHero.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.style.transform = circle.style.transform.replace(/translate$$[^)]*$$/g, "")
    })
  })
}

// Initialize circle interaction
document.addEventListener("DOMContentLoaded", initializeCircleInteraction)

// Initialize companies slider
function initializeCompaniesSlider() {
  const track = document.getElementById("companiesTrack")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const dotsContainer = document.getElementById("sliderDots")

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return

  const companies = track.querySelectorAll(".company-logo")
  const totalCompanies = companies.length / 2 // Since we duplicate for seamless loop
  const companiesPerView = 4
  const totalSlides = Math.ceil(totalCompanies / companiesPerView)

  let currentSlide = 0
  let isAutoPlaying = true
  let autoPlayInterval

  // Create dots
  function createDots() {
    dotsContainer.innerHTML = ""
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div")
      dot.className = `slider-dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => goToSlide(i))
      dotsContainer.appendChild(dot)
    }
  }

  // Update dots
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".slider-dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide)
    })
  }

  // Go to specific slide
  function goToSlide(slideIndex) {
    currentSlide = slideIndex
    const translateX = -(slideIndex * (100 / totalSlides))
    track.style.transform = `translateX(${translateX}%)`
    track.style.animation = "none"
    updateDots()

    // Resume animation after manual navigation
    setTimeout(() => {
      if (isAutoPlaying) {
        track.style.animation = "slide 30s linear infinite"
      }
    }, 500)
  }

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    goToSlide(currentSlide)
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    goToSlide(currentSlide)
  }

  // Auto play
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      if (isAutoPlaying) {
        nextSlide()
      }
    }, 4000)
  }

  // Stop auto play
  function stopAutoPlay() {
    clearInterval(autoPlayInterval)
  }

  // Pause on hover
  track.addEventListener("mouseenter", () => {
    isAutoPlaying = false
    track.style.animationPlayState = "paused"
    stopAutoPlay()
  })

  track.addEventListener("mouseleave", () => {
    isAutoPlaying = true
    track.style.animationPlayState = "running"
    startAutoPlay()
  })

  // Button event listeners
  nextBtn.addEventListener("click", () => {
    stopAutoPlay()
    nextSlide()
    setTimeout(startAutoPlay, 2000)
  })

  prevBtn.addEventListener("click", () => {
    stopAutoPlay()
    prevSlide()
    setTimeout(startAutoPlay, 2000)
  })

  // Initialize
  createDots()
  startAutoPlay()

  // Handle visibility change (pause when tab is not active)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoPlay()
      track.style.animationPlayState = "paused"
    } else {
      if (isAutoPlaying) {
        startAutoPlay()
        track.style.animationPlayState = "running"
      }
    }
  })
}

// Enhanced circle animations with company logos interaction
function initializeEnhancedCircles() {
  const circles = document.querySelectorAll(".circle")
  const companiesSection = document.querySelector(".companies-slider")

  if (!circles.length || !companiesSection) return

  // Add interaction when companies section is in view
  const companiesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          circles.forEach((circle, index) => {
            circle.style.animation = `float 6s ease-in-out infinite ${index * 0.5}s, 
                                   pulse 4s ease-in-out infinite ${index * 0.3}s`
          })
        }
      })
    },
    { threshold: 0.3 },
  )

  companiesObserver.observe(companiesSection)
}

// Initialize all slider functionality
document.addEventListener("DOMContentLoaded", () => {
  initializeCompaniesSlider()
  initializeEnhancedCircles()
})

// Add smooth scroll behavior for impact stats
function initializeImpactStatsScroll() {
  const impactStats = document.querySelectorAll(".impact-stat")

  impactStats.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.2}s`
    stat.classList.add("animate-fade-in-up")
  })
}

// Initialize on load
document.addEventListener("DOMContentLoaded", initializeImpactStatsScroll)
