// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".section, .project, .terminal")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
