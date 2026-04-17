//todolist: todolists in one db; max 8; deleteable
//todos: crud logic, date
// TODO: xss prevention + safety
// TODO: add dates to todos
// TODO: implement indexedDB saving etc

const peer = new Peer();

const addTodoListButton = document.getElementById("add-todo-list");
const mainPage = document.getElementById("main-page");
const todoListNameInput = document.getElementById("todo-list-name-input");
const p2p = document.getElementById("p2p");

//todolist elements
const mainDiv = document.createElement("div");

const todoList = document.createElement("ul");

const topDiv = document.createElement("div");

const todoListName = document.createElement("p");

mainDiv.classList.add("main-todo-div");
todoList.classList.add("todolist");
topDiv.classList.add("top-todo-div");
todoListName.classList.add("todo-list-name");
p2p.classList.add("p2p");

const deletListButton = document.createElement("button");
deletListButton.classList.add("delete-todolist");
deletListButton.textContent = "X";

const input = document.createElement("input");
input.placeholder = "Input todo"
input.classList.add("input-todolist");

const submitButton = document.createElement("button");
submitButton.classList.add("submit-todolist");
submitButton.innerHTML = "+";

mainDiv.appendChild(todoListName);
mainDiv.appendChild(todoList);
mainDiv.appendChild(topDiv);

topDiv.appendChild(deletListButton);
topDiv.appendChild(input);
topDiv.appendChild(submitButton);
//todolist elements end

//todo elements
const deleteTodoButton = document.createElement("button");
deleteTodoButton.classList.add("delete-todo");
deleteTodoButton.textContent = "X";
//todo elements end

let todoListCounter = 0;

function addTodoList (){
    if(todoListNameInput.value == ""){
        return;
    }
    todoListName.textContent = todoListNameInput.value;
    mainPage.appendChild(mainDiv.cloneNode(true));
}

function deleteTodoList (deletButton){
    mainPage.removeChild(deletButton.closest(".main-todo-div"));
}

mainPage.addEventListener("click", function(e){
    if(e.target === addTodoListButton){
        if(todoListCounter == 8){
            return;
        }
        addTodoList();
        todoListCounter++;
    }

    if(e.target.classList.contains("delete-todolist")){
        deleteTodoList(e.target);
        todoListCounter--;
    }

    if(e.target.classList.contains("submit-todolist")){
        const parentDiv = e.target.closest(".top-todo-div");
        const currentInput = parentDiv.querySelector(".input-todolist");
        addTodo(currentInput);
    }

    if(e.target.classList.contains("delete-todo")){
        deleteTodo(e.target);
    }

    if(e.target.classList.contains("p2p")){
        displayPeerId(peer.id)
    }
});

function addTodo(input) {
    if(input.value === "") {
        console.log("Leer!");
    } else {
        const newTodo = document.createElement("li");
        newTodo.textContent = input.value;
        newTodo.classList.add("todo");
        const deleteBtn = deleteTodoButton.cloneNode(true);
        newTodo.appendChild(deleteBtn);
        input.closest(".main-todo-div").querySelector(".todolist").appendChild(newTodo);
        input.value = "";
    }
}

function deleteTodo(deleteButton){
    const todo = deleteButton.closest(".todo");
    deleteButton.closest(".todolist").removeChild(todo);
}

function displayPeerId(id){
    if(id){
        alert("My peer ID is: " + id);
    }else{
        alert("id not ready yet!");
    }
}