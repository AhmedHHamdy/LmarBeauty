


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







// FAQ question one 
const questionOne = document.querySelector('#question-one')
const answerOne = document.querySelector('#answer-one')
const questionOneIcon = document.querySelector('#question-one--icon')
const answerOneIcon = document.querySelector('#answer-one--icon')

// FAQ question two 
const questionTwo = document.querySelector('#question-two')
const answerTwo = document.querySelector('#answer-two')
const questionTwoIcon = document.querySelector('#question-two--icon')
const answerTwoIcon = document.querySelector('#answer-two--icon')

// FAQ question three 
const questionThree = document.querySelector('#question-three')
const answerThree = document.querySelector('#answer-three')
const questionThreeIcon = document.querySelector('#question-three--icon')
const answerThreeIcon = document.querySelector('#answer-three--icon')

// FAQ question four 
const questionFour = document.querySelector('#question-four')
const answerFour = document.querySelector('#answer-four')
const questionFourIcon = document.querySelector('#question-four--icon')
const answerFourIcon = document.querySelector('#answer-four--icon')

// FAQ question five 
const questionFive = document.querySelector('#question-five')
const answerFive = document.querySelector('#answer-five')
const questionFiveIcon = document.querySelector('#question-five--icon')
const answerFiveIcon = document.querySelector('#answer-five--icon')

questionOne.addEventListener('click', showAnswerOne) 
questionTwo.addEventListener('click', showAnswerTwo) 
questionThree.addEventListener('click', showAnswerThree) 
questionFour.addEventListener('click', showAnswerFour) 
questionFive.addEventListener('click', showAnswerFive) 




function showAnswerOne() {
  if(questionOneIcon.classList.contains('hidden')) {
    questionOneIcon.classList.toggle('hidden')
    answerOneIcon.classList.add('hidden')
    answerOne.classList.toggle('hidden')
  } else {
    answerOne.classList.toggle('hidden')
    questionOne.style.paddingBottom  = '0'
    questionOneIcon.classList.add('hidden')
    answerOneIcon.classList.toggle('hidden')
  }
}


function showAnswerTwo() {
  if(questionTwoIcon.classList.contains('hidden')) {
    questionTwoIcon.classList.toggle('hidden')
    answerTwoIcon.classList.add('hidden')
    answerTwo.classList.toggle('hidden')
  } else {
    answerTwo.classList.toggle('hidden')
    questionTwo.style.paddingBottom  = '0'
    questionTwoIcon.classList.add('hidden')
    answerTwoIcon.classList.toggle('hidden')
  }
}


function showAnswerThree() {
  if(questionThreeIcon.classList.contains('hidden')) {
    questionThreeIcon.classList.toggle('hidden')
    answerThreeIcon.classList.add('hidden')
    answerThree.classList.toggle('hidden')
  } else {
    answerThree.classList.toggle('hidden')
    questionThree.style.paddingBottom  = '0'
    questionThreeIcon.classList.add('hidden')
    answerThreeIcon.classList.toggle('hidden')
  }
}


function showAnswerFour() {
  if(questionFourIcon.classList.contains('hidden')) {
    questionFourIcon.classList.toggle('hidden')
    answerFourIcon.classList.add('hidden')
    answerFour.classList.toggle('hidden')
  } else {
    answerFour.classList.toggle('hidden')
    questionFour.style.paddingBottom  = '0'
    questionFourIcon.classList.add('hidden')
    answerFourIcon.classList.toggle('hidden')
  }
}


function showAnswerFive() {
  if(questionFiveIcon.classList.contains('hidden')) {
    questionFiveIcon.classList.toggle('hidden')
    answerFiveIcon.classList.add('hidden')
    answerFive.classList.toggle('hidden')
  } else {
    answerFive.classList.toggle('hidden')
    questionFive.style.paddingBottom  = '0'
    questionFiveIcon.classList.add('hidden')
    answerFiveIcon.classList.toggle('hidden')
  }
}



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

