document.addEventListener('DOMContentLoaded', () => {
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

    // ...existing code...
});