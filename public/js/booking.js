




// Animations
const animatedSections = document.querySelectorAll('.animated-section');

const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.0 // Adjust the threshold as needed 0.2
});

animatedSections.forEach(section => {
  observer.observe(section);
});



// Nav Bar
let servicesMenu = document.querySelector('.servicesMenu');
let services = document.querySelector('.services');






// Create a media query
const mediaQuery = window.matchMedia("(min-width: 650px)");

// Define a function to handle the media query change
const handleMediaQueryChange = (mediaQuery) => {

  if (mediaQuery.matches) {
    servicesMenu.addEventListener('mouseenter', function() {
      services.classList.remove('hidden');
    });

    services.addEventListener('mouseleave', function() {
      services.classList.add('hidden');
    });
  } else {
    // Handle the case when the media query does not match (screen width is less than 650px)
    // You can add additional logic or remove any previously added event listeners if needed
  }
}

// Call the function initially to handle the current media query state
handleMediaQueryChange(mediaQuery);

// Add a listener for media query changes
mediaQuery.addEventListener('change', handleMediaQueryChange);





const treatments = document.querySelector('#treatments')

// Create a media query
const mediaQueries = window.matchMedia("(max-width: 650px)");

// Define a function to handle the media query change
const handleMediaQueryChanges = (mediaQueries) => {
  myHeader.backgroundColor = "#17202b"
  if (mediaQueries.matches) {
    treatments.innerHTML = '&#x2630;'
    treatments.style.fontSize = '3rem';
    treatments.style.color = '#d3a058'
    treatments.style.cursor = 'Pointer'
    // Media query condition is met
    // Set display property to block for the element you want to show
    // services.style.display = "block";
    var servicesVisible = false; // Track the visibility of the services tab

    servicesMenu.addEventListener('click', function() {
      if (servicesVisible) {
        services.classList.add('hidden');
        services.style.display = "none";
      } else {
        services.classList.remove('hidden');
        services.style.display = "block";
      }
  
      servicesVisible = !servicesVisible; // Toggle the visibility flag
    });
  } 
};

// Add an event listener to the media query
mediaQueries.addEventListener("change", handleMediaQueryChanges);

// Initially, call the function to check the media query condition
handleMediaQueryChanges(mediaQueries);

