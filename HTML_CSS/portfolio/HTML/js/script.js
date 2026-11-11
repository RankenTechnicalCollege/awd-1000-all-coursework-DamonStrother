"use strict";

// Reveal sections as they enter the screen
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealItems.forEach(function (item) {
        revealObserver.observe(item);
    });
} else {
    revealItems.forEach(function (item) {
        item.classList.add("is-visible");
    });
}

// Update the thin progress line while scrolling
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
    if (scrollProgress) {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollAmount = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

        scrollProgress.style.transform = "scaleX(" + scrollAmount + ")";
    }
}

window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

updateScrollProgress();

// Typing effect in the home section
const typingText = document.getElementById("typing-text");
const typingWords = ["web experiences.", "responsive websites.", "software solutions."];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeText() {
    if (!typingText) {
        return;
    }

    const currentWord = typingWords[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingText.textContent = currentWord.substring(0, letterIndex);

    let typingSpeed = deleting ? 45 : 90;

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        typingSpeed = 1300;
    } else if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        typingSpeed = 400;
    }

    window.setTimeout(typeText, typingSpeed);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typeText();
}

// Close the mobile navigation after a section link is selected
const navLinks = document.querySelectorAll("#mainNav .nav-link");
const navMenu = document.getElementById("mainNav");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.innerWidth < 992 && navMenu && navMenu.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
            bsCollapse.hide();
        }
    });
});
