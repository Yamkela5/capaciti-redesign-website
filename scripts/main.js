// Import or declare the lucide variable before using it
const lucide = window.lucide || {}

// Initialize Lucide icons and all components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Initialize all components
  initializeHeader()
  initializeChatbot()
  initializeApplicationModal()
  initializeAnimations()
  initializeTestimonials()
  initializeNewsFilters()
  initializeOpportunitiesTabs()
  initializeContactForm()
  initializeNewsletterForm()
})

// Header functionality
function initializeHeader() {
  const header = document.getElementById("header")
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = mobileMenuBtn?.querySelector('[data-lucide="menu"]')
  const closeIcon = mobileMenuBtn?.querySelector('[data-lucide="x"]')

  if (!header || !mobileMenuBtn || !mobileNav) return

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.backdropFilter = "blur(10px)"
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("active")

    if (isOpen) {
      mobileNav.classList.remove("active")
      menuIcon?.classList.remove("hidden")
      closeIcon?.classList.add("hidden")
    } else {
      mobileNav.classList.add("active")
      menuIcon?.classList.add("hidden")
      closeIcon?.classList.remove("hidden")
    }
  })

  // Close mobile menu when clicking on links
  const mobileNavLinks = mobileNav.querySelectorAll(".mobile-nav-link, .mobile-cta")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      menuIcon?.classList.remove("hidden")
      closeIcon?.classList.add("hidden")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target) && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active")
      menuIcon?.classList.remove("hidden")
      closeIcon?.classList.add("hidden")
    }
  })
}

// Chatbot functionality
function initializeChatbot() {
  const chatbot = document.getElementById("chatbot")
  const chatToggle = document.getElementById("chatToggle")
  const chatContainer = document.getElementById("chatContainer")
  const chatClose = document.getElementById("chatClose")
  const chatMessages = document.getElementById("chatMessages")
  const chatInputField = document.getElementById("chatInputField")
  const chatSend = document.getElementById("chatSend")
  const chatSuggestions = document.getElementById("chatSuggestions")
  const chatNotification = document.getElementById("chatNotification")

  if (!chatbot || !chatToggle || !chatContainer) return

  let isOpen = false
  let isTyping = false

  // Knowledge base for chatbot responses
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
      "Visit our programmes page or contact us directly to learn about current openings.",
    ],
    contact: [
      "You can reach us at hello@capaciti.org.za or call +27 (0) 21 003 7509",
      "Our office is located in Greenacres, Gqeberha, 6001.",
      "Follow us on LinkedIn, Twitter, and Instagram for updates.",
    ],
  }

  // Toggle chatbot
  function toggleChat() {
    isOpen = !isOpen
    if (isOpen) {
      chatContainer.classList.add("active")
      chatNotification?.classList.add("hidden")
      chatInputField?.focus()
    } else {
      chatContainer.classList.remove("active")
    }
  }

  // Generate bot response
  function generateResponse(userMessage) {
    const message = userMessage.toLowerCase()

    if (message.includes("what is") || message.includes("about") || message.includes("capac")) {
      return getRandomResponse(knowledgeBase.about)
    } else if (message.includes("program") || message.includes("course") || message.includes("training")) {
      return getRandomResponse(knowledgeBase.programs)
    } else if (message.includes("apply") || message.includes("application") || message.includes("join")) {
      return getRandomResponse(knowledgeBase.application)
    } else if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("phone") ||
      message.includes("email")
    ) {
      return getRandomResponse(knowledgeBase.contact)
    } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm here to help you learn about CAPACITI. What would you like to know?"
    } else if (message.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about CAPACITI?"
    } else {
      return "I'd be happy to help you with information about CAPACITI's programs, application process, or how to get in touch. What specific information are you looking for?"
    }
  }

  function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Add message to chat
  function addMessage(content, isUser = false) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`

    if (!isUser) {
      const avatar = document.createElement("img")
      avatar.src =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png"
      avatar.alt = "Bot"
      avatar.className = "message-avatar"
      messageDiv.appendChild(avatar)
    }

    const contentDiv = document.createElement("div")
    contentDiv.className = "message-content"
    contentDiv.textContent = content
    messageDiv.appendChild(contentDiv)

    chatMessages?.appendChild(messageDiv)
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" })
  }

  // Show typing indicator
  function showTypingIndicator() {
    const typingDiv = document.createElement("div")
    typingDiv.className = "message bot-message typing-indicator"
    typingDiv.innerHTML = `
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png" alt="Bot" class="message-avatar">
            <div class="message-content">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `
    chatMessages?.appendChild(typingDiv)
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" })
    return typingDiv
  }

  // Send message
  function sendMessage(message) {
    if (!message.trim() || isTyping) return

    // Add user message
    addMessage(message, true)

    // Clear input
    if (chatInputField) chatInputField.value = ""

    // Hide suggestions
    if (chatSuggestions) chatSuggestions.style.display = "none"

    // Show typing indicator
    isTyping = true
    const typingIndicator = showTypingIndicator()

    // Simulate typing delay
    setTimeout(
      () => {
        // Remove typing indicator
        typingIndicator?.remove()

        // Add bot response
        const response = generateResponse(message)
        addMessage(response)

        isTyping = false
      },
      1000 + Math.random() * 1000,
    )
  }

  // Event listeners
  chatToggle?.addEventListener("click", toggleChat)
  chatClose?.addEventListener("click", toggleChat)

  chatSend?.addEventListener("click", () => {
    const message = chatInputField?.value
    if (message) sendMessage(message)
  })

  chatInputField?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const message = chatInputField.value
      if (message) sendMessage(message)
    }
  })

  // Suggestion buttons
  const suggestionBtns = document.querySelectorAll(".suggestion-btn")
  suggestionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const suggestion = btn.getAttribute("data-suggestion")
      if (suggestion) sendMessage(suggestion)
    })
  })

  // Show notification after 5 seconds
  setTimeout(() => {
    if (!isOpen && chatNotification) {
      chatNotification.classList.remove("hidden")
    }
  }, 5000)
}

// Application Modal functionality
function initializeApplicationModal() {
  const modal = document.getElementById("applicationModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalClose = document.getElementById("modalClose")
  const applicationForm = document.getElementById("applicationForm")
  const modalSuccess = document.getElementById("modalSuccess")
  const formCancel = document.getElementById("formCancel")
  const formSubmit = document.getElementById("formSubmit")

  if (!modal) return

  // Open modal
  function openModal(programName = "") {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"

    if (programName && modalTitle) {
      modalTitle.textContent = `Apply for ${programName}`
    }

    // Pre-select program if specified
    const programSelect = applicationForm?.querySelector('select[name="program"]')
    if (programSelect && programName) {
      programSelect.value = programName
    }
  }

  // Close modal
  function closeModal() {
    modal.classList.remove("active")
    document.body.style.overflow = ""

    // Reset form after a delay
    setTimeout(() => {
      applicationForm?.reset()
      applicationForm?.classList.remove("hidden")
      modalSuccess?.classList.add("hidden")

      // Reset submit button
      const submitText = formSubmit?.querySelector(".submit-text")
      const submitLoading = formSubmit?.querySelector(".submit-loading")
      if (submitText && submitLoading) {
        submitText.classList.remove("hidden")
        submitLoading.classList.add("hidden")
      }
      if (formSubmit) formSubmit.disabled = false
    }, 300)
  }

  // Program application buttons
  const programApplyBtns = document.querySelectorAll(".program-apply")
  programApplyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const programName = btn.getAttribute("data-program")
      openModal(programName)
    })
  })

  // General apply button
  const generalApplyBtn = document.querySelector(".general-apply")
  generalApplyBtn?.addEventListener("click", () => openModal())

  // Close modal events
  modalClose?.addEventListener("click", closeModal)
  formCancel?.addEventListener("click", closeModal)

  // Close modal when clicking outside
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal()
  })

  // Form submission
  applicationForm?.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Show loading state
    const submitText = formSubmit?.querySelector(".submit-text")
    const submitLoading = formSubmit?.querySelector(".submit-loading")
    if (submitText && submitLoading && formSubmit) {
      submitText.classList.add("hidden")
      submitLoading.classList.remove("hidden")
      formSubmit.disabled = true
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success state
    applicationForm?.classList.add("hidden")
    modalSuccess?.classList.remove("hidden")

    // Auto-close after 3 seconds
    setTimeout(closeModal, 3000)
  })

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal()
    }
  })
}

// Animations and scroll effects
function initializeAnimations() {
  // Counter animation for stats
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target

        if (target.classList.contains("stat-number")) {
          animateCounter(target)
        }

        observer.unobserve(target)
      }
    })
  }, observerOptions)

  // Observe all stat numbers
  const statNumbers = document.querySelectorAll(".stat-number[data-target]")
  statNumbers.forEach((stat) => observer.observe(stat))

  // Floating icons interaction
  const floatingIcons = document.querySelectorAll(".floating-icon")
  floatingIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.animationPlayState = "paused"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.animationPlayState = "running"
    })
  })
}

// Counter animation
function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-target"))
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 16)
}

// Testimonials functionality
function initializeTestimonials() {
  const testimonials = [
    {
      text: "CAPACITI didn't just teach me to code – they taught me how to think like a developer. The support I received during and after the program was incredible. I went from having no tech background to landing a role at a leading fintech company.",
      author: "Sarah Mokwena",
      role: "Software Developer at PayFast",
    },
    {
      text: "The data science program at CAPACITI transformed my career completely. The hands-on approach and real-world projects prepared me for the challenges I face daily in my role. The career support team was instrumental in helping me land my dream job.",
      author: "Thabo Mthembu",
      role: "Data Scientist at Standard Bank",
    },
    {
      text: "What sets CAPACITI apart is their commitment to your success beyond graduation. The network of alumni and ongoing support has been invaluable. I'm now leading a team of developers and actively recruiting CAPACITI graduates.",
      author: "Nomsa Dlamini",
      role: "Tech Lead at Takealot",
    },
  ]

  let currentTestimonial = 0
  const testimonialContainer = document.querySelector(".testimonial-container")
  const prevBtn = document.getElementById("prevTestimonial")
  const nextBtn = document.getElementById("nextTestimonial")
  const dots = document.querySelectorAll(".testimonial-dot")

  if (!testimonialContainer) return

  function updateTestimonial(index) {
    const testimonial = testimonials[index]
    if (!testimonial) return

    testimonialContainer.innerHTML = `
            <div class="testimonial-icon">
                <i data-lucide="quote"></i>
            </div>
            <div class="testimonial-content">
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-author">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })

    // Reinitialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    updateTestimonial(currentTestimonial)
  }

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    updateTestimonial(currentTestimonial)
  }

  // Event listeners
  nextBtn?.addEventListener("click", nextTestimonial)
  prevBtn?.addEventListener("click", prevTestimonial)

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonial = index
      updateTestimonial(currentTestimonial)
    })
  })

  // Auto-rotate testimonials
  setInterval(nextTestimonial, 8000)
}

// News filters functionality
function initializeNewsFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn")
  const newsCards = document.querySelectorAll(".news-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Filter cards
      newsCards.forEach((card) => {
        const category = card.getAttribute("data-category")
        if (filter === "all" || category === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
}
document.addEventListener("DOMContentLoaded", () => {
  initializeNewsFilters();
});


// Opportunities tabs functionality
function initializeOpportunitiesTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab")

      // Update active button
      tabBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Show corresponding panel
      tabPanels.forEach((panel) => {
        if (panel.id === tabId) {
          panel.classList.add("active")
        } else {
          panel.classList.remove("active")
        }
      })
    })
  })
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (!contactForm) return

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const submitText = submitBtn?.querySelector(".submit-text")
    const submitLoading = submitBtn?.querySelector(".submit-loading")

    // Show loading state
    if (submitText && submitLoading && submitBtn) {
      submitText.classList.add("hidden")
      submitLoading.classList.remove("hidden")
      submitBtn.disabled = true
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success message
    alert("Thank you for your message! We'll get back to you within 24 hours.")

    // Reset form
    contactForm.reset()

    // Reset button state
    if (submitText && submitLoading && submitBtn) {
      submitText.classList.remove("hidden")
      submitLoading.classList.add("hidden")
      submitBtn.disabled = false
    }
  })
}

// Newsletter form functionality
function initializeNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form")
  const newsletterInput = document.querySelector(".newsletter-input")
  const newsletterBtn = document.querySelector(".newsletter-btn")

  if (!newsletterForm || !newsletterInput || !newsletterBtn) return

  newsletterBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    const email = newsletterInput.value.trim()
    if (!email) {
      alert("Please enter your email address.")
      return
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Show loading state
    const originalHTML = newsletterBtn.innerHTML
    newsletterBtn.innerHTML = '<div class="loading-spinner"></div>'
    newsletterBtn.disabled = true

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    alert("Thank you for subscribing to our newsletter!")

    // Reset form
    newsletterInput.value = ""

    // Reset button
    newsletterBtn.innerHTML = originalHTML
    newsletterBtn.disabled = false
  })

  // Enter key support
  newsletterInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      newsletterBtn.click()
    }
  })
}

// Utility functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]')
  if (!link) return

  const targetId = link.getAttribute("href").substring(1)
  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    e.preventDefault()
    const headerHeight = document.getElementById("header")?.offsetHeight || 0
    const targetPosition = targetElement.offsetTop - headerHeight - 20

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
})

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pause animations when page is not visible
    const floatingIcons = document.querySelectorAll(".floating-icon")
    floatingIcons.forEach((icon) => {
      icon.style.animationPlayState = "paused"
    })
  } else {
    // Resume animations when page becomes visible
    const floatingIcons = document.querySelectorAll(".floating-icon")
    floatingIcons.forEach((icon) => {
      icon.style.animationPlayState = "running"
    })
  }
})

// Error handling for missing elements
window.addEventListener("error", (e) => {
  console.warn("CAPACITI Website: Non-critical error occurred:", e.message)
})

// Performance optimization: Lazy load images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading if needed
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeLazyLoading)
} else {
  initializeLazyLoading()
}
