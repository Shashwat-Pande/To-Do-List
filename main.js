//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//FUNCTIONS
function addTodo(event){
    //prevent from submitting a form
    event.preventDefault();
    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CLEAR TODO INPUT VALUE
    todoInput.value = "";
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if (item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    //COMPLETED TODO
    if (item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}