// --------------------------------------------
// destination functions
// --------------------------------------------

import jsonData from '../data.json' assert {type: 'json'};

// buttons
const crewButtons = document.querySelectorAll('.crew-button');

// assets
const crewTitle = document.querySelector(".crew-title");
const crewName = document.querySelector(".crew-name");
const crewAbout = document.querySelector(".crew-about");
const crewImageWebp = document.querySelector('.crew-image-webp');
const crewImagePng = document.querySelector(".crew-image-png");

// set aria-active function
const buttonActiveFunction = (selectedButton) => {
  const checkActive = (item) => {
    (item != selectedButton ? item.setAttribute("aria-selected", false) : item.setAttribute("aria-selected", true))
  };
  crewButtons.forEach(checkActive);
};

// set assets function
const crewFunction = (crewNumber) => {
  crewImageWebp.setAttribute("srcset", jsonData.crew[crewNumber].images.webp);
  crewImagePng.setAttribute("src", jsonData.crew[crewNumber].images.png);
  crewTitle.innerHTML = jsonData.crew[crewNumber].role;
  crewName.innerHTML = jsonData.crew[crewNumber].name;
  crewAbout.innerHTML = jsonData.crew[crewNumber].bio;
};

// commander
crewButtons[0].addEventListener('click', () => {
  buttonActiveFunction(crewButtons[0]);
  crewFunction(0);
})

// specialist
crewButtons[1].addEventListener('click', () => {
  buttonActiveFunction(crewButtons[1]);
  crewFunction(1);
})

// pilot
crewButtons[2].addEventListener('click', () => {
  buttonActiveFunction(crewButtons[2]);
  crewFunction(2);
})

// engineer
crewButtons[3].addEventListener('click', () => {
  buttonActiveFunction(crewButtons[3]);
  crewFunction(3);
})