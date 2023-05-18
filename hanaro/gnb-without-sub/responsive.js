const ham = document.querySelector("#ham");
const menu = document.querySelector("header nav ul");

function onClickButtonHam() {
    menu.classList.toggle("active");
}

ham.addEventListener("click", onClickButtonHam);