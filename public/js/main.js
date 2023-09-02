
// Navigation
const myHeader = document.querySelector('#myHeader');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    myHeader.style.backgroundColor = "#17202b";
  } else {
    myHeader.style.backgroundColor = "transparent";
  }
});

myHeader.addEventListener('mouseenter', function() {
  myHeader.style.backgroundColor = "#17202b";
});

myHeader.addEventListener('mouseleave', function() {
  if (window.pageYOffset > 0) {
    myHeader.style.backgroundColor = "#17202b";
  } else {
    myHeader.style.backgroundColor = "transparent";
  }
});


// // Second section navigation
const bodyTab = document.querySelector('#body-tab')

const facialTab = document.querySelector('#facial-tab')

const hairTab = document.querySelector('#hair-tab')

let arr = [facialTab, bodyTab, hairTab]


let serviceImage = document.querySelector('#serviceImg')
let serviceHeading = document.querySelector('#serviceHeading')
let servicePara = document.querySelector('#servicePara')
let listFeatures = document.querySelector('.list-features')


class Services {
  constructor(tabName, serviceTitle, serviceDesc, serviceImage, features) {
    this.tabName = tabName
    this.serviceTitle = serviceTitle
    this.serviceDesc = serviceDesc
    this.serviceImage = serviceImage
    this.features = features
  }

  showTab = () => {
    // Hide the bottom border
    arr.forEach(tab => {
      tab.style.borderBottom = 'none';
    });

    // 'this' now refers to the Services instance
    this.tabName.style.borderBottom = '2px solid #F6C47D'
    serviceHeading.innerText = this.serviceTitle
    servicePara.innerText = this.serviceDesc
    serviceImage.style.backgroundImage = `url('${this.serviceImage}')`
    listFeatures.innerHTML = ''
    this.features.forEach((feature, i)=> {
      if(feature) {
        const listItem = document.createElement('li')
        listItem.classList.add('.liStyling')
        listItem.innerText = feature
        listFeatures.appendChild(listItem)
      }

      
    })
  }
}



const serviceOne = new Services(facialTab, 'Facials', 'We’ll use our experience and skills to make sure the skin treatment you choose is the most suitable for your skin type and any conditions, so that you can feel confident and beautiful. We have expertise across a range of treatments, and can advise which treatment will be best for you. We also offer superb after care and only use the very best products from the very best brands.', './assets/skin-5.jpeg', ['Carbon Facials', 'Plasma Skin Rejuvention', 'Skin Rejuvention', 'Medical Grade Light Therapy', 'Collagen Induction Therapy','Lumixa', 'HydraFacial', 'Platelet Rich Plasma']);
facialTab.addEventListener('click', serviceOne.showTab);

const serviceTwo = new Services(bodyTab, 'THE BODY', 'At Lmar Beauty Clinic, we have a number of ways to help you sculpt and shape your body. Whether you have a stubborn pocket of fat that simply won’t go away, or whether you’ve been left with loose skin after losing weight – we can help. Our treatments can be used individually or combined for extra power, giving you control over your shape.', './assets/body-1.jpg', ['Ultrasound Cavitation', 'RF Skin Tightening', 'Lux Series Tattoo Removal', "Intimate Rejuvenation"]);
bodyTab.addEventListener('click', serviceTwo.showTab);

const serviceSix = new Services(hairTab, 'THE HAIR', 'Laser Hair Removal is a safe and effective way of removing unwanted hair, permanently. No more razor burn or painful waxing, whether on underarms, back or legs. We only use medical-grade lasers, the most advanced technology available, which safely deliver guaranteed results and faster treatment times to IPL.', './assets/hair-1.jpg', ['Permanent Hair Removal', 'IPL Super Hair Reduction', 'Platelet Rich Plasma for Hair Loss']);
hairTab.addEventListener('click', serviceSix.showTab);
serviceOne.showTab()


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

// // Function to show the popup
// function showPopup() {
//   var popup = document.getElementById("popupContainer");
//   popup.classList.add("active");
// }

// // Function to close the popup
// function closePopup() {
//   var popup = document.getElementById("popupContainer");
//   popup.classList.remove("active");
// }

// // Event listener to show the popup when the page loads
// window.addEventListener("load", showPopup);

// // Event listener to close the popup when the close button is clicked
// var closeBtn = document.getElementById("closePopup");
// var servicesBtn = document.getElementById("closeServices");
// closeBtn.addEventListener("click", closePopup);
// servicesBtn.addEventListener("click", closePopup);
// Function to show the popup
function showPopup() {
  var popup = document.getElementById("popupContainer");
  popup.classList.add("active");
}

// Function to close the popup
function closePopup() {
  var popup = document.getElementById("popupContainer");
  popup.classList.remove("active");
  localStorage.setItem("popupShown", "true");
}

// Check if the popup has been shown before
var popupShown = localStorage.getItem("popupShown");
if (popupShown !== "true") {
  window.addEventListener("load", showPopup);
}

// Event listener to close the popup when the close button is clicked
var closeBtn = document.getElementById("closePopup");
var servicesBtn = document.getElementById("closeServices");
closeBtn.addEventListener("click", closePopup);
servicesBtn.addEventListener("click", closePopup);
