document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuButton.querySelector('svg:first-child');
    const closeIcon = mobileMenuButton.querySelector('svg:last-child');
    const html = document.documentElement;

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.toggle('hidden');
        
        // Toggle icons
        hamburgerIcon.classList.toggle('opacity-0', !isOpen);
        closeIcon.classList.toggle('opacity-0', isOpen);
        
        // Update ARIA
        this.setAttribute('aria-expanded', !isOpen);
    });

    // Close menu and reset icon when clicking outside
    html.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('opacity-0');
        closeIcon.classList.add('opacity-0');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    });

    // Close menu when clicking outside
    html.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });

    // Close menu when clicking on menu links
    mobileMenu.querySelectorAll('a, button').forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});