document.addEventListener('DOMContentLoaded', function() {
    const linksList = document.getElementById('linksList');
    const backToTopButton = document.getElementById('backToTop');

    // Show or hide the "Back to Top" button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Adjust scroll position as needed
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll smoothly to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Handle theme toggle click
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Apply transition class for smooth theme change
            document.body.classList.add('theme-transition');

            // Update theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Remove transition class after animation completes
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
            }, 300);
        });
    }

    // Add entrance animations
    const profile = document.querySelector('.profile');
    const links = document.querySelectorAll('.link-card');

    profile.classList.add('fade-in');

    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('slide-in');
        }, 100 * (index + 1));
    });

    // Add sequential animation to link cards
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        // Cards are already set up with CSS animations
        // This is just a placeholder if you want to add JavaScript animations
    });

    // Add hover effect to links using JavaScript for more complex effects
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.link-icon').style.transform = 'scale(1.1) rotate(5deg)';
            this.querySelector('.link-arrow').style.transform = 'translateX(3px)';
            this.querySelector('.link-arrow').style.color = 'var(--accent)';
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('.link-icon').style.transform = 'scale(1) rotate(0)';
            this.querySelector('.link-arrow').style.transform = 'translateX(0)';
            this.querySelector('.link-arrow').style.color = 'var(--text-secondary)';
        });
    });

    // Add CSS for theme transition
    const style = document.createElement('style');
    style.textContent = `
        .theme-transition,
        .theme-transition * {
            transition: background-color 0.3s ease, 
                        color 0.3s ease, 
                        border-color 0.3s ease, 
                        box-shadow 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);
});

// Add animation classes to CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
.fade-in {
    animation: fadeIn 0.8s ease forwards;
}

.slide-in {
    animation: slideIn 0.5s ease forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.theme-transition {
    transition: background-color 0.5s ease;
}
</style>
`);
