const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

/* =========================
   ACTIVE NAV LINK
========================= */

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* =========================
   MOBILE NAVBAR
========================= */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  navToggle.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.textContent = "☰";
  });
});

const toggles = document.querySelectorAll(".experience-toggle");

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.nextElementSibling;

    description.classList.toggle("show");

    button.textContent = description.classList.contains("show")
      ? "Hide Details"
      : "View Details";
  });
});
