const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Mobile navigation
if (menuBtn && navLinks) {
menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

}

// Current year
const year = document.querySelector("#year");

if (year) {
year.textContent = new Date().getFullYear();
}

// Active navigation link
const current =
location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
const href = link.getAttribute("href");

if (href === current) {
    link.classList.add("active");
}

});

// Contact form
const form = document.querySelector("#contactForm");

if (form) {
form.addEventListener("submit", (event) => {
event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        return;
    }

    const body =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `${message}`;

    window.location.href =
        "mailto:admin@atpgamestudio.com.ng" +
        `?subject=${encodeURIComponent(
            subject || "Website enquiry"
        )}` +
        `&body=${encodeURIComponent(body)}`;
});

}