const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

const currentYear =
  document.getElementById("currentYear");

if (menuToggle && mainNav) {
  
  menuToggle.addEventListener(
    "click",
    () => {
      
      const isOpen =
        mainNav.classList.toggle(
          "active"
        );
      
      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );
      
      menuToggle.setAttribute(
        "aria-label",
        isOpen ?
        "Close navigation" :
        "Open navigation"
      );
      
    }
  );
  
  
  mainNav
    .querySelectorAll("a")
    .forEach((link) => {
      
      link.addEventListener(
        "click",
        () => {
          
          mainNav.classList.remove(
            "active"
          );
          
          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );
          
          menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
          );
          
        }
      );
      
    });
  
}

if (currentYear) {
  
  currentYear.textContent =
    new Date().getFullYear();
  
}