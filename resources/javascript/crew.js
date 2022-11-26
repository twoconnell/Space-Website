// --------------------------------------------
// destination functions
// --------------------------------------------

import jsonData from '../data.json' assert {type: 'json'};

// buttons
const commanderButton = document.getElementById("commander-button");
const specialistButton = document.getElementById("specialist-button");
const pilotButton = document.getElementById("pilot-button");
const engineerButton = document.getElementById("engineer-button");
const buttonArray = [commanderButton, specialistButton, pilotButton, engineerButton];

// assets
const crewTitle = document.querySelector(".crew-title");
const crewName = document.querySelector(".crew-name");
const crewAbout = document.querySelector(".crew-about");
const crewImage = document.querySelector(".crew-image");

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
const crewFunction = (crewNumber) => {
  crewImage.setAttribute("src", jsonData.crew[crewNumber].images.png);
  crewTitle.innerHTML = jsonData.crew[crewNumber].role;
  crewName.innerHTML = jsonData.crew[crewNumber].name;
  crewAbout.innerHTML = jsonData.crew[crewNumber].bio;
};

// commander
commanderButton.addEventListener('click', () => {
  buttonActiveFunction(commanderButton);
  crewFunction(0);
})

// specialist
specialistButton.addEventListener('click', () => {
  buttonActiveFunction(specialistButton);
  crewFunction(1);
})

// pilot
pilotButton.addEventListener('click', () => {
  buttonActiveFunction(pilotButton);
  crewFunction(2);
})

// engineer
engineerButton.addEventListener('click', () => {
  buttonActiveFunction(engineerButton);
  crewFunction(3);
})