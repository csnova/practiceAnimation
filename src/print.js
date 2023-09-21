import Red from "./images/red.jpg";
import Orange from "./images/orange.jpg";
import Yellow from "./images/yellow.jpg";
import Green from "./images/green.jpg";
import Blue from "./images/blue.jpg";
import Purple from "./images/purple.jpg";

function displayImages() {
  const container = document.querySelector(".container");
  const imageRed = document.createElement("img");
  imageRed.src = Red;
  imageRed.classList.add("image");
  container.appendChild(imageRed);

  const imageOrange = document.createElement("img");
  imageOrange.src = Orange;
  imageOrange.classList.add("image");
  container.appendChild(imageOrange);

  const imageYellow = document.createElement("img");
  imageYellow.src = Yellow;
  imageYellow.classList.add("image");
  container.appendChild(imageYellow);

  const imageGreen = document.createElement("img");
  imageGreen.src = Green;
  imageGreen.classList.add("image");
  container.appendChild(imageGreen);

  const imageBlue = document.createElement("img");
  imageBlue.src = Blue;
  imageBlue.classList.add("image");
  container.appendChild(imageBlue);

  const imagePurple = document.createElement("img");
  imagePurple.src = Purple;
  imagePurple.classList.add("image");
  container.appendChild(imagePurple);
}

export { displayImages };
