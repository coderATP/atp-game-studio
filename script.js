document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            const isOpen =
                menuBtn.getAttribute("aria-expanded") === "true";
            
            navLinks.classList.toggle("active", !isOpen);
            
            menuBtn.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );
            
            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Open navigation" : "Close navigation"
            );
        });
        
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            });
        });
        
        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                navLinks.classList.remove("active");
                
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            }
        });
    }
    
    // Current Year
    const year = document.querySelector("#current-year");
    
    if (year) {
        year.textContent = new Date().getFullYear();
    }
    
    // Active Navigation Link
    const currentPath = window.location.pathname;
    
    document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = link.getAttribute("href");
        
        if (!href) {
            return;
        }
        
        const isHomeLink =
            href === "/" &&
            (currentPath === "/" || currentPath === "/index.html");
        
        const isCurrentPage =
            href.startsWith("/") &&
            href !== "/" &&
            href.split("#")[0] === currentPath;
        
        if (isHomeLink || isCurrentPage) {
            link.classList.add("active");
        }
    });
    
    // Contact Form
    const form = document.querySelector("#contactForm");
    
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const name = form.elements.namedItem("name")?.value.trim();
            const email = form.elements.namedItem("email")?.value.trim();
            const subject =
                form.elements.namedItem("subject")?.value.trim();
            const message =
                form.elements.namedItem("message")?.value.trim();
            
            if (!name || !email || !message) {
                return;
            }
            
            const body =
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                message;
            
            const mailto =
                "mailto:admin@atpgamestudio.com.ng" +
                `?subject=${encodeURIComponent(
                subject || "Website enquiry"
            )}` +
                `&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailto;
        });
    }
    
    // FAQs
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const faqItem = question.closest(".faq-item");
            
            if (!faqItem) {
                return;
            }
            
            const isOpen = faqItem.classList.contains("open");
            
            faqItem.classList.toggle("open", !isOpen);
            
            question.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );
        });
    });
    
});