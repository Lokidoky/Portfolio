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

const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialScrollbarThumb = document.querySelector('.testimonial-scrollbar-thumb');
const scrollbarContainer = document.querySelector('.testimonial-scrollbar-container');

let isDragging = false;
let startX = 0;

testimonialScrollbarThumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - testimonialScrollbarThumb.getBoundingClientRect().left;
  testimonialSlider.style.scrollBehavior = 'auto';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  e.preventDefault();

  const containerWidth = scrollbarContainer.offsetWidth;
  const thumbWidth = testimonialScrollbarThumb.offsetWidth;

  const x = e.clientX - scrollbarContainer.getBoundingClientRect().left - startX;
  let scrollX = (x / (containerWidth - thumbWidth)) * (testimonialSlider.scrollWidth - containerWidth);

  // Ensure the scrollbar thumb stays within the container bounds
  scrollX = Math.min(Math.max(scrollX, 0), testimonialSlider.scrollWidth - containerWidth);

  testimonialSlider.scrollLeft = scrollX;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  testimonialSlider.style.scrollBehavior = 'smooth';
});

testimonialSlider.addEventListener('scroll', () => {
  const scrollPercentage = (testimonialSlider.scrollLeft / (testimonialSlider.scrollWidth - testimonialSlider.clientWidth)) * 100;
  const thumbWidth = (testimonialSlider.clientWidth / testimonialSlider.scrollWidth) * 100;

  testimonialScrollbarThumb.style.width = thumbWidth + '%';
  testimonialScrollbarThumb.style.left = scrollPercentage + '%';
});



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
                pointLabels: {
                    fontSize: 14, // Adjust font size
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.2)', // Change grid line color
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
            layout: {
                padding: {
                    left: 20, // Adjust left padding
                    right: 20, // Adjust right padding
                    top: 20, // Adjust top padding
                    bottom: 20, // Adjust bottom padding
                },
            },
        },
    });
});
*/



    

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

