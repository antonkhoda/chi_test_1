import "./styles/main.scss";

const hamburger = document.querySelector(".hamburger_box");
const hamburger_body = document.querySelector(".hamburger_body");
let check = false;

window.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    hamburger_body.style.display = "none";
    hamburger.classList.remove("hamburger_box_active");
    check = false;
  } else {
    hamburger_body.style.display = "flex";
  }
});

hamburger.addEventListener("click", function () {
  check = !check;
  check
    ? hamburger.classList.add("hamburger_box_active")
    : hamburger.classList.remove("hamburger_box_active");
  hamburger_body.style.display = check ? "flex" : "none";
});
