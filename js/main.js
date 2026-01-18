// Main application entry point
// Mengimpor dan menjalankan semua modul

import { initNavbar } from './modules/navbar.js';
import { initHero } from './modules/hero.js';
import { initAbout } from './modules/about.js';
import { initServices } from './modules/services.js';
import { initPortfolio } from './modules/portfolio.js';
import { initContact } from './modules/contact.js';
import { initFooter } from './modules/footer.js';
import { initTeam } from './modules/team.js';

// Inisialisasi semua modul
document.addEventListener('DOMContentLoaded', () => {
    console.log('BARAK Website - Initializing modules...');
    
    // Load navbar
    initNavbar();
    
    // Load hero section
    initHero();
    
    // Load about section
    initAbout();
    
    // Load services section
    initServices();
    
    // Load portfolio section
    initPortfolio();
    
    // Load contact section
    initContact();
    
    // Load footer
    initFooter();
    
    // Inisialisasi animasi scroll
    initScrollAnimations();
    
    // Inisialisasi Back to Top Button
    initBackToTop();
    
    console.log('BARAK Website - All modules loaded successfully!');
});

// Fungsi untuk animasi saat scroll
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observasi semua section
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Fungsi untuk Back to Top Button
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) {
        console.warn('Back to Top button not found');
        return;
    }
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0');
            backToTopButton.classList.add('opacity-100');
        } else {
            backToTopButton.classList.add('opacity-0');
            backToTopButton.classList.remove('opacity-100');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}