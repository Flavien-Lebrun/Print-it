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
const dotsContainer = document.querySelector(".dots");
const previousImage = document.getElementById("arrowLeft");
const nextImage = document.getElementById("arrowRight");
const descriptionSlide = bannerImg.nextElementSibling;

let currentSlide = 0;

function showSlide(position) {
  currentSlide = (position + slides.length) % slides.length;
  const image = slides[currentSlide].image;
  const tagLine = slides[currentSlide].tagLine;

  bannerImg.src = `./assets/images/slideshow/${image}`;
  bannerImg.alt = tagLine;
  descriptionSlide.innerHTML = tagLine;

  updateDots();
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

function changeSlide(n) {
  showSlide(currentSlide + n);
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.dataset.index = i;
    dot.onclick = function () {
      showSlide(i);
    };
    dotsContainer.appendChild(dot);
  }
}

createDots();
updateDots();

previousImage.addEventListener("click", () => changeSlide(-1));
nextImage.addEventListener("click", () => changeSlide(1));

// document.getElementById("arrowLeft").addEventListener("click", () => {
//   console.log("Tu as tourné la slide à gauche");
// });

// document.getElementById("arrowRight").addEventListener("click", () => {
//   console.log("Tu as tourné la slide à droite");
// });

// const mousemove = document.querySelector(".mousemove");

// window.addEventListener("mousemove", (e) => {
//   mousemove.style.left = e.pageX + "px";
// mousemove.style.top = e.pageY + "px";
// });

//--------------------------------

// const keyPressContainer = document.querySelector(".keypress");
// const key = document.getElementById("key");

// const ring = () => {
//   const audio = new Audio();
//   audio.src = "./Appel-prière-2.mp3";
//   audio.play();
// };

// document.addEventListener("keypress", (e) => {
//   key.textContent = e.key;
//   ring();
// });

// const swipeLeftSlide = document.querySelector("#arrowLeft");

// swipeLeftSlide.addEventListener("click", () => {
//   swipeLeftSlide.style.background = "red";
// });

// console.log(slides);

// let chaine = "Je suis une chaine de caractères";

// let nouvelleChaine = `Chaine précédente : ${chaine}`;

// console.log(nouvelleChaine);

// let string = "Je suis une chaine de caractères";
// let number = 24;
// let boolean = false;
// // Crochets = tableau
// let array = ["Je", "suis", 47, true];

// // Accolades = objet
// let object = {
//   prenom: "audrey",
//   age: 33,
//   ville: "bordeaux",
// };

// let arbre;

// // Les opérateurs
// console.log(4 ** 5);

// // Opérateurs d'affectations
// let total = 0;
// total = total + 1;
// total++;
// total += 5;

// console.log(total);

// // Structures de controle
// let x = 5;
// let y = 6;

// // if (x > y) {
// //   alert("YES x plus gros que y");
// // } else if (y > x) {
// //   alert("Y est plus grand que X");
// // } else {
// //   alert("Ils sont égaux");
// // }

// // Fonction classique
// function faireQuelqueChose() {
//   console.log("Je fais un truc");
//   console.log(5 + 6);
//   alert("Calcul terminé !");
// }
// // Appel de la fonction
// // faireQuelqueChose();

// // Fonction fléchée
// const addition = (a, b) => {
//   console.log(a + b);
// };

// addition(4, 3);
// addition(25554, 325525);
