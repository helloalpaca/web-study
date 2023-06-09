/* 0418 Object
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player.name);
*/

/* 0419 querySelector
const title = document.querySelector(".hello h1");
console.log(title.innerHTML);
title.innerHTML = "BYE";
console.log(title.innerHTML);
*/

/*
// events 
const h1 = document.querySelector(".hello h1");

function handleH1Click() {
    //h1.style.color = "blue";
    const clickedClass = "clicked";

    // 1. className version.
    // if (h1.className === clickedClass) {
    //     h1.className = "";
    // } else {
    //     h1.className = clickedClass;
    // }

    // 2. classList version
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    // 3. classList.toggle version.
    h1.classList.toggle(clickedClass);
}

function handleH1MouseEnter() {
    h1.innerHTML = "mouse is here";
}

function handleH1MouseLeave() {
    h1.innerHTML = "mouse is gone!";
}

h1.addEventListener("click", handleH1Click); // == title.onClick = handleTitleClick
h1.addEventListener("mouseenter", handleH1MouseEnter); // mobile 버전에서는 동작 X
h1.addEventListener("mouseleave", handleH1MouseLeave); // mobile 버전에서는 동작 X

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copied!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem("username", username);
}