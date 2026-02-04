// Mobile Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = hamburger.contains(event.target) || navLinks.contains(event.target);
      if (!isClickInsideNav && navLinks.classList.contains("active")) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
});

// Project Detail Modal Functions
function openProjectDetail(projectId) {
  const modal = document.getElementById(projectId + "-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectDetail(projectId) {
  const modal = document.getElementById(projectId + "-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal on background click
document.querySelectorAll(".project-detail-modal").forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

// Close modal on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".project-detail-modal.active")
      .forEach((modal) => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      });
  }
});

// Download Toast Notification
function showDownloadToast() {
  const toast = document.getElementById("toast");
  toast.textContent = "Resume download initiated...";
  toast.classList.add("show");
  setTimeout(() => {
    toast.textContent = "Download complete!";
  }, 2000);
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Image Expansion Modal Functions
function expandImage(imageSrc) {
  const modal = document.getElementById("imageModal");
  const expandedImage = document.getElementById("expandedImage");
  expandedImage.src = imageSrc;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close image modal on background click
document.addEventListener("DOMContentLoaded", function () {
  const imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }
});

// Close image modal on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const imageModal = document.getElementById("imageModal");
    if (imageModal && imageModal.classList.contains("active")) {
      imageModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
});
