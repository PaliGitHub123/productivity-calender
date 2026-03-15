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
submitButton.innerHTML = "+";

mainDiv.appendChild(todoList);
mainDiv.appendChild(topDiv);

topDiv.appendChild(deletListButton);
topDiv.appendChild(input);
topDiv.appendChild(submitButton);
//todolist elements end

const todo = document.createElement("li");

const deleteTodoButton = document.createElement("button");
deleteTodoButton.innerHTML = "X";

function addTodoList (){
    mainPage.appendChild(mainDiv.cloneNode(true));
}

function addTodo (){
    if(input.value == ""){
        console.log(input.value);
    }else{
        todo.innerHTML = input.value;
        todoList.appendChild(todo);
        todo.appendChild(deleteTodoButton.cloneNode());
    }
    input.value = "";
}
    

mainPage.addEventListener("click", function(e){
    if(e.target === addTodoListButton){
        addTodoList();
    }

    if(e.target.id === "submit-todolist"){
        addTodo();
    }
});
