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
    greeting.classList.add("greeting");
    greeting.innerText = `Welcome, ${username}`;
}

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem("username", username);
}