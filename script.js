// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorCircle = document.querySelector('.cursor-circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let scale = 1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    circleX += (mouseX - circleX) * 0.2;
    circleY += (mouseY - circleY) * 0.2;

    cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px) scale(${scale})`;

    requestAnimationFrame(updateCursor);
}

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        scale = 1.5;
        cursorCircle.style.borderColor = 'white';
        cursorCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    el.addEventListener('mouseleave', () => {
        scale = 1;
        cursorCircle.style.borderColor = 'white';
        cursorCircle.style.backgroundColor = 'transparent';
    });
});

updateCursor();

// Menu Toggle
function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('show');
    menuIcon.classList.toggle('active');
    menu.style.display = 'block';
}

// Section Management
let currentSection = 'home';
const contentSections = document.querySelectorAll('.content-section');

function showSection(sectionId) {
    if (currentSection === sectionId) return;

    const textSection = document.getElementById('textSection');

    // If going to home section
    if (sectionId === 'home') {
        textSection.classList.add('flipped');

        setTimeout(() => {
            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            setTimeout(() => {
                textSection.classList.remove('flipped');
                currentSection = 'home';
            }, 10);
        }, 400);
    }
    // If going to any other section
    else {
        // First flip to back side
        if (currentSection === 'home') {
            textSection.classList.add('flipped');
        }

        setTimeout(() => {
            // Hide all content sections first
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            document.getElementById(sectionId + '-section').style.display = 'block';
            currentSection = sectionId;

            if (currentSection !== 'home' && !textSection.classList.contains('flipped')) {
                textSection.classList.add('flipped');
            }
        }, currentSection === 'home' ? 400 : 0);
    }

    const menu = document.querySelector('.navbar ul');
    const menuIcon = document.querySelector('.menu-icon');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menuIcon.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    contentSections.forEach(section => {
        section.style.display = 'none';
    });
});
