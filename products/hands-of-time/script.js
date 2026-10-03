const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  
  question.addEventListener("click", () => {
    
    const faqItem =
      question.closest(".faq-item");
    
    const isOpen =
      faqItem.classList.contains("open");
    
    document
      .querySelectorAll(".faq-item.open")
      .forEach((item) => {
        
        if (item !== faqItem) {
          item.classList.remove("open");
          
          const button =
            item.querySelector(".faq-question");
          
          button.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      });
    
    faqItem.classList.toggle(
      "open",
      !isOpen
    );
    
    question.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );
  });
  
});

const currentYear =
  document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}

const video =
  document.querySelector(".gameplay-video");

if (video) {
  
  const videoFrame =
    document.querySelector(".video-frame");
  
  video.addEventListener(
    "play",
    () => {
      videoFrame.classList.add("playing");
    }
  );
  
  video.addEventListener(
    "pause",
    () => {
      videoFrame.classList.remove("playing");
    }
  );
  
}

const revealElements =
  document.querySelectorAll(
    ".step-card, .time-card, .special-card, .anomaly-card, .feature-grid article"
  );

if ("IntersectionObserver" in window) {
  
  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {
        
        entries.forEach((entry) => {
          
          if (!entry.isIntersecting) {
            return;
          }
          
          entry.target.classList.add(
            "visible"
          );
          
          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.08
      }
    );
  
  revealElements.forEach((element) => {
    
    element.classList.add(
      "reveal"
    );
    
    revealObserver.observe(
      element
    );
  });
  
}