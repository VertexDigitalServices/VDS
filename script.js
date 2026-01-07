// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    }
}, { threshold: 0.2 });

for (const section of sections) {
    observer.observe(section);
}
