// Add interactivity and dynamic content loading
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('open');
    });

    // Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') || href.startsWith(window.location.pathname)) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu after selection
                navMenu.classList.remove('active');
                menuIcon.classList.remove('open');
            }
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections
    const sections = document.querySelectorAll('.hero, .features, .latest-promotions');
    sections.forEach(section => {
        section.classList.add('fade-in-init');
        fadeInObserver.observe(section);
    });

    // Promotion Card Hover Effect
    const promotionCards = document.querySelectorAll('.promotion-card');
    promotionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});