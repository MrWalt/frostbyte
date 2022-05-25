"use strict";

// Selectors
const featuredButton = document.querySelector(".featured--btn__div");
const leftButton = document.querySelector(".left--btn");
const rightButton = document.querySelector(".right--btn");
const sliderImgs = document.querySelectorAll(".slider--img");
const imgNames = document.querySelectorAll(".img--name");
const contactButton = document.querySelector(".contact--us-btn");
const hideLater = document.querySelectorAll(".hide--later");
const viewButtons = document.querySelectorAll(".view--btn__div");
const moreInfo = document.querySelector(".more--info");
const buyText = document.querySelector(".buy--text");
const buyButton = document.querySelector(".buy--btn");
let currentImg;
let preview;

// Observers
const featuredObserver = new IntersectionObserver(hideFeatured, {
  root: null,
  threshold: 0.1,
  rootMargin: "50px",
});

featuredObserver.observe(document.querySelector(".featured--slider"));

// Featured Builds feature
// Show featured
featuredButton.addEventListener("click", function (e) {
  const clicked = e.target.closest(".featured--btn");
  if (!clicked) return;
  document.querySelector(".featured--slider").classList.remove("d-none");
  viewScroll("#featured");
});

// Close featured
function hideFeatured(ent) {
  const [entry] = ent;
  if (!entry.isIntersecting)
    document.querySelector(".featured--slider").classList.add("d-none");
}

// Slider feature
// Scroll Left
currentImg = 1;
leftButton.addEventListener("click", function () {
  if (currentImg === 1) {
    currentImg = sliderImgs.length;
    turn(currentImg);
    return;
  }
  --currentImg;
  turn(currentImg);
});

// Scroll Right
rightButton.addEventListener("click", function () {
  if (currentImg === sliderImgs.length) {
    currentImg = 1;
    turn(currentImg);
    return;
  }
  ++currentImg;
  turn(currentImg);
});

function turn(curImg) {
  imgNames.forEach((el) => el.classList.add("d-none"));
  sliderImgs.forEach((el) => el.classList.add("d-none"));
  document.querySelector(`.img--name-${curImg}`).classList.remove("d-none");
  document.querySelector(`.img--${curImg}`).classList.remove("d-none");
}

// Smooth Scroll

contactButton.addEventListener("click", function () {
  viewScroll("#section--contact");
});

function viewScroll(section) {
  document.querySelector(section).scrollIntoView({
    behavior: "smooth",
  });
}

// Adding view button functionality
viewButtons.forEach((el) => {
  el.addEventListener("click", function (e) {
    const clicked = e.target.closest(".view--btn");
    console.log(clicked.dataset);
    if (!clicked) return;
    hideLater.forEach((el) => el.classList.add("d-none"));
    moreInfo.classList.remove("d-none");
    preview = +clicked.dataset.view;
    updateView(computers[`${preview}`]);
    viewScroll("#more--info");
  });
});

// viewButtons.addEventListener("click", function () {
//   console.log(`Hello`);
// });

// Close button
document.querySelector(".close--btn").addEventListener("click", function () {
  moreInfo.classList.add("d-none");
  hideLater.forEach((el) => el.classList.remove("d-none"));
  buyText.textContent = "Buy";
  buyButton.classList.add("hover-cursor");
  buyButton.addEventListener("click", buyButtonFunc);
  clearTimeout(startProcess);
});

// Making view button dynamic

// Updaing preview
function updateView(computer) {
  document.querySelector(".computer--cpu").textContent = computer.cpu;
  document.querySelector(".computer--gpu").textContent = computer.gpu;
  document.querySelector(".computer--ram").textContent = computer.ram;
  document.querySelector(".computer--psu").textContent = computer.psu;
  document.querySelector(".computer--storage").textContent = computer.storage;
  document.querySelector(".computer--price").textContent = computer.price;
  document
    .querySelector(".computer--img")
    .setAttribute("src", `img/prebuild-${++preview}.png`);
}

// Buy button
buyButton.addEventListener("click", buyButtonFunc);

let startProcess;

function buyButtonFunc(e) {
  const clicked = e.target.closest(".buy--btn");
  buyButton.classList.remove("hover-cursor");
  if (!clicked) return;
  buyText.textContent = "Processing";
  startProcess = setTimeout(function () {
    buyText.textContent = "Out of Stock";
  }, 3000);
  buyButton.removeEventListener("click", buyButtonFunc);
}
