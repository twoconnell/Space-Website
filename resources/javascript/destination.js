// --------------------------------------------
// destination functions
// --------------------------------------------

// buttons
const moonButton = document.getElementById("moon-button");
const marsButton = document.getElementById("mars-button");
const europaButton = document.getElementById("europa-button");
const titanButton = document.getElementById("titan-button");
const buttonArray = [moonButton, marsButton, europaButton, titanButton];

// assets
const planetImage = document.querySelector(".planet-image");
const destinationTitle = document.querySelector(".destination-info-title");
const destinationAbout = document.querySelector(".destination-info-about");
const destinationDistance = document.querySelector(".destination-info-distance");
const destinationTime = document.querySelector(".destination-info-time");

// set aria-active function
const buttonActiveFunction = (selectedButton) => {
  const checkActive = (item) => {
    if (item != selectedButton) {
      item.setAttribute("aria-selected", false);
    } else if (item === selectedButton) {
      item.setAttribute("aria-selected", true);
    }
  };
  buttonArray.forEach(checkActive);
};

// set assets function
const destinationFunction = (image, title, about, distance, time) => {
  planetImage.setAttribute("src", image);
  destinationTitle.innerHTML = title;
  destinationAbout.innerHTML = about;
  destinationDistance.innerHTML = distance;
  destinationTime.innerHTML = time;
};

// moon
moonButton.addEventListener("click", () => {
  buttonActiveFunction(moonButton);
  destinationFunction(
    "./assets/destination/image-moon.png",
    "Moon",
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "384,400 km",
    "3 days"
  );
});

// mars
marsButton.addEventListener("click", () => {
  buttonActiveFunction(marsButton);
  destinationFunction(
    "./assets/destination/image-mars.png",
    "Mars",
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "225 mil. km",
    "9 months"
  );
});

// europa
europaButton.addEventListener("click", () => {
  buttonActiveFunction(europaButton);
  destinationFunction(
    "./assets/destination/image-europa.png",
    "Europa",
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "628 mil. km",
    "3 years"
  );
});

// titan
titanButton.addEventListener("click", () => {
  buttonActiveFunction(titanButton);
  destinationFunction(
    "./assets/destination/image-titan.png",
    "Titan",
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "6.6 bil. km",
    "7 years"
  );
});

