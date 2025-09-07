document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll(".section");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Interactive skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Contact form submission
  document.querySelector(".btn-submit").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      // Simulate form submission
      this.textContent = "TRANSMITTING...";
      this.style.background =
        "linear-gradient(135deg, var(--primary-cyan), var(--primary-pink))";

      setTimeout(() => {
        this.textContent = "TRANSMISSION COMPLETE";
        this.style.background = "var(--primary-cyan)";

        // Clear form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Reset button after 3 seconds
        setTimeout(() => {
          this.textContent = "Transmit Message";
          this.style.background = "";
        }, 3000);
      }, 2000);
    }
  });

  // Typed.js Typing Effect
  (function () {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";
    script.onload = function () {
      new Typed("#typed-text", {
        strings: [
          "Frontend Development",
          "Backend Development",
          "Mern Full Stack Development",
          "Java Full Stack Development",
          "Data Science",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
      });
    };
    document.head.appendChild(script);
  })();

  // Resume download tracking
  const resumeBtn = document.querySelector(".resume-btn");
  resumeBtn.addEventListener("click", () => {
    console.log("Resume downloaded");
  });
});
