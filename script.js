// Const init

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
const menu = document.querySelector(".icons");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".content");

// Variables init

let sectionIndex = 0;

// Banner functions

document.querySelectorAll(".controls li").forEach((indicator, ind) => {
  indicator.addEventListener("click", () => {
    sectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
});

leftArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
