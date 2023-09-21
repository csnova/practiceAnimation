import "./style.css";
import "./dropdown.css";
import "./header.css";
import makeDropDown from "./dropdown";
import makeHeader from "./header";

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

makeHeader("header", menuArray);

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
