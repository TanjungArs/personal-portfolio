const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;
    const height = section.offsetHeight;

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

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const toggles = document.querySelectorAll(".experience-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const description = toggle.parentElement.querySelector(
      ".experience-description",
    );

    description.classList.toggle("show");

    toggle.textContent = description.classList.contains("show")
      ? "Hide Details"
      : "View Details";
  });
});
