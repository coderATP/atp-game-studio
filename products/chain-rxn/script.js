const menuButton = document.getElementById("crxMenuButton");
const navigation = document.querySelector(".crx-nav");

const demoButton = document.getElementById("crxDemoButton");
const demoCards = document.getElementById("crxDemoCards");
const demoScore = document.getElementById("crxDemoScore");

const yearElement = document.getElementById("crxYear");


/* =========================================
   MOBILE NAVIGATION
========================================= */

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen =
            navigation.classList.toggle("crx-menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    navigation
        .querySelectorAll(".crx-nav-links a")
        .forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove(
                    "crx-menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
}


/* =========================================
   INTERACTIVE CHAIN DEMO
========================================= */

const chainCards = [
    {
        value: 8,
        suit: "♣",
        red: false
    },
    {
        value: 7,
        suit: "♥",
        red: true
    },
    {
        value: 6,
        suit: "♠",
        red: false
    },
    {
        value: 5,
        suit: "♦",
        red: true
    },
    {
        value: 6,
        suit: "♣",
        red: false
    },
    {
        value: 7,
        suit: "♥",
        red: true
    },
    {
        value: 8,
        suit: "♠",
        red: false
    }
];

let chainIndex = 3;
let chainScore = 6;


function createDemoCard(card) {
    const element = document.createElement("div");

    element.className = "crx-demo-card";

    if (card.red) {
        element.classList.add("crx-demo-red");
    }

    element.innerHTML = `
        <span>${card.value}</span>
        <small>${card.suit}</small>
    `;

    return element;
}


function updateDemoChain() {
    if (!demoCards || !demoScore) {
        return;
    }

    const visibleCards = [];

    const startIndex = Math.max(
        0,
        chainIndex - 2
    );

    for (
        let i = startIndex;
        i <= chainIndex;
        i++
    ) {
        if (chainCards[i]) {
            visibleCards.push(chainCards[i]);
        }
    }

    demoCards.innerHTML = "";

    visibleCards.forEach((card) => {
        demoCards.appendChild(
            createDemoCard(card)
        );
    });

    chainScore =
        ((visibleCards.length *
            (visibleCards.length + 1)) / 2);

    demoScore.textContent =
        `+${chainScore} POINTS`;
}


if (demoButton) {
    demoButton.addEventListener("click", () => {

        chainIndex++;

        if (chainIndex >= chainCards.length) {
            chainIndex = 2;
        }

        updateDemoChain();
    });
}


/* =========================================
   FOOTER YEAR
========================================= */

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".crx-rule-card, " +
    ".crx-feature, " +
    ".crx-mode-card, " +
    ".crx-score-row, " +
    ".crx-win-card"
);


if (
    "IntersectionObserver" in window &&
    revealElements.length
) {
    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.animate(
                        [
                            {
                                opacity: 0,
                                transform:
                                    "translateY(20px)"
                            },
                            {
                                opacity: 1,
                                transform:
                                    "translateY(0)"
                            }
                        ],
                        {
                            duration: 550,
                            easing:
                                "cubic-bezier(.2,.7,.2,1)",
                            fill: "forwards"
                        }
                    );

                    observer.unobserve(
                        entry.target
                    );
                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}


/* =========================================
   HERO TABLE INTERACTION
========================================= */

const heroTable =
    document.querySelector(".crx-table");

if (heroTable && window.matchMedia(
    "(pointer: fine)"
).matches) {

    heroTable.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroTable.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateY =
                (x - 0.5) * 5;

            const rotateX =
                (0.5 - y) * 5;

            heroTable.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        }
    );

    heroTable.addEventListener(
        "mouseleave",
        () => {
            heroTable.style.transform =
                "perspective(1000px) rotateX(5deg) rotateY(-3deg)";
        }
    );
}


/* =========================================
   INITIAL DEMO
========================================= */

updateDemoChain();