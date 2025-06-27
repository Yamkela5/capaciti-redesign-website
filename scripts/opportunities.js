// Opportunities page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  initializeOpportunitiesTabs()
  initializeJobApplications()
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

// Opportunities tabs functionality
function initializeOpportunitiesTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanels = document.querySelectorAll(".tab-panel")

  if (!tabBtns.length || !tabPanels.length) return

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab")

      // Update active button
      tabBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Show corresponding panel with animation
      tabPanels.forEach((panel) => {
        if (panel.id === tabId) {
          panel.classList.add("active")
          panel.style.animation = "fadeInUp 0.3s ease"
        } else {
          panel.classList.remove("active")
        }
      })
    })
  })
}

// Job applications functionality
function initializeJobApplications() {
  const applyBtns = document.querySelectorAll(".btn[href*='breezy.hr']")
  const shareJobBtns = document.querySelectorAll(".btn:has([data-lucide='share'])")
  const cvSendBtn = document.querySelector(".btn[href^='mailto:careers@capaciti.org']")

  // Apply button tracking
  applyBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Add loading state
      const originalText = btn.innerHTML
      btn.innerHTML = `
        <div class="loading-spinner"></div>
        Opening Application...
      `
      btn.style.pointerEvents = "none"

      // Reset after delay
      setTimeout(() => {
        btn.innerHTML = originalText
        btn.style.pointerEvents = "auto"
      }, 2000)
    })
  })

  // Share job functionality
  shareJobBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      shareJob()
    })
  })

  // CV send button
  if (cvSendBtn) {
    cvSendBtn.addEventListener("click", (e) => {
      // Track CV send action
      console.log("CV send button clicked")
    })
  }
}

// Share job functionality
function shareJob() {
  const jobTitle = document.querySelector(".position-header h3")?.textContent || "Job Opportunity at CAPACITI"
  const jobUrl = window.location.href

  if (navigator.share) {
    // Use native sharing if available
    navigator
      .share({
        title: jobTitle,
        text: "Check out this job opportunity at CAPACITI!",
        url: jobUrl,
      })
      .catch((error) => {
        console.log("Error sharing:", error)
        fallbackShare(jobTitle, jobUrl)
      })
  } else {
    fallbackShare(jobTitle, jobUrl)
  }
}

// Fallback sharing options
function fallbackShare(title, url) {
  const shareModal = document.createElement("div")
  shareModal.className = "share-modal"
  shareModal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Share Job</h3>
        <button class="modal-close">
          <i data-lucide="x"></i>
        </button>
      </div>
      <div class="modal-body">
        <div class="share-options">
          <button class="share-option" data-platform="linkedin">
            <i data-lucide="linkedin"></i>
            LinkedIn
          </button>
          <button class="share-option" data-platform="twitter">
            <i data-lucide="twitter"></i>
            Twitter
          </button>
          <button class="share-option" data-platform="facebook">
            <i data-lucide="facebook"></i>
            Facebook
          </button>
          <button class="share-option" data-platform="email">
            <i data-lucide="mail"></i>
            Email
          </button>
          <button class="share-option" data-platform="copy">
            <i data-lucide="copy"></i>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  `

  document.body.appendChild(shareModal)

  // Initialize icons
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Show modal
  setTimeout(() => shareModal.classList.add("show"), 100)

  // Share options
  const shareOptions = shareModal.querySelectorAll(".share-option")
  shareOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const platform = option.getAttribute("data-platform")
      handleShare(platform, title, url)
      closeShareModal()
    })
  })

  // Close modal
  function closeShareModal() {
    shareModal.classList.remove("show")
    setTimeout(() => shareModal.remove(), 300)
  }

  const closeBtn = shareModal.querySelector(".modal-close")
  closeBtn?.addEventListener("click", closeShareModal)

  shareModal.addEventListener("click", (e) => {
    if (e.target === shareModal) closeShareModal()
  })
}

// Handle different sharing platforms
function handleShare(platform, title, url) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  const text = encodeURIComponent("Check out this job opportunity at CAPACITI!")

  switch (platform) {
    case "linkedin":
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, "_blank")
      break
    case "twitter":
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`, "_blank")
      break
    case "facebook":
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")
      break
    case "email":
      window.location.href = `mailto:?subject=${encodedTitle}&body=${text}%0A%0A${encodedUrl}`
      break
    case "copy":
      copyToClipboard(url)
      break
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showNotification("Link copied to clipboard!", "success")
      })
      .catch(() => {
        fallbackCopyToClipboard(text)
      })
  } else {
    fallbackCopyToClipboard(text)
  }
}

// Fallback copy to clipboard
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.position = "fixed"
  textArea.style.left = "-999999px"
  textArea.style.top = "-999999px"
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand("copy")
    showNotification("Link copied to clipboard!", "success")
  } catch (err) {
    showNotification("Failed to copy link", "error")
  }

  document.body.removeChild(textArea)
}

// Show notification
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

  // Initialize icons
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100)

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => notification.remove(), 300)
  }, 3000)

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
