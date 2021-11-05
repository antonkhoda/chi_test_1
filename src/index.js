import "./styles/main.scss";

const hamburger = document.querySelector(".hamburger_box");
const hamburger_body = document.querySelector(".hamburger_body");
const hamburger_pic_on =
    "url(../src/img/hamburger/hamburger-on.png) no-repeat center";
const hamburger_pic_off =
    "url(../src/img/hamburger/hamburger-off.png) no-repeat center";
let check = false;

window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
        hamburger_body.style.display = "none";
        hamburger.style.background = hamburger_pic_on;
        hamburger.style.backgroundSize = "70%";
        check = false;
    } else {
        hamburger_body.style.display = "flex";
    }
});

hamburger.addEventListener("click", function () {
    check = !check;
    this.style.background = check ? hamburger_pic_off : hamburger_pic_on;
    hamburger_body.style.display = check ? "flex" : "none";
    this.style.backgroundSize = "70%";
});