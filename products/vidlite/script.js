/* VidLite landing page — lightweight progressive enhancement */
(() => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Smoothly reveal content as it enters the viewport when supported.
    const cards = document.querySelectorAll(".step-card, .settings-window, .cta-panel");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        cards.forEach((card) => {
            card.classList.add("reveal-on-scroll");
            observer.observe(card);
        });
    }
})();
