const newsArticles = [
  {
    id: "1",
    title: "CAPACITI Graduates 500+ Software Engineers in Q1 2025",
    excerpt: "Our intensive 6-month full-stack development program continues to produce industry-ready developers, with 85% job placement rate within 3 months of graduation.",
    expandedContent: {
      paragraphs: [
        "The first quarter of 2025 has been remarkable for CAPACITI, with over 500 talented individuals completing our comprehensive software engineering program. These graduates represent diverse backgrounds and bring fresh perspectives to the African tech ecosystem.",
        "Our curriculum focuses on practical, hands-on learning with real-world projects that prepare students for immediate contribution to tech companies. The program covers modern web technologies, mobile development, and cloud computing fundamentals."
      ],
      highlights: {
        title: "Program Highlights:",
        items: [
          "500+ graduates in Q1 2025",
          "85% job placement rate",
          "6-month intensive curriculum",
          "Real-world project portfolio",
          "Industry mentorship program",
          "Ongoing career support"
        ]
      },
      stats: [
        { label: "Graduates", value: "500+" },
        { label: "Job Placement", value: "85%" },
        { label: "Program Duration", value: "6 months" },
        { label: "Partner Companies", value: "150+" }
      ]
    },
    category: "tech-talent",
    date: "May 15, 2025",
    time: "9:30 am",
    readTime: "4 min read",
    backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true
  },
  {
    id: "2",
    title: "New Partnership with Google Cloud Accelerates African Startups",
    excerpt: "CAPACITI announces strategic partnership with Google Cloud to provide advanced cloud infrastructure training and startup support across Africa.",
    expandedContent: {
      paragraphs: [
        "We are excited to announce our partnership with Google Cloud, which will significantly enhance our cloud computing curriculum and provide unprecedented opportunities for African startups to scale their operations.",
        "This collaboration includes access to Google Cloud credits, specialized training programs, and direct mentorship from Google Cloud experts. Startups in our ecosystem will receive up to $100,000 in cloud credits and technical support."
      ],
      highlights: {
        title: "Partnership Benefits:",
        items: [
          "Up to $100,000 in Google Cloud credits",
          "Direct access to Google Cloud experts",
          "Advanced cloud infrastructure training",
          "Startup acceleration program",
          "Technical mentorship and support"
        ]
      }
    },
    category: "partnership",
    date: "May 8, 2025",
    time: "2:15 pm",
    readTime: "3 min read",
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true
  },
  {
    id: "3",
    title: "From Unemployed to Lead Developer: Sarah's Transformation Story",
    excerpt: "Meet Sarah Okafor, who transformed her life through CAPACITI's program and now leads a development team at a leading fintech company.",
    expandedContent: {
      paragraphs: [
        "Sarah Okafor's journey from unemployment to becoming a lead developer is a testament to the power of determination and quality education. After being unemployed for over a year, Sarah enrolled in CAPACITI's full-stack development program.",
        "Within 18 months, Sarah had not only secured a junior developer position but quickly advanced to lead a team of 8 developers at one of Africa's fastest-growing fintech companies. Her story inspires hundreds of other aspiring developers in our community."
      ],
      highlights: {
        title: "Sarah's Journey:",
        items: [
          "12 months unemployed before joining",
          "Completed full-stack program in 6 months",
          "Hired as junior developer within 2 months",
          "Promoted to lead developer in 12 months",
          "Now mentors other CAPACITI students"
        ]
      }
    },
    category: "success-stories",
    date: "May 1, 2025",
    time: "11:45 am",
    readTime: "5 min read",
    backgroundImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "4",
    title: "CAPACITI Expands to 5 New African Countries",
    excerpt: "Our mission to democratize tech education across Africa continues with new centers opening in Ghana, Rwanda, Uganda, Zambia, and Senegal.",
    expandedContent: {
      paragraphs: [
        "The expansion into five new African countries marks a significant milestone in our journey to make quality tech education accessible across the continent. Each new center will be equipped with state-of-the-art facilities and staffed by experienced local and international instructors.",
        "This expansion will enable us to train an additional 2,000 students annually and create stronger regional tech ecosystems. Local partnerships with governments and private sector organizations ensure sustainable growth and job creation."
      ],
      stats: [
        { label: "New Countries", value: "5" },
        { label: "Additional Capacity", value: "2,000+ students" },
        { label: "New Jobs Created", value: "200+" },
        { label: "Local Partners", value: "25" }
      ]
    },
    category: "company-growth",
    date: "April 28, 2025",
    time: "4:00 pm",
    readTime: "4 min read",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "5",
    title: "AI and Machine Learning Curriculum Launch",
    excerpt: "CAPACITI introduces comprehensive AI/ML training program designed to prepare African developers for the future of technology.",
    expandedContent: {
      paragraphs: [
        "The launch of our AI and Machine Learning curriculum represents our commitment to preparing African talent for emerging technologies. The program covers everything from fundamental concepts to advanced deep learning techniques.",
        "Students will work on real-world projects including natural language processing, computer vision, and predictive analytics. Industry partnerships ensure graduates have direct access to AI/ML roles across various sectors."
      ],
      highlights: {
        title: "Curriculum Features:",
        items: [
          "Comprehensive AI/ML fundamentals",
          "Hands-on deep learning projects",
          "Natural language processing",
          "Computer vision applications",
          "Industry-sponsored capstone projects",
          "Direct job placement support"
        ]
      }
    },
    category: "education",
    date: "April 20, 2025",
    time: "1:30 pm",
    readTime: "6 min read",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "6",
    title: "Scholarships Program Supports 1000+ Students",
    excerpt: "CAPACITI's scholarship initiative removes financial barriers, enabling talented individuals from underserved communities to access world-class tech education.",
    expandedContent: {
      paragraphs: [
        "Our scholarship program has awarded full and partial scholarships to over 1,000 students from underserved communities across Africa. This initiative ensures that financial constraints don't prevent talented individuals from accessing quality tech education.",
        "The program prioritizes women, rural communities, and economically disadvantaged youth. Scholarship recipients have consistently shown exceptional performance, with 92% successfully completing their programs and 88% securing employment within 6 months."
      ],
      stats: [
        { label: "Scholarships Awarded", value: "1,000+" },
        { label: "Completion Rate", value: "92%" },
        { label: "Employment Rate", value: "88%" },
        { label: "Women Recipients", value: "45%" }
      ]
    },
    category: "education",
    date: "April 10, 2025",
    time: "3:20 pm",
    readTime: "5 min read",
    backgroundImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "7",
    title: "Digital Skills Training Program Launches in Rural Communities",
    excerpt: "CAPACITI expands its reach to underserved communities across Africa, bringing essential digital skills training to rural areas through mobile learning units.",
    expandedContent: {
      paragraphs: [
        "Our new mobile digital literacy program has reached over 5,000 individuals in remote areas across Kenya, Nigeria, and Ghana. These communities previously had limited access to technology education.",
        "The program includes basic computer skills, internet literacy, digital entrepreneurship, and online safety training. Participants receive certificates and ongoing support to start their own digital ventures."
      ],
      highlights: {
        title: "Program Impact:",
        items: [
          "5,000+ rural residents trained",
          "15 mobile learning units deployed",
          "85% of participants start digital businesses",
          "3 countries served in pilot phase",
          "Free training and certification"
        ]
      }
    },
    category: "education",
    date: "March 28, 2025",
    time: "2:45 pm",
    readTime: "3 min read",
    backgroundImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "8",
    title: "Alumni Network Reaches 20,000 Tech Professionals",
    excerpt: "CAPACITI's growing alumni network creates unprecedented opportunities for mentorship, collaboration, and career advancement across the African tech ecosystem.",
    expandedContent: {
      paragraphs: [
        "The CAPACITI Alumni Network has grown to over 20,000 tech professionals working across 25 countries. This network provides ongoing support, mentorship opportunities, and collaboration platforms for our graduates.",
        "Alumni are now working at top companies including Google, Microsoft, Flutterwave, and many leading African startups. The network facilitates knowledge sharing and creates new opportunities for career advancement."
      ],
      stats: [
        { label: "Alumni Network Size", value: "20,000+" },
        { label: "Countries Represented", value: "25" },
        { label: "Mentor Connections", value: "5,000+" },
        { label: "Job Referrals", value: "2,500+" }
      ]
    },
    category: "success-stories",
    date: "March 15, 2025",
    time: "1:30 pm",
    readTime: "4 min read",
    backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "9",
    title: "New Partnership with African Development Bank",
    excerpt: "CAPACITI announces strategic partnership with AfDB to scale digital skills training across 20 African countries with $50M investment commitment.",
    expandedContent: {
      paragraphs: [
        "The African Development Bank has committed $50 million over the next 5 years to support CAPACITI's expansion across Africa. This partnership will enable us to train 100,000 additional professionals by 2030.",
        "The funding will support new training centers, scholarship programs for underrepresented communities, and the development of specialized curricula for emerging technologies like blockchain and AI."
      ],
      highlights: {
        title: "Partnership Details:",
        items: [
          "$50M investment over 5 years",
          "20 countries expansion target",
          "100,000 additional trainees by 2030",
          "New scholarship programs",
          "Focus on emerging technologies"
        ]
      }
    },
    category: "partnership",
    date: "March 8, 2025",
    time: "10:15 am",
    readTime: "5 min read",
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "10",
    title: "Blockchain Development Bootcamp Launches",
    excerpt: "New 12-week intensive blockchain development program prepares developers for the growing Web3 ecosystem across Africa.",
    expandedContent: {
      paragraphs: [
        "Our new blockchain development bootcamp covers smart contract development, DeFi protocols, NFT creation, and Web3 application development. The program is designed for experienced developers looking to transition into blockchain technology.",
        "Graduates will be equipped to work on cutting-edge blockchain projects and will have direct access to job opportunities with leading Web3 companies and African blockchain startups."
      ],
      highlights: {
        title: "Curriculum Highlights:",
        items: [
          "Solidity and smart contract development",
          "DeFi protocol architecture",
          "NFT marketplace development",
          "Web3 frontend integration",
          "Blockchain security best practices",
          "Real-world project portfolio"
        ]
      }
    },
    category: "tech-talent",
    date: "February 28, 2025",
    time: "3:45 pm",
    readTime: "6 min read",
    backgroundImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "11",
    title: "CAPACITI Opens New Lagos Innovation Hub",
    excerpt: "State-of-the-art 15,000 sq ft facility in Victoria Island will serve as the flagship training center for West Africa operations.",
    expandedContent: {
      paragraphs: [
        "The new Lagos Innovation Hub features modern classrooms, collaborative workspaces, and advanced technology labs. The facility can accommodate 500 students simultaneously and includes dedicated spaces for startups and research projects.",
        "This expansion represents our commitment to providing world-class learning environments that foster innovation and collaboration among Africa's next generation of tech leaders."
      ],
      stats: [
        { label: "Facility Size", value: "15,000 sq ft" },
        { label: "Student Capacity", value: "500" },
        { label: "Training Rooms", value: "12" },
        { label: "Startup Spaces", value: "25" }
      ]
    },
    category: "company-growth",
    date: "February 15, 2025",
    time: "11:00 am",
    readTime: "4 min read",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "12",
    title: "From Accountant to Data Scientist: James's Transformation",
    excerpt: "Meet James Owusu, who switched from traditional accounting to become a leading data scientist at a major African bank after completing CAPACITI's program.",
    expandedContent: {
      paragraphs: [
        "James worked as an accountant for 8 years before enrolling in CAPACITI's Data Science program. Within 18 months, he had transitioned to a senior data scientist role at one of Africa's largest financial institutions.",
        "\"The program didn't just teach me technical skills - it taught me how to think analytically and solve complex business problems with data,\" says James. He now leads a team of 10 data professionals and has implemented ML models that save his company millions annually."
      ],
      highlights: {
        title: "Career Journey:",
        items: [
          "8 years as traditional accountant",
          "18-month CAPACITI Data Science program",
          "Senior Data Scientist at major bank",
          "Leads team of 10 professionals",
          "Implemented cost-saving ML models"
        ]
      }
    },
    category: "success-stories",
    date: "February 5, 2025",
    time: "4:20 pm",
    readTime: "5 min read",
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];
 
// Categories data
const categories = [
  { id: "all", name: "All Articles" },
  { id: "tech-talent", name: "Tech Talent" },
  { id: "company-growth", name: "Company Growth" },
  { id: "partnership", name: "Partnership" },
  { id: "success-stories", name: "Success Stories" },
  { id: "education", name: "Education" }
];
 
 
// Global variables
let activeCategory = "all";
let displayedCount = 6;
let filteredArticles = [];
 
// Category colors for styling
const categoryColors = {
  "tech-talent": "#4A1D7E",
  "company-growth": "#6B46C1",
  "partnership": "#E91E63",
  "success-stories": "#F59E0B",
  "education": "#EF4444"
};
 
// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
});
 
function initializePage() {
  setupCategoryFilters();
  filterArticles();
  renderArticles();
  updateLoadMoreButton();
}
 
function setupCategoryFilters() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      setActiveCategory(category);
    });
  });
}
 
function setActiveCategory(category) {
  activeCategory = category;
  displayedCount = 6; // Reset count when changing category
 
  // Update button states
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-category="${category}"]`).classList.add('active');
 
  filterArticles();
  renderArticles();
  updateLoadMoreButton();
}
 
function filterArticles() {
  if (activeCategory === "all") {
    filteredArticles = newsArticles;
  } else {
    filteredArticles = newsArticles.filter(article => article.category === activeCategory);
  }
}
 
function renderArticles() {
  renderFeaturedArticles();
  renderRecentArticles();
}
 
function renderFeaturedArticles() {
  // Featured cards are now static HTML, no need to render dynamically
  const featuredSection = document.getElementById('featuredSection');
  featuredSection.style.display = 'block';
}
 
function renderRecentArticles() {
  const recentArticles = filteredArticles.filter(article => !article.featured);
  const displayedArticles = recentArticles.slice(0, displayedCount);
  const articlesGrid = document.getElementById('articlesGrid');
 
  articlesGrid.innerHTML = '';
 
  displayedArticles.forEach((article, index) => {
    const articleCard = createArticleCard(article, false);
    articleCard.classList.add('fade-in');
    articleCard.style.animationDelay = `${index * 0.1}s`;
    articlesGrid.appendChild(articleCard);
  });
}
 
function createArticleCard(article, isFeatured = false) {
  const card = document.createElement('div');
  card.className = `news-card ${isFeatured ? 'featured' : ''}`;
  card.setAttribute('data-id', article.id);
 
  const categoryColor = categoryColors[article.category] || '#6B7280';
 
  card.innerHTML = `
    <div class="card-image" style="background-image: url('${article.backgroundImage}')">
      <div class="card-overlay"></div>
      <div class="card-category" style="color: ${categoryColor}">
        ${getCategoryName(article.category)}
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">${article.title}</h3>
      <p class="card-excerpt">${article.excerpt}</p>
      <div class="card-meta">
        <span>${article.date} • ${article.time}</span>
        <span>${article.readTime}</span>
      </div>
      <div class="card-actions">
        <button class="read-more-btn" onclick="toggleExpandedContent('${article.id}')">
          <span class="btn-text">Read More</span>
        </button>
      </div>
    </div>
    <div class="expanded-content" id="expanded-${article.id}">
      ${generateExpandedContent(article)}
    </div>
  `;
 
  return card;
}
 
function getCategoryName(categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : categoryId;
}
 
function generateExpandedContent(article) {
  let content = '';
 
  // Add paragraphs
  if (article.expandedContent.paragraphs) {
    article.expandedContent.paragraphs.forEach(paragraph => {
      content += `<p>${paragraph}</p>`;
    });
  }
 
  // Add highlights
  if (article.expandedContent.highlights) {
    content += `
      <div class="content-highlights">
        <h4 class="highlights-title">${article.expandedContent.highlights.title}</h4>
        <ul class="highlights-list">
          ${article.expandedContent.highlights.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
 
  // Add stats
  if (article.expandedContent.stats) {
    content += `
      <div class="content-stats">
        ${article.expandedContent.stats.map(stat => `
          <div class="stat-item">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
 
  return content;
}
 
function toggleExpandedContent(articleId) {
  const expandedContent = document.getElementById(`expanded-${articleId}`);
  const button = document.querySelector(`[data-id="${articleId}"] .read-more-btn .btn-text`);
 
  if (expandedContent.classList.contains('show')) {
    expandedContent.classList.remove('show');
    button.textContent = 'Read More';
  } else {
    // Close other expanded articles
    document.querySelectorAll('.expanded-content.show').forEach(content => {
      content.classList.remove('show');
    });
    document.querySelectorAll('.read-more-btn .btn-text').forEach(btn => {
      btn.textContent = 'Read More';
    });
   
    // Open clicked article
    expandedContent.classList.add('show');
    button.textContent = 'Read Less';
   
    // Smooth scroll to the card
    setTimeout(() => {
      document.querySelector(`[data-id="${articleId}"]`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  }
}
 
function loadMoreArticles() {
  displayedCount += 6;
  renderRecentArticles();
  updateLoadMoreButton();
}
 
function updateLoadMoreButton() {
  const recentArticles = filteredArticles.filter(article => !article.featured);
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
 
  if (displayedCount >= recentArticles.length) {
    loadMoreContainer.style.display = 'none';
  } else {
    loadMoreContainer.style.display = 'block';
    const remaining = recentArticles.length - displayedCount;
    loadMoreBtn.innerHTML = `Load More Articles (${remaining} remaining)`;
  }
}
 
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const isVisible = mobileMenu.style.display === 'block';
  mobileMenu.style.display = isVisible ? 'none' : 'block';
}
 
// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 
  if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    mobileMenu.style.display = 'none';
  }
});
 
// Handle window resize
window.addEventListener('resize', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (window.innerWidth > 768) {
    mobileMenu.style.display = 'none';
  }
});
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

