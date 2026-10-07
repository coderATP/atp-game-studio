const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  
  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    
    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

year.textContent = new Date().getFullYear();