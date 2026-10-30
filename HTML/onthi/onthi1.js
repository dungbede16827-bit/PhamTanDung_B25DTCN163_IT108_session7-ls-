// let todos = [
//     { id: 1, todoName: "Đi học", deadLine: "2026-03-25", status: "To do" },
//     { id: 2, todoName: "Chơi", deadLine: "2026-03-25", status: "Pending" },
//     { id: 3, todoName: "Làm bài tập", deadLine: "2026-03-25", status: "Done" },
// ]

// localStorage.setItem("todos", JSON.stringify(todos));
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editId = null;

let btn = document.getElementById("formBtn");

function renderTodo(todos) {

    let todoListElement = document.getElementById("todoList");

    todoListElement.innerHTML = "";

    todos.forEach(e => { 
        todoListElement.innerHTML += `<tr>
                <td>${e.id}</td>
                <td>${e.todoName}</td>
                <td>${e.deadLine}</td>
                <td>${e.status}</td>
                 <td><button onclick = "updateTodo(${e.id})">Sửa</button> 
                 <button onclick = "deleteTodo(${e.id})">Xóa</button></td>
        </tr>
        `
        
    });

}

function addTodo(e) {
    e.preventDefault();
    let todoInput = document.getElementById("todoInput").value;
    let todoDeadline = document.getElementById("todoDeadline").value;
    let todoStatus = document.getElementById("todoStatus").value;
    if(editId) {
       let idIndex = todos.findIndex(e => e.id === editId);

       todos[idIndex].todoName = todoInput;
        todos[idIndex].deadLine = todoDeadline;
        todos[idIndex].status = todoStatus;

    editId = null;
        btn.innerText = "Thêm công việc";
    

    }else {
        let newTodo = {
        id: todos.length !== 0 ? todos[todos.length-1].id + 1 : 1,
        todoName: todoInput,
        deadLine: todoDeadline,
        status: todoStatus
    }
    todos.push(newTodo);
    
    }
    localStorage.setItem("todos",JSON.stringify(todos));
    renderTodo(todos);
    

    document.getElementById("todoInput").value = "";
    document.getElementById("todoDeadline").value = "";
    document.getElementById("todoStatus").value = "";
}

function deleteTodo(id) {
    let check = confirm("Bạn có chắc chắn muốn xóa ");
    if(check) {
    todos = todos.filter(e => e.id !== id);
    localStorage.setItem("todos",JSON.stringify(todos));
    renderTodo(todos);
    }
     

}

function findTodoByName() {
    let searchTodo = document.getElementById("findTodo");
    let searchTodoValue = searchTodo.value.toLowerCase();
    let cac = todos.filter(e =>  e.todoName.toLowerCase().includes(searchTodoValue));
    renderTodo(cac);
}
function updateTodo(id) {
 let todo = todos.find(e => e.id === id);
todoInput.value = todo.todoName
todoDeadline.value = todo.deadLine
todoStatus.value = todo.status
editId = id;

btn.innerText = "Cập Nhật";

}


renderTodo(todos)