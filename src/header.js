function addMenuItems(item, index, parent) {
  const linkBox = document.createElement("div");
  linkBox.classList.add(`menuItem${index}`);
  linkBox.classList.add("linkBoxItem");
  parent.appendChild(linkBox);
  const menuIcon = document.createElement("img");
  menuIcon.classList.add("menuIcon");
  menuIcon.src = `${item.icon}`;
  linkBox.appendChild(menuIcon);
  const newMenuItem = document.createElement("a");
  newMenuItem.classList.add("menuLink");
  newMenuItem.setAttribute("href", `${item.address}`);
  newMenuItem.textContent = `${item.content}`;
  linkBox.appendChild(newMenuItem);
}

export default function makeHeader(
  titleContent,
  containerClassName,
  linkArray
) {
  const container = document.querySelector(`.${containerClassName}`);
  if (
    !(
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    )
  ) {
    const titleBox = document.createElement("div");
    titleBox.classList.add("titleBox");
    container.appendChild(titleBox);
    const mainTitle = document.createElement("h1");
    mainTitle.classList.add("mainTitle");
    mainTitle.textContent = `${titleContent}`;
    titleBox.appendChild(mainTitle);
  }
  const linkBox = document.createElement("div");
  linkBox.classList.add("linkBox");
  container.appendChild(linkBox);
  linkArray.forEach((item, index) => addMenuItems(item, index, linkBox));
}
