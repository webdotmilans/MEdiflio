// home.js content
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Example of a function to animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate');

        for (let i = 0; i < elements.length; i++) {
            const elementTop = elements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                elements[i].classList.add('active');
            } else {
                elements[i].classList.remove('active');
            }
        }
    }

    // Listen for scroll events on the window
    window.addEventListener('scroll', animateOnScroll);

    // Call the function to check positions on load
    animateOnScroll();
});
