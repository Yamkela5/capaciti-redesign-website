// Contact page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  initializeContactForm()
  initializeMap()
  initializeHeader()
})

// Header functionality (shared)
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

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")
  const newsletterForm = document.querySelector(".newsletter-form")

  // Main contact form
  if (contactForm) {
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

      // Get form data
      const formData = new FormData(contactForm)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success message
      showNotification("Thank you for your message! We'll get back to you within 24 hours.", "success")

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

  // Newsletter form
  if (newsletterForm) {
    const newsletterInput = newsletterForm.querySelector(".newsletter-input")
    const newsletterBtn = newsletterForm.querySelector(".newsletter-btn")

    newsletterBtn?.addEventListener("click", async (e) => {
      e.preventDefault()

      const email = newsletterInput?.value.trim()
      if (!email) {
        showNotification("Please enter your email address.", "error")
        return
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

      // Show loading state
      const originalHTML = newsletterBtn.innerHTML
      newsletterBtn.innerHTML = '<div class="loading-spinner"></div>'
      newsletterBtn.disabled = true

      // Simulate subscription
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      showNotification("Thank you for subscribing to our newsletter!", "success")

      // Reset form
      if (newsletterInput) newsletterInput.value = ""

      // Reset button
      newsletterBtn.innerHTML = originalHTML
      newsletterBtn.disabled = false
    })

    // Enter key support
    newsletterInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        newsletterBtn?.click()
      }
    })
  }
}

// Map functionality (placeholder)
function initializeMap() {
  const mapContainer = document.querySelector(".contact-map")

  if (mapContainer) {
    // Add interactive map placeholder
    mapContainer.innerHTML = `
      <div class="map-placeholder">
        <div class="map-icon">
          <i data-lucide="map-pin"></i>
        </div>
        <h3>Visit Our Office</h3>
        <p>Greenacres, Gqeberha, 6001<br>South Africa</p>
        <button class="btn btn-outline" onclick="openGoogleMaps()">
          <i data-lucide="external-link"></i>
          Open in Google Maps
        </button>
      </div>
    `

    // Reinitialize icons
    const lucide = window.lucide // Declare the lucide variable
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  }
}

// Open Google Maps
function openGoogleMaps() {
  const address = "Greenacres, Gqeberha, 6001, South Africa"
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  window.open(url, "_blank")
}

// Utility functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i data-lucide="${type === "success" ? "check-circle" : type === "error" ? "alert-circle" : "info"}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <i data-lucide="x"></i>
    </button>
  `

  // Add to page
  document.body.appendChild(notification)

  // Initialize icons
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  }, 5000)

  // Close button
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn?.addEventListener("click", () => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  })
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
