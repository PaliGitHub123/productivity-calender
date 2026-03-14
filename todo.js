//todolist: todolists in one db; max 8; deleteable
//todos: crud logic, date

const addTodoListButton = document.getElementById("add-todo-list");
const mainPage = document.getElementById("main-page");


//todolist elements
const mainDiv = document.createElement("div");
mainDiv.id = "main-todo-div";

const todoList = document.createElement("ul");
todoList.id = "todolist";

const topDiv = document.createElement("div");
topDiv.id = "top-todo-div";

const deletListButton = document.createElement("button");
deletListButton.id = "delete-todolist";
deletListButton.innerHTML = "X";

const input = document.createElement("input");
input.placeholder = "Input todo"
input.id = "input-todolist";

const submitButton = document.createElement("button");
submitButton.id = "submit-todolist";
submitButton.innerHTML = "+"

const todo = document.createElement("li");

addTodoListButton.addEventListener("click", function(){
    mainPage.appendChild(mainDiv);

    mainDiv.appendChild(todoList);
    mainDiv.appendChild(topDiv);

    topDiv.appendChild(deletListButton);
    topDiv.appendChild(input);
    topDiv.appendChild(submitButton);
});