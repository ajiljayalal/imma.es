/**
 * Madrid Malayali Association - Main Script
 * Handles: Multilingual Support & Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LANGUAGE SWITCHER LOGIC ---
    // Finds the link in your navbar that contains "ES" or "EN"
    const langBtn = Array.from(document.querySelectorAll('.nav-links a'))
                         .find(el => el.textContent.includes('ES') || el.textContent.includes('EN'));

    // Set initial state to English (Default)
    let isSpanish = false; 

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            // Prevent the browser from actually navigating to es/index.html
            e.preventDefault(); 
            
            // Toggle the state
            isSpanish = !isSpanish;

            // Update all elements with [data-en] attributes
            document.querySelectorAll('[data-en]').forEach(el => {
                const enText = el.getAttribute('data-en');
                const esText = el.getAttribute('data-es');
                
                // Swap the text content based on current state
                el.textContent = isSpanish ? esText : enText;
            });

            // Update the button label in the navbar
            langBtn.innerHTML = isSpanish ? 'EN 🇬🇧' : 'ES 🇪🇸';

            // Update the HTML lang attribute for accessibility
            document.documentElement.lang = isSpanish ? 'es' : 'en';
            
            // Log for debugging
            console.log(`Language switched to: ${isSpanish ? 'Spanish' : 'English'}`);
        });
    }

    // --- 2. MOBILE MENU TOGGLE ---
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create a mobile menu button if it doesn't exist in HTML
    let menuBtn = document.getElementById('mobile-menu');
    
    if (!menuBtn) {
        menuBtn = document.createElement('div');
        menuBtn.id = 'mobile-menu';
        menuBtn.innerHTML = '<span></span><span></span><span></span>';
        navbar.prepend(menuBtn); // Add it to the start of the navbar
    }

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('is-active');
        
        // Inline style fallback for immediate testing
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0b6e4f';
            navLinks.style.padding = '20px';
        } else {
            navLinks.style.display = ''; // Resets to CSS default
        }
    });
});
