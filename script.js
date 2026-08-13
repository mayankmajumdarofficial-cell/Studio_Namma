// Clock functionality
function updateClock() {
    const clock = document.getElementById('clock');
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}
setInterval(updateClock, 1000);
updateClock();

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.textContent = document.body.classList.contains('dark-mode') ? 'LIGHT MODE' : 'DARK MODE';
    });
}

// Smooth Lerp Cursor Trailing
const topSection = document.querySelector("#section-1");
const animatedBox = document.querySelector(".cursor-box");
const heroVid = document.querySelector(".hero-vid");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

if (topSection && animatedBox) {
    // 1. Track mouse coordinates relative to section-1
    topSection.addEventListener("mousemove", (e) => {
        const rect = topSection.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        // Reveal cursor box when moving inside section
        animatedBox.style.opacity = "1";
    });

    // 2. Hide cursor box when mouse leaves section
    topSection.addEventListener("mouseleave", () => {
        animatedBox.style.opacity = "0";
    });

    // 3. Smooth animation loop (Lerp)
    function animateCursor() {
        // 0.1 controls the lag speed:
        // Lower (0.05) = smoother / slower trail
        // Higher (0.2) = faster response
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        animatedBox.style.left = `${currentX}px`;
        animatedBox.style.top = `${currentY}px`;

        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// Ensure video keeps playing smoothly
if (heroVid) {
    heroVid.play().catch(err => {
        console.log("Autoplay waiting for interaction:", err);
    });
}

const menu = document.querySelector(".menu");
const menuBox = document.querySelector(".menu-box");

let isOpen = false; // State tracker

if (menu) {
    // Hover in
    menu.addEventListener("mouseover", () => {
        if (!isOpen) {
            menu.textContent = "OPEN";
        }
    });

    // Toggle click
    menu.addEventListener("click", () => {
        isOpen = !isOpen; // Toggle state

        if (isOpen) {
            menu.textContent = "CLOSE";
            if (menuBox) menuBox.style.top = "0%";
        } else {
            menu.textContent = "OPEN";
            if (menuBox) menuBox.style.top = "-100%"; // Slide back up
        }
    });

    // Hover out
    menu.addEventListener("mouseleave", () => {
        if (!isOpen) {
            menu.textContent = "MENU";
        }
    });
}




