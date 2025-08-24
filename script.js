// Page Navigation
function showPage(pageId) {
  // Hide all pages
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "none";

  // Show selected page
  if (pageId === "page-1") {
    document.getElementById("page-1").style.display = "block";
    document.body.style.background =
      "linear-gradient(135deg, #e8f5e8 0%, #f0f9f0 100%)";
    window.scrollTo(0, 0); // Scroll to top
  } else if (pageId === "page-2") {
    document.getElementById("page-2").style.display = "block";
    document.body.style.background =
      "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
    window.scrollTo(0, 0); // Scroll to top
  }

  // Update active nav tab
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Close mobile nav
  const mobileNav = document.querySelector(".nav-mobile");
  const hamburger = document.querySelector(".hamburger");
  mobileNav.classList.remove("active");
  hamburger.classList.remove("active");
}

// Alternative: Show both pages as scrollable sections
function showBothPages() {
  document.getElementById("page-1").style.display = "block";
  document.getElementById("page-2").style.display = "block";
}

// Scroll to specific page
function scrollToPage(pageId) {
  document.getElementById(pageId).scrollIntoView({
    behavior: "smooth",
  });
}

// Mobile Navigation Toggle
function toggleMobileNav() {
  const mobileNav = document.querySelector(".nav-mobile");
  const hamburger = document.querySelector(".hamburger");

  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Page 1 Functions
function findPlants() {
  alert(
    "🌿 Finding perfect plants for your location! This feature would integrate with a plant recommendation API based on your climate zone."
  );
}

// Add interactive hover effects for page 1
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Animate stats on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateStats();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector(".stats");
if (statsSection) {
  observer.observe(statsSection);
}

function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat, index) => {
    const finalValue = stat.textContent;
    const numericValue = parseInt(finalValue.replace(/\D/g, ""));
    const suffix = finalValue.replace(/\d/g, "");

    let current = 0;
    const increment = numericValue / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }

      stat.textContent = Math.floor(current) + suffix;
    }, 40 + index * 10);
  });
}

// Page 2 Functions - Action cards interactivity
document.querySelectorAll(".action-card").forEach((card) => {
  card.addEventListener("click", function () {
    const title = this.querySelector(".action-title").textContent;
    alert(`Opening ${title}...`);
  });

  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-4px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Initialize - Show both pages for scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Show both pages so you can scroll between them
  showBothPages();

  // Add click listeners for navigation
  document.querySelectorAll('[onclick*="showPage"]').forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      const pageId =
        this.getAttribute("onclick").match(/showPage\('(.+?)'\)/)[1];
      scrollToPage(pageId); // Use scroll instead of hide/show
    });
  });
});

// Add a demo button to easily test page 2
function showDashboard() {
  showPage("page-2");
}





 // Add interactive functionality
        document.querySelectorAll('.plant-item-3rd').forEach(item => {
            item.addEventListener('click', function() {
                const plantName = this.querySelector('.plant-name-3rd').textContent;
                console.log(`Clicked on ${plantName}`);
                // Add your click handling logic here
            });
        });

        document.querySelectorAll('.update-btn-3rd').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.textContent = 'Updated!';
                this.style.color = '#16a34a';
                setTimeout(() => {
                    this.textContent = 'Update';
                    this.style.color = '#10b981';
                }, 2000);
            });
        });

        // Simulate progress animation on page load
        setTimeout(() => {
            document.querySelectorAll('.progress-fill-3rd').forEach(fill => {
                fill.style.transition = 'width 2s ease-in-out';
            });
        }, 500);