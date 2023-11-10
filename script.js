function setupInfiniteScroll() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = Array.from(testimonialContainer.children);
    const totalWidth = testimonials.reduce((total, elem) => total + elem.offsetWidth + 10, 0);
  
    testimonialContainer.append(...testimonials.map(testimonial => testimonial.cloneNode(true)));
  
    let currentScrollPosition = 0;
    const step = 2;
  
    function scrollTestimonials() {
      currentScrollPosition += step;
      if (currentScrollPosition >= totalWidth) {
        currentScrollPosition = 0;
      }
      testimonialContainer.scrollLeft = currentScrollPosition;
      
      requestAnimationFrame(scrollTestimonials);
    }
  
    scrollTestimonials();
  }
  
  document.addEventListener('DOMContentLoaded', setupInfiniteScroll);
  

// Radar chart
const skillData = {
    labels: ['Web Development', 'Graphic Design', 'Project Management', 'Communication', 'Problem Solving'],
    datasets: [{
        data: [8, 7, 6, 9, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
    }],
};

const ctx = document.getElementById('skillChart').getContext('2d');

if (!ctx) {
    console.error('Could not find the skillChart canvas element.');
} else {
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: skillData,
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: false,
                    },
                    suggestedMin: 0, // Suggest a minimum value of 0
                    suggestedMax: 10, // Suggest a maximum value of 10
                    ticks: {
                        stepSize: 1,
                        callback: function (value) {
                            return value; // Show all tick values
                        },
                    },
                },
            },
            responsive: true,
            maintainAspectRatio: true,
        },
    });
}



// Contact form toggle
const contactButton = document.getElementById('showContactForm');
const contactForm = document.querySelector('.contact-form');

if (contactButton && contactForm) {
    contactButton.addEventListener('click', function () {
        contactForm.classList.toggle('hidden');
    });
} else {
    console.error('Could not find the contact form elements.');
}

// Timeline details
const timeline = document.getElementById('timeline');
const detailsContainer = document.getElementById('timeline-details');
const closeDetailsButton = document.getElementById('close-details');

if (timeline && detailsContainer && closeDetailsButton) {
    timeline.querySelectorAll('.timeline-event').forEach(event => {
        event.addEventListener('click', () => {
            detailsContainer.innerHTML = event.querySelector('.timeline-content').innerHTML;
            detailsContainer.style.display = 'block';
        });
    });

    closeDetailsButton.addEventListener('click', () => {
        detailsContainer.style.display = 'none';
    });
} else {
    console.error('Could not find required timeline elements.');
}
