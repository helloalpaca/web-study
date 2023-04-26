const clockTitle = document.querySelector(".js-clock");

function showTimeUntilChristmas() {
    const date = new Date();
    const christmas = (date.getMonth() == 12 && date.getDate() > 25) ? new Date(date.getFullYear() + 1, 11, 25, 0, 0, 0) : new Date(date.getFullYear(), 11, 25, 0, 0, 0);

    const diff = christmas.getTime() - date.getTime();
    const day = parseInt(diff / (1000 * 60 * 60 * 24));
    const hour = parseInt((diff / (1000 * 60 * 60)) % 24);
    const minute = parseInt((diff / (1000 * 60)) % 60);
    const second = parseInt((diff / (1000)) % 60);

    clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

showTimeUntilChristmas();
setInterval(showTimeUntilChristmas, 1000);
