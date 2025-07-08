// Contact page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  const lucide = window.lucide
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

  const mobileNavLinks = mobileNav.querySelectorAll(".mobile-nav-link, .mobile-cta")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      menuIcon?.classList.remove("hidden")
      closeIcon?.classList.add("hidden")
    })
  })

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target) && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active")
      menuIcon?.classList.remove("hidden")
      closeIcon?.classList.add("hidden")
    }
  })
}

// Contact form functionality (with real Formspree submission)
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")
  const newsletterForm = document.querySelector(".newsletter-form")

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const submitText = submitBtn?.querySelector(".submit-text")
      const submitLoading = submitBtn?.querySelector(".submit-loading")

      if (submitText && submitLoading && submitBtn) {
        submitText.classList.add("hidden")
        submitLoading.classList.remove("hidden")
        submitBtn.disabled = true
      }

      const formData = new FormData(contactForm)

      try {
        const response = await fetch("https://formspree.io/f/mwpbjgkb", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        })

        if (response.ok) {
          showNotification("Thank you for your message! We'll get back to you within 24 hours.", "success")
          contactForm.reset()
        } else {
          showNotification("Something went wrong. Please try again later.", "error")
        }
      } catch (error) {
        showNotification("Failed to send. Please check your internet connection.", "error")
      }

      if (submitText && submitLoading && submitBtn) {
        submitText.classList.remove("hidden")
        submitLoading.classList.add("hidden")
        submitBtn.disabled = false
      }
    })
  }

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

      const originalHTML = newsletterBtn.innerHTML
      newsletterBtn.innerHTML = '<div class="loading-spinner"></div>'
      newsletterBtn.disabled = true

      await new Promise((resolve) => setTimeout(resolve, 1500))

      showNotification("Thank you for subscribing to our newsletter!", "success")

      if (newsletterInput) newsletterInput.value = ""

      newsletterBtn.innerHTML = originalHTML
      newsletterBtn.disabled = false
    })

    newsletterInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        newsletterBtn?.click()
      }
    })
  }
}

// Map placeholder setup
function initializeMap() {
  const mapContainer = document.querySelector(".contact-map")

  if (mapContainer) {
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

    const lucide = window.lucide
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  }
}

// Open Google Maps with predefined address
function openGoogleMaps() {
  const address = "Greenacres, Gqeberha, 6001, South Africa"
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  window.open(url, "_blank")
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Show notification message
function showNotification(message, type = "info") {
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

  document.body.appendChild(notification)

  const lucide = window.lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  setTimeout(() => notification.classList.add("show"), 100)

  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  }, 5000)

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
