import jsonData from "../data.json" assert { type: "json" };

// buttons
const planetButtons = document.querySelectorAll(".planet-button");
const crewButtons = document.querySelectorAll(".crew-button");
const techButtons = document.querySelectorAll(".tech-buttons");

// assets
const imageWebp = document.querySelector(".image-webp");
const imagePng = document.querySelector(".image-png");
// const imagePort = 
// const imageLand =
const title = document.querySelector(".title");
const name = document.querySelector(".name");
const about = document.querySelector(".about");
const distance = document.querySelector(".distance");
const time = document.querySelector(".time");

// Aria-selected function
const buttonActiveFunction = (selectedButton, buttonArray) => {
  const checkActive = (item) => {
    item != selectedButton
      ? item.setAttribute("aria-selected", false)
      : item.setAttribute("aria-selected", true);
  };
  buttonArray.forEach(checkActive);
};

// content function
const contentFunction = (item, array) => {
  var number = 0;
  switch (item) {
    case array[0]:
      number = 0;
      break;
    case array[1]:
      number = 1;
      break;
    case array[2]:
      number = 2;
      break;
    case array[3]:
      number = 3;
  }

  if (document.querySelector(".crew")) {
    imageWebp.setAttribute("srcset", jsonData.crew[number].images.webp);
    imagePng.setAttribute("src", jsonData.crew[number].images.png);
    title.innerHTML = jsonData.crew[number].role;
    name.innerHTML = jsonData.crew[number].name;
    about.innerHTML = jsonData.crew[number].bio;
  } else if (document.querySelector(".destination")) {
    imageWebp.setAttribute("srcset", jsonData.destinations[number].images.webp);
    imagePng.setAttribute("src", jsonData.destinations[number].images.png);
    title.innerHTML = jsonData.destinations[number].name;
    about.innerHTML = jsonData.destinations[number].description;
    distance.innerHTML = jsonData.destinations[number].distance;
    time.innerHTML = jsonData.destinations[number].travel;
  } else if (document.querySelector(".technology")) {
    // imagePort.
    // imageLand.
    title.innerHTML = jsonData.technology[number].name;
    about.innerHTML = jsonData.technology[number].description;
  }
};

if (document.querySelector(".crew")) {
  crewButtons.forEach((item) => {
    item.addEventListener("click", () => {
      buttonActiveFunction(item, crewButtons);
      contentFunction(item, crewButtons);
    });
  });
} else if (document.querySelector(".destination")) {
  planetButtons.forEach((item) => {
    item.addEventListener("click", () => {
      buttonActiveFunction(item, planetButtons);
      contentFunction(item, planetButtons);
    });
  });
} else if (document.querySelector('.technology')) {
  techButtons.forEach((item) => {
    item.addEventListener("click", () => {
      buttonActiveFunction(item, techButtons);
      contentFunction(item, techButtons);
    })
  })
}
