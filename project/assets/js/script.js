document.addEventListener('DOMContentLoaded', function () {
    const html = document.documentElement;

    // =========================
    // MOBILE MENU TOGGLE
    // =========================
    const mobileMenuButton = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuButton.querySelector('svg:first-child');
    const closeIcon = mobileMenuButton.querySelector('svg:last-child');

    mobileMenuButton.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.toggle('hidden');

        hamburgerIcon.classList.toggle('opacity-0', !isOpen);
        closeIcon.classList.toggle('opacity-0', isOpen);
        mobileMenuButton.setAttribute('aria-expanded', !isOpen);
    });

    // Close mobile menu on click outside or ESC
    html.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('opacity-0');
        closeIcon.classList.add('opacity-0');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('opacity-0');
            closeIcon.classList.add('opacity-0');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // =========================
    // DROPDOWN LOGIC
    // =========================
    const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            const parent = this.closest('.mobile-dropdown');
            const content = parent.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('img');

            // Close all other dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                if (d !== parent) {
                    d.classList.remove('active');
                    const otherContent = d.querySelector('.mobile-dropdown-content');
                    const otherIcon = d.querySelector('[data-dropdown-trigger] img');
                    if (otherContent) {
                        otherContent.style.maxHeight = '0';
                        otherContent.style.opacity = '0';
                    }
                    if (otherIcon) {
                        otherIcon.style.transform = '';
                    }
                }
            });

            const isOpening = !parent.classList.contains('active');
            parent.classList.toggle('active', isOpening);

            if (icon) {
                icon.style.transform = isOpening ? 'rotate(180deg)' : '';
            }

            if (content) {
                content.style.maxHeight = isOpening ? `${content.scrollHeight}px` : '0';
                content.style.opacity = isOpening ? '1' : '0';
            }
        });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.mobile-dropdown')) {
            document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                const content = dropdown.querySelector('.mobile-dropdown-content');
                const icon = dropdown.querySelector('[data-dropdown-trigger] img');
                if (content) {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                }
                if (icon) {
                    icon.style.transform = '';
                }
            });
        }
    });

    // ESC closes dropdowns
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                const content = dropdown.querySelector('.mobile-dropdown-content');
                const icon = dropdown.querySelector('[data-dropdown-trigger] img');
                if (content) {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                }
                if (icon) {
                    icon.style.transform = '';
                }
            });
        }
    });
});
