const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const descriptionSlide = bannerImg.nextElementSibling;
const previousImage = document.getElementById("arrowLeft");
const nextImage = document.getElementById("arrowRight");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;

function showSlide(position) {
  if (position == slides.length) {
    position = 0;
    currentSlide = position;
  }
  if (position == -1) {
    position = slides.length - 1;
    currentSlide = position;
  } else {
    currentSlide = position;
  }
  const image = slides[currentSlide].image;
  const tagLine = slides[currentSlide].tagLine;
  bannerImg.src = `./assets/images/slideshow/${image}`;
  descriptionSlide.innerHTML = tagLine;

  updateDots();
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

previousImage.addEventListener("click", () => changeSlide(-1));
nextImage.addEventListener("click", () => changeSlide(1));

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.dataset.index = i;
    dot.onclick = function () {
      showSlide(i);
    };
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dot = dotsContainer.querySelectorAll(".dot");
  dot.forEach((dot) => dot.classList.remove("dot_selected"));

  const currentDot = dotsContainer.querySelector(
    `.dot[data-index="${currentSlide}"]`
  );
  if (currentDot) {
    currentDot.classList.add("dot_selected");
  }
}

createDots();
updateDots();
