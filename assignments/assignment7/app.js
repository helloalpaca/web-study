const form = document.querySelector("#random-form")
const randomNum = document.querySelector("#random-input");
const userInput = document.querySelector("#user-input");
const choice = document.querySelector("#choice");
const result = document.querySelector("#result");

function onClickPlay(event) {
    event.preventDefault();

    if (randomNum.value == "" || userInput.value == "") {
        alert("값을 입력해주세요.");
        return 0;
    }

    const random = parseInt(randomNum.value);
    const userInp = parseInt(userInput.value);

    if (random < 0 || userInp < 0) {
        alert("랜덤 숫자와 유저 선택 숫자는 음수일 수 없습니다.");
        return 0;
    }

    if (userInp > random) {
        alert("유저 선택 숫자는 랜덤 숫자보다 클 수 없습니다.");
        return 0;
    }

    const machineChoice = Math.ceil(Math.random() * random);
    choice.innerText = `You chose: ${userInp}, the machine chose: ${machineChoice}`;

    if (machineChoice == userInp) {
        result.innerText = "You win!"
    } else {
        result.innerText = "You lose!";
    }
}

form.addEventListener("submit", onClickPlay);