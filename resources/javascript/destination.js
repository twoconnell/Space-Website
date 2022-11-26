// --------------------------------------------
// destination functions
// --------------------------------------------

import jsonData from '../data.json' assert {type: 'json'};

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

const destinationFunction = (planetNumber) => {

  planetImage.setAttribute("src", jsonData.destinations[planetNumber].images.png);
  destinationTitle.innerHTML = jsonData.destinations[planetNumber].name;
  destinationAbout.innerHTML = jsonData.destinations[planetNumber].description;
  destinationDistance.innerHTML = jsonData.destinations[planetNumber].distance;
  destinationTime.innerHTML = jsonData.destinations[planetNumber].travel;
};

// moon
moonButton.addEventListener("click", () => {
  buttonActiveFunction(moonButton);
  destinationFunction(0);
});

// mars
marsButton.addEventListener("click", () => {
  buttonActiveFunction(marsButton);
  destinationFunction(1);
});

// europa
europaButton.addEventListener("click", () => {
  buttonActiveFunction(europaButton);
  destinationFunction(2);
});

// titan
titanButton.addEventListener("click", () => {
  buttonActiveFunction(titanButton);
  destinationFunction(3);
});

