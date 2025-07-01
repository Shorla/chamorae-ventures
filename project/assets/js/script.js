document.addEventListener('DOMContentLoaded', function() {
    // Existing mobile menu variables
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuButton.querySelector('svg:first-child');
    const closeIcon = mobileMenuButton.querySelector('svg:last-child');
    const html = document.documentElement;

    // New dropdown variables
    const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

    // Toggle mobile menu (existing functionality)
    mobileMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.toggle('hidden');
        
        hamburgerIcon.classList.toggle('opacity-0', !isOpen);
        closeIcon.classList.toggle('opacity-0', isOpen);
        this.setAttribute('aria-expanded', !isOpen);
    });

    // New dropdown functionality
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('.mobile-dropdown');
            const content = parent.querySelector('.mobile-dropdown-content');
            const icon = parent.querySelector('img');

            // Close other dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                if(d !== parent) {
                    d.classList.remove('active');
                    d.querySelector('img').style.transform = '';
                }
            });

            // Toggle current dropdown
            const isOpening = !parent.classList.contains('active');
            parent.classList.toggle('active', isOpening);
            icon.style.transform = isOpening ? 'rotate(180deg)' : '';
            
            // Animate content
            if(isOpening) {
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.style.opacity = '1';
            } else {
                content.style.maxHeight = '0';
                content.style.opacity = '0';
            }
        });
    });

    // Close all menus when clicking outside (updated)
    html.addEventListener('click', function() {
        // Close mobile menu
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('opacity-0');
        closeIcon.classList.add('opacity-0');
        mobileMenuButton.setAttribute('aria-expanded', 'false');

        // Close all dropdowns
        document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
            dropdown.querySelector('.mobile-dropdown-content').style.maxHeight = '0';
            dropdown.querySelector('img').style.transform = '';
        });
    });

    // Close menu when clicking links (updated)
    mobileMenu.querySelectorAll('a, button').forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            
            // Also reset dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.mobile-dropdown-content').style.maxHeight = '0';
                dropdown.querySelector('img').style.transform = '';
            });
        });
    });

    // Existing ESC key functionality
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') {
            mobileMenu.classList.add('hidden');
            // Also close dropdowns on ESC
            document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.mobile-dropdown-content').style.maxHeight = '0';
                dropdown.querySelector('img').style.transform = '';
            });
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality (completely separate from mobile menu)
    const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('.mobile-dropdown');
            const content = parent.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('img'); // Changed to search within trigger

            // Close other dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                if(d !== parent) {
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

            // Toggle current dropdown
            const isOpening = !parent.classList.contains('active');
            parent.classList.toggle('active', isOpening);
            
            if (icon) {
                icon.style.transform = isOpening ? 'rotate(180deg)' : '';
            }
            
            // Animate content
            if (content) {
                if (isOpening) {
                    content.style.maxHeight = `${content.scrollHeight}px`;
                    content.style.opacity = '1';
                } else {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                }
            }
        });
    });

    // Close dropdowns when clicking outside (doesn't affect mobile menu)
    document.addEventListener('click', function(e) {
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

    // ESC key closes dropdowns without affecting mobile menu
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') {
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
});document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality (completely separate from mobile menu)
    const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('.mobile-dropdown');
            const content = parent.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('img'); // Changed to search within trigger

            // Close other dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                if(d !== parent) {
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

            // Toggle current dropdown
            const isOpening = !parent.classList.contains('active');
            parent.classList.toggle('active', isOpening);
            
            if (icon) {
                icon.style.transform = isOpening ? 'rotate(180deg)' : '';
            }
            
            // Animate content
            if (content) {
                if (isOpening) {
                    content.style.maxHeight = `${content.scrollHeight}px`;
                    content.style.opacity = '1';
                } else {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                }
            }
        });
    });

    // Close dropdowns when clicking outside (doesn't affect mobile menu)
    document.addEventListener('click', function(e) {
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

    // ESC key closes dropdowns without affecting mobile menu
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape') {
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