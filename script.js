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
  

  const skillData = {
    labels: ['Web Development', 'Graphic Design', 'Project Management', 'Communication', 'Problem Solving'],
    datasets: [{
        label: 'Skills',
        data: [8, 7, 6, 9, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
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
                        color: 'rgba(255, 255, 255, 0.3)' // Light gray angle lines
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.3)' // Light gray grid lines
                    },
                    pointLabels: {
                        font: {
                            size: 14, // Adjust font size as needed
                            family: 'Arial', // Use a consistent font
                        },
                        color: '#FFFFFF' // White font color for labels
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)', // Light gray tick labels
                        backdropColor: 'transparent', // Transparent background for tick labels
                        stepSize: 2,
                    },
                    suggestedMin: 0, // Suggest a minimum value of 0
                    suggestedMax: 10, // Suggest a maximum value of 10
                }
            },
            plugins: {
                tooltip: {
                    usePointStyle: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        size: 16,
                        family: 'Arial',
                    },
                    bodyFont: {
                        size: 14,
                        family: 'Arial',
                    },
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: 'rgba(75, 192, 192, 0.4)',
                    borderWidth: 1
                },
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            family: 'Arial',
                        },
                    },
                    position: 'top'
                },
            },
            responsive: true,
            maintainAspectRatio: true,
        },
    });
}



function setupInfiniteScroll() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = Array.from(testimonialContainer.children);
    const totalWidth = testimonials.reduce((total, elem) => total + elem.offsetWidth + 10, 0);
  
    testimonialContainer.append(...testimonials.map(testimonial => testimonial.cloneNode(true)));
  
    let currentScrollPosition = 0;
    let scrollInterval;
    const step = 2;
  
    function scrollTestimonials() {
        currentScrollPosition += step;
        if (currentScrollPosition >= totalWidth) {
            currentScrollPosition = 0;
        }
        testimonialContainer.scrollLeft = currentScrollPosition;
    }
  
    function startScrolling() {
        scrollInterval = setInterval(scrollTestimonials, 20);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    testimonialContainer.addEventListener('mouseover', stopScrolling);
    testimonialContainer.addEventListener('mouseout', startScrolling);

    startScrolling();
}

document.addEventListener('DOMContentLoaded', setupInfiniteScroll);


// Function to show event details in a modal
function showEventDetails(event) {
    // Assuming your event details are in '.timeline-content' inside '.timeline-event'
    const eventDetails = event.querySelector('.timeline-content').innerHTML;
    const detailsModal = document.getElementById('event-details-modal');

    // Update modal content and display it
    if (detailsModal) {
        detailsModal.innerHTML = eventDetails;
        detailsModal.style.display = 'block';
    }
}

// Function to hide the event details
function hideEventDetails() {
    const detailsModal = document.getElementById('event-details-modal');
    if (detailsModal) {
        detailsModal.style.display = 'none';
    }
}


// Contact form show/hide functionality
document.addEventListener('DOMContentLoaded', () => {
    setupInfiniteScroll();
  
    const contactButton = document.getElementById('showContactForm');
    const contactFormContainer = document.getElementById('contactFormContainer');
  
    contactButton.addEventListener('click', () => {
      contactFormContainer.classList.toggle('active');
    });
  
    // You should also setup your radar chart here if it is not done already
    // new Chart(ctx, { type: 'radar', data: skillData, options: { ... } });
  });