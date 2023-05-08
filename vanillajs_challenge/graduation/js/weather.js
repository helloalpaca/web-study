const API_KEY = "6426e356d0194ee19904be09402c8d50";

const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log("data: ", data);

        weather.innerText = data.weather[0].main;
        city.innerText = data.name;

        console.log(data.weather[0].main);
        console.log(data.name);
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
