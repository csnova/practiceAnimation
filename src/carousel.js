let slideIndex = 1;
let timer = null;

function showSlides(n) {
  let i;
  let inputSlide = n;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (inputSlide === undefined) {
    inputSlide = ++slideIndex;
  }
  if (inputSlide > slides.length) {
    slideIndex = 1;
  }
  if (inputSlide < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides((slideIndex = n));
}

function createSlides(item, index, arrayLength, parent) {
  const currentImage = index + 1;
  const slideFade = document.createElement("div");
  slideFade.classList.add("mySlides");
  slideFade.classList.add("fade");
  parent.appendChild(slideFade);
  const position = document.createElement("div");
  position.classList.add("numbertext");
  position.textContent = `${currentImage} / ${arrayLength}`;
  slideFade.appendChild(position);
  const image = document.createElement("img");
  image.classList.add("image");
  image.src = `${item.image}`;
  slideFade.appendChild(image);
  const captionBox = document.createElement("div");
  captionBox.classList.add("captionBox");
  slideFade.appendChild(captionBox);
  const caption = document.createElement("div");
  caption.classList.add("text");
  caption.textContent = `${item.caption}`;
  captionBox.appendChild(caption);
}

function createDots(parent, index) {
  const currentImage = index + 1;
  const dot = document.createElement("SPAN");
  dot.classList.add("dot");
  dot.onclick = function () {
    currentSlide(`${currentImage}`);
  };
  parent.appendChild(dot);
}

export default function imageCarousel(containerClassName, imageArray) {
  const slideShowContainer = document.querySelector(`.${containerClassName}`);
  const arrayLength = imageArray.length;
  imageArray.forEach((item, index) =>
    createSlides(item, index, arrayLength, slideShowContainer)
  );
  const prevBox = document.createElement("div");
  prevBox.classList.add("prevBox");
  slideShowContainer.appendChild(prevBox);
  const previousButton = document.createElement("a");
  previousButton.classList.add("prev");
  previousButton.setAttribute("id", "prevButton");
  previousButton.textContent = "\u{2770}";
  previousButton.onclick = function () {
    plusSlides(-1);
  };
  slideShowContainer.appendChild(previousButton);
  const nextBox = document.createElement("div");
  nextBox.classList.add("nextBox");
  slideShowContainer.appendChild(nextBox);
  const nextButton = document.createElement("a");
  nextButton.classList.add("next");
  nextButton.setAttribute("id", "nextButton");
  nextButton.textContent = "\u{276F}";
  nextButton.onclick = function () {
    plusSlides(1);
  };
  slideShowContainer.appendChild(nextButton);
  const lineBreak = document.createElement("BR");
  slideShowContainer.appendChild(lineBreak);

  const dotBox = document.createElement("div");
  dotBox.classList.add("dotBox");
  dotBox.setAttribute("id", "dotBox");
  document.getElementById("mainContainer").appendChild(dotBox);

  imageArray.forEach((item, index) => createDots(dotBox, index));
  showSlides(slideIndex);
}
