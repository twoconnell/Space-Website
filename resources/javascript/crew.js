// --------------------------------------------
// destination functions
// --------------------------------------------

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
const crewFunction = (image, title, name, about) => {
  crewImage.setAttribute("src", image);
  crewTitle.innerHTML = title;
  crewName.innerHTML = name;
  crewAbout.innerHTML = about;
};

// commander
commanderButton.addEventListener('click', () => {
  buttonActiveFunction(commanderButton);
  crewFunction(
    './assets/crew/image-douglas-hurley.png',
    'Commander',
    'Douglas Hurley',
    'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    );
})

// specialist
specialistButton.addEventListener('click', () => {
  buttonActiveFunction(specialistButton);
  crewFunction(
    './assets/crew/image-mark-shuttleworth.png',
    'Mission Specialist',
    'MARK SHUTTLEWORTH',
    'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    );
})

// pilot
pilotButton.addEventListener('click', () => {
  buttonActiveFunction(pilotButton);
  crewFunction(
    './assets/crew/image-victor-glover.png',
    'Pilot',
    'Victor Glover',
    'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    );
})

// engineer
engineerButton.addEventListener('click', () => {
  buttonActiveFunction(engineerButton);
  crewFunction(
    './assets/crew/image-anousheh-ansari.png',
    'Pilot',
    'Anousheh Ansari',
    'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    );
})