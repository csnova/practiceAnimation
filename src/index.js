import "./style.css";
import "./dropdown.css";
import "./header.css";
import "./carousel.css";
import makeDropDown from "./dropdown";
import makeHeader from "./header";
import imageCarousel from "./carousel";

// No More than 4 Items
const menuArray = [
  {
    content: "Chat",
    address: "#",
    icon: "../src/images/icons/chat.png",
  },
  {
    content: "Gallery",
    address: "#",
    icon: "../src/images/icons/gallery.png",
  },
  {
    content: "Menu",
    address: "#",
    icon: "../src/images/icons/menu.png",
  },
];

const header = document.createElement("div");
header.classList.add("header");
document.getElementById("mainContainer").appendChild(header);

makeHeader("The Title", "header", menuArray);

const listArray = [
  {
    content: "Link One",
    address: "#",
  },
  {
    content: "Link Two",
    address: "#",
  },
  {
    content: "Link Three",
    address: "#",
  },
];

const dropdownBar = document.createElement("div");
dropdownBar.classList.add("dropdownBar");
document.getElementById("mainContainer").appendChild(dropdownBar);

makeDropDown("dropdownBar", listArray);

const imageArray = [
  {
    caption: "Red Image",
    image: "../src/images/red.jpg",
  },
  {
    caption: "Orange Image",
    image: "../src/images/orange.jpg",
  },
  {
    caption: "Yellow Image",
    image: "../src/images/yellow.jpg",
  },
  {
    caption: "Green Image",
    image: "../src/images/green.jpg",
  },
  {
    caption: "Blue Image",
    image: "../src/images/blue.jpg",
  },
  {
    caption: "Purple Image",
    image: "../src/images/purple.jpg",
  },
];

const slideShowContainer = document.createElement("div");
slideShowContainer.classList.add("slideshow-container");
slideShowContainer.setAttribute("id", "slideshowContainer");
document.getElementById("mainContainer").appendChild(slideShowContainer);

imageCarousel("slideshow-container", imageArray);
