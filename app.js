//* selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");
//* event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletCheck);
// filterOption.addEventListener("click", filterTodo);

//* functions
function addTodo(event) {
    //prevent default
    event.preventDefault();
    // Div todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Checked mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Checked trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.append(todoDiv);

    //clear input

    todoInput.value = ""; //my idea of this problem
}

function deletCheck(e) {
    const item = e.target;

    //delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        // todo.remove();
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    //complete todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     console.log(todos);
// }
