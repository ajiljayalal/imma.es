/**
 * Madrid Malayali Association - Main Script
 * Handles: Multilingual Toggle & Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LANGUAGE SELECTOR LOGIC ---
    
    // We find the link in your navbar that says "ES 🇪🇸" or "EN 🇬🇧"
    const langBtn = Array.from(document.querySelectorAll('.nav-links a'))
                         .find(el => el.textContent.includes('ES') || el.textContent.includes('EN'));

    let currentLang = 'en'; // Page starts in English (Default)

    /**
     * Function: updateTextContent
     * Swaps the text of every element that has a [data-en] attribute.
     * We use .textContent to ensure we don't break your CSS classes or layout.
     */
    const updateTextContent = (lang) => {
        document.querySelectorAll('[data-en]').forEach(el => {
            const newText = el.getAttribute(`data-${lang}`);
            if (newText) {
                el.textContent = newText;
            }
        });
    };

    // --- CRITICAL: FORCE ENGLISH ON LOAD ---
    // This ensures the "Long English" version from data-en appears 
    // immediately as soon as the page finishes loading.
    updateTextContent('en');

    // --- LANGUAGE TOGGLE EVENT ---
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop it from trying to open a new page
            
            // Toggle between 'en' and 'es'
            currentLang = currentLang === 'en' ? 'es' : 'en';
            
            // Update the website text
            updateTextContent(currentLang);

            // Update the Button Label in the Navbar
            langBtn.innerHTML = currentLang === 'en' ? 'ES 🇪🇸' : 'EN 🇬🇧';

            // Update the HTML lang attribute for screen readers
            document.documentElement.lang = currentLang;
            
            console.log(`Language successfully changed to: ${currentLang.toUpperCase()}`);
        });
    }

    // --- 2. MOBILE MENU TOGGLE ---
    
    // This assumes you have a <div id="mobile-menu"> in your HTML navbar
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Toggle the 'active' class on your nav links
            navLinks.classList.toggle('active');
            
            // Optional: Animate the hamburger bars
            mobileMenu.classList.toggle('is-active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

});
