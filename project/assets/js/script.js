document.addEventListener('DOMContentLoaded', function() {
    const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = this.closest('.mobile-dropdown');
            const content = parent.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('img');

            // Close other dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                if (d !== parent) {
                    const otherContent = d.querySelector('.mobile-dropdown-content');
                    const otherIcon = d.querySelector('img');
                    otherContent.classList.add('max-h-0');
                    otherContent.classList.remove('pb-4');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                }
            });

            // Toggle current dropdown
            if (content.classList.contains('max-h-0')) {
                // Opening
                content.classList.remove('max-h-0');
                content.classList.add('pb-4');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.classList.add('rotate-180');
            } else {
                // Closing
                content.classList.add('max-h-0');
                content.classList.remove('pb-4');
                content.style.maxHeight = '0';
                if (icon) icon.classList.remove('rotate-180');
            }
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-dropdown')) {
            document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                const content = dropdown.querySelector('.mobile-dropdown-content');
                const icon = dropdown.querySelector('img');
                content.classList.add('max-h-0');
                content.classList.remove('pb-4');
                content.style.maxHeight = '0';
                if (icon) icon.classList.remove('rotate-180');
            });
        }
    });
});