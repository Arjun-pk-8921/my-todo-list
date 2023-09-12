const c = 0;
let h = '';
const l = '<div class="todo-form-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><input class="form-control" type="text" placeholder="Item 1" readonly><button type="button" class="btn btn-warning" style="margin-left: 10px;">Edit</button><button type="button" class="btn btn-danger" style="margin-left: 10px;">Delete</button></div>'
for (let i = 0; i < c; i++) {
    h += l;
}
document.getElementById('inner-container').innerHTML = h;

function add() {
    document.getElementById('inner-container').insertAdjacentHTML('beforeend', l);
}

const todoList = document.getElementById('inner-container');
data.todos.forEach(todo => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo-form-2', 'col-xs-12', 'col-sm-12', 'col-md-12', 'col-lg-12', 'col-xl-12');
    todoElement.innerHTML = '<input class="form-control" type="text" placeholder="Item 1" value="${todo.title}" id="${todo.id}" readonly><button id= calc("edit-"+"${todo.id}") type="button" class="btn btn-warning" style="margin-left: 10px;">Edit</button><button id= calc("delete-"+"${todo.id}") type="button" class="btn btn-danger" style="margin-left: 10px;">Delete</button>'
    todoList.appendChild(todoElement);
})


