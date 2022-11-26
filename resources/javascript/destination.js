// --------------------------------------------
// destination functions
// --------------------------------------------

import jsonData from '../data.json' assert {type: 'json'};

// buttons
const planetButtons = document.querySelectorAll('.planet-button');

// assets
const planetImageWebp = document.querySelector(".planet-image-webp");
const planetImagePng = document.querySelector(".planet-image-png");
const destinationTitle = document.querySelector(".destination-info-title");
const destinationAbout = document.querySelector(".destination-info-about");
const destinationDistance = document.querySelector(".destination-info-distance");
const destinationTime = document.querySelector(".destination-info-time");

// set aria-active function
const buttonActiveFunction = (selectedButton) => {
  const checkActive = (item) => {
    (item != selectedButton ? item.setAttribute("aria-selected", false) : item.setAttribute("aria-selected", true));
  };
  planetButtons.forEach(checkActive);
};

// function to populate data from json file 
const destinationFunction = (planetNumber) => {
  planetImageWebp.setAttribute("srcset", jsonData.destinations[planetNumber].images.webp);
  planetImagePng.setAttribute("src", jsonData.destinations[planetNumber].images.png);
  destinationTitle.innerHTML = jsonData.destinations[planetNumber].name;
  destinationAbout.innerHTML = jsonData.destinations[planetNumber].description;
  destinationDistance.innerHTML = jsonData.destinations[planetNumber].distance;
  destinationTime.innerHTML = jsonData.destinations[planetNumber].travel;
};

// for (var i = 0; i < planetButtons.length; i++) {
//   planetButtons[i].addEventListener('click', () => {
//     buttonActiveFunction(planetButtons[i])
//     destinationFunction(i);
//   })
// }

// moon
planetButtons[0].addEventListener("click", () => {
  buttonActiveFunction(planetButtons[0]);
  destinationFunction(0);
});

// mars
planetButtons[1].addEventListener("click", () => {
  buttonActiveFunction(planetButtons[1]);
  destinationFunction(1);
});

// europa
planetButtons[2].addEventListener("click", () => {
  buttonActiveFunction(planetButtons[2]);
  destinationFunction(2);
});

// titan
planetButtons[3].addEventListener("click", () => {
  buttonActiveFunction(planetButtons[3]);
  destinationFunction(3);
});