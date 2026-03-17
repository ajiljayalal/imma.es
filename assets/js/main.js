document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-switch');
    let currentLang = 'en';

    langBtn.addEventListener('click', () => {
        // Toggle Language
        currentLang = currentLang === 'en' ? 'es' : 'en';
        
        // Update Button Text
        langBtn.innerText = currentLang === 'en' ? 'ES 🇪🇸' : 'EN 🇬🇧';

        // Swap Content
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute(`data-${currentLang}`);
        });

        // Optional: Change HTML lang attribute
        document.documentElement.lang = currentLang;
    });

    // Simple Mobile Menu Toggle
    const menu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menu) {
        menu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0b6e4f';
        });
    }
});
