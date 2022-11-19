//When someone clicks burger icon, open menu if closed. If menu is open, close it

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

});

// destination function

const moonButton = document.querySelector('.moon-button');
const marsButton = document.querySelector('.mars-button');
const europaButton = document.querySelector('.europa-button');
const titanButton = document.querySelector('.titan-button');

const planetImage = document.querySelector('.planet-image');
const destinationTitle = document.querySelector('.destination-info-title');
const destinationAbout = document.querySelector('.destination-info-about');
const destinationDistance = document.querySelector('.destination-info-distance');
const destinationTime = document.querySelector('.destination-info-time');

// Moon button

moonButton.addEventListener('click', () => {
  // select correct nav icon
  moonButton.setAttribute('aria-selected', true)
  marsButton.setAttribute('aria-selected', false)
  europaButton.setAttribute('aria-selected', false)
  titanButton.setAttribute('aria-selected', false)

  planetImage.setAttribute('src', './assets/destination/image-moon.png')

  destinationTitle.innerHTML = 'Moon';
  destinationAbout.innerHTML = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
  destinationDistance.innerHTML = '384,400 km';
  destinationTime.innerHTML = '3 days';
})

// Mars button

marsButton.addEventListener('click', () => {
  moonButton.setAttribute('aria-selected', false)
  marsButton.setAttribute('aria-selected', true)
  europaButton.setAttribute('aria-selected', false)
  titanButton.setAttribute('aria-selected', false)

  planetImage.setAttribute('src', './assets/destination/image-mars.png')
  
  destinationTitle.innerHTML = 'Mars';
  destinationAbout.innerHTML = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
  destinationDistance.innerHTML = '225 mil. km';
  destinationTime.innerHTML = '9 months';
})

// Europa button

europaButton.addEventListener('click', () => {
  moonButton.setAttribute('aria-selected', false)
  marsButton.setAttribute('aria-selected', false)
  europaButton.setAttribute('aria-selected', true)
  titanButton.setAttribute('aria-selected', false)

  planetImage.setAttribute('src', './assets/destination/image-europa.png')
  
  destinationTitle.innerHTML = 'Europa';
  destinationAbout.innerHTML = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
  destinationDistance.innerHTML = '628 mil. km';
  destinationTime.innerHTML = '3 years';
})

// Titan button

titanButton.addEventListener('click', () => {
  moonButton.setAttribute('aria-selected', false)
  marsButton.setAttribute('aria-selected', false)
  europaButton.setAttribute('aria-selected', false)
  titanButton.setAttribute('aria-selected', true)

  planetImage.setAttribute('src', './assets/destination/image-titan.png')
  
  destinationTitle.innerHTML = 'Titan';
  destinationAbout.innerHTML = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
  destinationDistance.innerHTML = '6.6 bil. km';
  destinationTime.innerHTML = '7 years';
})
