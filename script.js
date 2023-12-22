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
    if (!testimonialContainer) return;

    const testimonials = Array.from(testimonialContainer.children);
    const totalWidth = testimonials.reduce((total, elem) => total + elem.offsetWidth + 10, 0);

    // Clear previously cloned testimonials before appending new ones
    while (testimonialContainer.children.length > testimonials.length) {
        testimonialContainer.removeChild(testimonialContainer.lastChild);
    }
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

// Reinitialize the scrolling when the window is resized
window.addEventListener('resize', setupInfiniteScroll);

// Initialize the scrolling effect when the document is ready
document.addEventListener('DOMContentLoaded', setupInfiniteScroll);
    

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


  // Contact form show/hide logic
  const contactButton = document.getElementById('showContactForm');
  const contactFormContainer = document.getElementById('contactFormContainer');
  if (contactButton && contactFormContainer) {
    contactButton.addEventListener('click', () => {
      contactFormContainer.classList.toggle('active');
    });
  } else {
    console.error('Could not find the contact button or the contact form container.');
  }

  // ... Any other code that needs to run after the DOM is loaded

  document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
});


function fetchWeatherData() {
    const apiKey = '315b593d4eeb578cd8bfb8b48e3c496e'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Bern&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            document.getElementById('weather').textContent = `Temprature in Bern ${temperature}°C`;
        })
        .catch(() => {
            document.getElementById('weather').textContent = 'Weather not available';
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('typing-title');
    const text = title.innerHTML;
    const typingSpeed = 150;
    let i = 0;
    title.innerHTML = '';

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});
function throwConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 } // make sure the confetti comes from the logo area
    });
}

// Add event listener to logo
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo img'); // make sure this selector targets your logo
    if (logo) {
        logo.addEventListener('click', throwConfetti);
    }
});


