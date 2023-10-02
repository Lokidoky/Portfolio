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
                beginAtZero: true,
                max: 10, // Maximum proficiency level (adjust as needed)
                stepSize: 2, // Step size between proficiency levels (adjust as needed)
            },
        },
    },
});

