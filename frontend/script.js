// Initialialize mockDB 

function initDB() {
    if (!localStorage.mockDB) {
        localStorage.mockDB = JSON.stringify({
            todos: [{ id: 1, title: "task 1" }, { id: 2, title: "task 2" },]
        });
    }
}

// Create Data
function addData(newTitle) {
    const data = getData();
    let largestId = -1;
    data.todos.forEach((todo) => {
        if (todo.id > largestId) {
            largestId = todo.id;
        }
    })
    console.log(largestId);
    var newId = largestId + 1;
    const newData = { id: newId, title: newTitle };
    data.todos.push(newData);
    updateData(data);
}

// Read Data
function getData() {
    return JSON.parse(localStorage.mockDB);
}

// Update Data
function updateData(data) {
    localStorage.mockDB = JSON.stringify(data);
}

// Delete Data
function deleteData(todoId) {
    const data = getData();
    console.log(todoId);
    const index = data.todos.findIndex((todo) => todo.id == todoId);
    console.log(index);
    if (index !== -1) {
        data.todos.splice(index, 1);
        updateData(data);
        console.log("hu")
        location.reload();
    }
}
// Edit Data
function editData(todoId, newTitle) {
    const data = getData();
    console.log(todoId);
    const index = data.todos.findIndex((todo) => todo.id == todoId);
    console.log(index);
    if (index !== -1) {
        data.todos[index].title = newTitle;
        updateData(data);
        location.reload();
    }
}

initDB();
const data = getData();
console.log(data.todos);

// html scripting
const todoList = document.getElementById('inner-container');
data.todos.forEach(todo => {
    const todoElement = document.createElement('div');
    todoElement.id = "div-" + todo.id;
    console.log(todoElement.id);
    todoElement.classList.add('todo-form-2', 'col-xs-12', 'col-sm-12', 'col-md-12', 'col-lg-12', 'col-xl-12');
    todoElement.innerHTML = `<input class="form-control" type="text" placeholder="Item 1" value="${todo.title}" id="${todo.id}" readonly><button id=${todo.id} type="button" class="btn btn-warning" style="margin-left: 10px;" onclick="editTodo(event)">Edit</button><button id=${todo.id} type="button" class="btn btn-danger" style="margin-left: 10px;" onclick="deleteTodo(event)">Delete</button>`
    todoList.appendChild(todoElement);
})


function addTodo() {
    var newTitle = document.getElementById('inputField').value;
    addData(newTitle);
    location.reload();
}
// Event listeners

function deleteTodo(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    const todoId = event.target.id;
    console.log(todoId);
    if (window.confirm("Are you sure?")) {
        deleteData(todoId);
    }
    else {
        location.reload();
    }

}

function editTodo(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    const todoId = event.target.id;
    const todoValue = document.getElementById(todoId).value;
    console.log(todoValue);
    console.log(todoId);
    const newElement = document.createElement('div');
    newElement.classList.add('todo-form-2', 'col-xs-12', 'col-sm-12', 'col-md-12', 'col-lg-12', 'col-xl-12');
    newElement.innerHTML = `<input class="form-control" type="text" placeholder="Item 1" value="${todoValue}" id="${todoId}"><button id=${todoId} type="button" class="btn btn-warning" style="margin-left: 10px;" onclick="location.reload();">Undo</button><button id=${todoId} type="button" class="btn btn-success" style="margin-left: 10px;" onclick="saveTodo(event)">Save</button>`
    oldElement = document.getElementById("div-" + todoId);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

function saveTodo(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    const todoId = event.target.id;
    var newTitle = document.getElementById(todoId).value;
    editData(todoId, newTitle);
}