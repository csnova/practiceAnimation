function myFunction(item, parent, index) {
  const newListItem = document.createElement("a");
  newListItem.classList.add(`link${index}`);
  newListItem.setAttribute("href", `${item.address}`);
  newListItem.textContent = `${item.content}`;
  parent.appendChild(newListItem);
}

export default function makeDropDown(containerClassName, listArray) {
  const container = document.querySelector(`.${containerClassName}`);
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  container.appendChild(dropdown);
  const dropBtn = document.createElement("BUTTON");
  dropBtn.classList.add("dropbtn");
  dropBtn.textContent = "Dropdown";
  dropdown.appendChild(dropBtn);
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");
  dropdown.appendChild(dropdownContent);
  listArray.forEach((item, index) => myFunction(item, dropdownContent, index));
}
