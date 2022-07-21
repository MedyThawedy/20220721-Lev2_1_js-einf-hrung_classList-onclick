
let todo;
const olTodoList = document.getElementById('olTodoList');
let divTodoInput = document.getElementById('todoInput');


function fn_new_entries() {

    todos = divTodoInput.value;
    olTodoList.innerHTML = olTodoList.innerHTML + `<li class="listItem">${todos}</li>`;

}

function fn_add_style() {
    const list = document.getElementById("olTodoList").classList;
    list.add("clsOlTodoList");
}


function changeHeadline() {
    const list = document.getElementById("idHeadline").classList;
    list.add("clsHeadline");
    const list2 = document.getElementById("idHeadline2").classList;
    list2.add("clsHeadline");
}

function resetHeadline() {
    document.getElementById("idHeadline").classList.remove("clsHeadline");
    document.getElementById("idHeadline2").classList.remove("clsHeadline");
}