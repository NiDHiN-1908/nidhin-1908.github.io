/* =========================================
   Section Fade-In on Scroll
   ========================================= */

const sections = document.querySelectorAll(".section");

const observerOptions = {
  threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // animate only once
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

/* =========================================
   Smooth Anchor Scroll Offset (Optional Safety)
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

/* =========================================
   External Links Safety (Best Practice)
   ========================================= */

document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.setAttribute("rel", "noopener noreferrer");
});
