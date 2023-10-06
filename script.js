// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        //testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

testimonialSlider.addEventListener('scroll', () => {
    const scrollPercentage = (testimonialSlider.scrollLeft / (testimonialSlider.scrollWidth - testimonialSlider.clientWidth)) * 100;
    index = Math.round((testimonials.length - 1) * (scrollPercentage / 100));
    showTestimonial(index);
});

showTestimonial(index);

/*
document.addEventListener('DOMContentLoaded', function () {
    const skillData = {
        labels: ['Web Development', 'Graphic Design', 'Project Management', 'Communication', 'Problem Solving'],
        datasets: [{
            data: [8, 7, 6, 9, 8], // Proficiency levels (out of 10)
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color of the chart area
            borderColor: 'rgba(75, 192, 192, 1)', // Border color of the chart area
            borderWidth: 2, // Border width of the chart area
        }],
    };

    const ctx = document.getElementById('skillChart').getContext('2d');

    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: skillData,
        options: {
            scale: {
                angleLines: {
                    display: false, // Hide the radial lines
                },
                ticks: {
                    beginAtZero: true, // Start the scale from 0
                    max: 10, // Maximum proficiency level (adjust as needed)
                    stepSize: 2, // Step size between proficiency levels (adjust as needed)
                    callback: function (value) {
                        return value === 0 ? '' : value; // Display an empty string for 0
                    },
                },                
            },
        },
    });
});*/

document.addEventListener('DOMContentLoaded', function () {
    // ... (your existing code)

    // Select the contact button and the contact form
    const contactButton = document.getElementById('showContactForm');
    const contactForm = document.querySelector('.contact-form');

    // Add a click event listener to the contact button
    contactButton.addEventListener('click', function () {
        // Toggle the "hidden" class on the contact form
        contactForm.classList.toggle('hidden');
    });

    // ... (rest of your code)
});


// JavaScript for interactive timeline
const timeline = document.getElementById('timeline');
const detailsContainer = document.getElementById('timeline-details');
const closeDetailsButton = document.getElementById('close-details');

// Add a click event listener to each timeline event
timeline.querySelectorAll('.timeline-item').forEach(event => {
   event.addEventListener('click', () => {
       // Show event details
       detailsContainer.innerHTML = event.querySelector('.timeline-content').innerHTML;
       detailsContainer.style.display = 'block';
   });
});

// Add a click event listener to the close button
closeDetailsButton.addEventListener('click', () => {
   // Hide event details
   detailsContainer.style.display = 'none';
});


// JavaScript code to handle the menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');

    // Toggle the menu when clicking the menu button
    menuButton.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });

    // Hide the menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
            sidebar.classList.remove('show');
        }
    });
});






