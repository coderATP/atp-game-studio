const faqQuestions = document.querySelectorAll(
  ".faq-question"
);

faqQuestions.forEach((question) => {
  
  question.addEventListener("click", () => {
    
    const currentItem =
      question.closest(".faq-item");
    
    document
      .querySelectorAll(".faq-item.open")
      .forEach((item) => {
        
        if (item !== currentItem) {
          item.classList.remove("open");
        }
        
      });
    
    currentItem.classList.toggle("open");
    
  });
  
});