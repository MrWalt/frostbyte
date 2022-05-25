"use strict";

// Selectors
const catalogueButton = document.querySelector(".catalogue--btn");
const userReviewsButton = document.querySelector(".reviews--btn");
const tabsContainer = document.querySelector(".main--tab");
const tabs = document.querySelectorAll(".operation--tab");
const tabContent = document.querySelectorAll(".operation--paragraph");
const dropDown = document.querySelector(".dropdown--menu");
const imgDrop = document.querySelector(".dropdown--indicator");
const scrollCata = document.querySelector(".catalogue--scroll-btn");
const aboutUsButton = document.querySelector(".about--us-btn");
const contactUsButton = document.querySelector(".contact--us-btn");

// Observers
const dropObserver = new IntersectionObserver(closeDrop, {
  root: null,
  threshold: 0.1,
  rootMargin: "250px",
});

dropObserver.observe(document.querySelector("header"));

const reviewObserver = new IntersectionObserver(hideReviews, {
  root: null,
  threshold: 0.1,
  rootMargin: "100px",
});

reviewObserver.observe(document.getElementById("section--reviews"));

// About us Section
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operation--tab");
  if (!clicked) return;

  // Displaying Active Tab
  tabs.forEach(function (el) {
    el.classList.remove("top-0");
    el.classList.add("top-50");
    el.classList.add("hover-style--2");
  });
  clicked.classList.remove("hover-style--2");
  clicked.classList.remove("top-50");
  clicked.classList.add("top-0");

  // Displaying active text
  tabContent.forEach(function (el) {
    el.classList.add("d-none");
  });
  document
    .querySelector(`.operation--display-${clicked.dataset.tab}`)
    .classList.remove("d-none");
});

// Dropdown menu
catalogueButton.addEventListener("click", function () {
  dropDown.classList.toggle("d-none");
  if (imgDrop.classList.contains("inactive")) {
    imgDrop.classList.remove("inactive");
    imgDrop.setAttribute(
      "src",
      "/node_modules/bootstrap-icons/icons/arrow-up-square-fill.svg"
    );
    return;
  }
  closeDropDown();
});

function closeDropDown() {
  imgDrop.setAttribute(
    "src",
    "/node_modules/bootstrap-icons/icons/arrow-down-square.svg"
  );
  imgDrop.classList.add("inactive");
}

// Closing dropdown on scroll
function closeDrop(ent) {
  const [entry] = ent;
  if (!entry.isIntersecting) {
    dropDown.classList.add("d-none");
    if (!imgDrop.classList.contains("inactive")) closeDropDown();
  }
}

// Hiding reviews out of view
function hideReviews(ent) {
  const [entry] = ent;
  if (!entry.isIntersecting) {
    document.querySelector(".user--reviews").classList.add("d-none");
  }
}

// Displaying Reviews
userReviewsButton.addEventListener("click", function () {
  document.querySelector(".user--reviews").classList.remove("d-none");

  // Smooth Scrolling to Reviews
  viewScroll("#section--reviews");
});

// Scrolling to catalogue
scrollCata.addEventListener("click", function () {
  dropDown.classList.toggle("d-none");
  if (imgDrop.classList.contains("inactive")) {
    imgDrop.classList.remove("inactive");
    imgDrop.setAttribute(
      "src",
      "/node_modules/bootstrap-icons/icons/arrow-up-square-fill.svg"
    );
  }
  viewScroll("#section--nav");
});

// Smooth Scrolling
aboutUsButton.addEventListener("click", function () {
  viewScroll("#section--about");
});

contactUsButton.addEventListener("click", function () {
  viewScroll("#section--contact");
});

function viewScroll(section) {
  document.querySelector(section).scrollIntoView({
    behavior: "smooth",
  });
}
