// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Handle contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 480) { // Only run the script on mobile devices
        const techSlider = document.querySelector(".tech-slider");
        const techCards = document.querySelectorAll(".tech-card");
        const cardWidth = techCards[0].offsetWidth + 15; // Card width plus gap
        const totalWidth = cardWidth * techCards.length;
        
        // Create a duplicate set of tech cards for continuous sliding
        techSlider.innerHTML += techSlider.innerHTML; 

        let currentIndex = 0;
        
        function slide() {
            // Move the slider to simulate sliding effect
            currentIndex++;
            if (currentIndex >= techCards.length) {
                currentIndex = 0; // Reset to the first card after the last one
            }
            techSlider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
        
        setInterval(slide, 3000); // Adjust time (3000ms) for sliding speed
    }
});