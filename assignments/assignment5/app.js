const body = document.body;

function windowResize() {
    changeBodyColor(window.innerWidth);
}

function changeBodyColor(w) {
    removeAllClasses();
    if (w > 1024) {
        body.classList.add("w-1024");
    } else if (w > 760) {
        body.classList.add("w-760");
    } else {
        body.classList.add("w-480");
    }
}

function removeAllClasses() {
    body.classList.remove("w-1024");
    body.classList.remove("w-760");
    body.classList.remove("w-480");
}

changeBodyColor(window.innerWidth); //처음 실행
window.addEventListener("resize", windowResize);