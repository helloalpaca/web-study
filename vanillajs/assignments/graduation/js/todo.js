const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos() {
    // 1. JSON.stringify()
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    button.innerText = "X";

    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);


// 2. ["a","b","c"].forEach(function) : 각각에 대해서 실행
// 3. ["a","b","c"].filter: 지우고 싶은 아이템을 빼고 새로 list 생성
// 4. String(~)
// 5. parseInt(~)
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}