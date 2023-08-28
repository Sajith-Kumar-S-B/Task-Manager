const inputVal = document.querySelector('.inputVal');
const addTaskBtn = document.querySelector('.btn');
const clearTaskBtn = document.querySelector('.clearTask');
const todoList = document.querySelector('.todoLists');

let taskList = [];
let editingIndex = -1;

addTaskBtn.addEventListener('click', addTask);
clearTaskBtn.addEventListener('click', clearTask);

function addTask() {
    const taskName = inputVal.value.trim();
    if (taskName !== '') {
        taskList.push({ name: taskName, checked: false });
        localStorage.setItem('localItem', JSON.stringify(taskList));
        inputVal.value = '';
        showTasks();
    }
}

function showTasks() {
    const localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems) {
        taskList = localItems;
    }

    let html = '';
    taskList.forEach((task, index) => {
        html += `
            <div class="task">
                <input type="checkbox" class="task-check" ${task.checked ? 'checked' : ''} onchange="toggleTaskCheck(${index}, this)">
                <span class="taskname">${index !== editingIndex ? task.name : `<input class="edit-input" value="${task.name}" data-index="${index}" name="editTask">`}</span>
                <button class="edit" onClick="editTask(${index})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete" onClick="deleteTask(${index})"> 
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
    });

    todoList.innerHTML = html;
}


function editTask(index) {
    if (editingIndex === -1) {
        editingIndex = index;
        showTasks();
    } else {
        const inputField = document.querySelector(`.edit-input[data-index="${editingIndex}"]`);
        taskList[editingIndex].name = inputField.value; // Update the task name
        localStorage.setItem('localItem', JSON.stringify(taskList));
        editingIndex = -1; // Reset editingIndex
        showTasks();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showTasks();
}

function toggleTaskCheck(index, checkbox) {
    taskList[index].checked = checkbox.checked;
    localStorage.setItem('localItem', JSON.stringify(taskList));
}

function clearTask() {
    localStorage.removeItem('localItem');
    taskList = [];
    showTasks();
}

showTasks();



let toggle = document.querySelector('.toggle');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let searchBx = document.querySelector('.search8x');
let searchOpen = document.querySelector('.searchOpen');
let searchClose = document.querySelector('.searchClose');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow = 'hidden';
});
close.onclick = () => {
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow = '';
};
searchOpen.onclick = () => {
    searchBx.classList.add('active');
};
searchClose.onclick = () => {
    searchBx.classList.remove('active');
};
window.onclick = (e) => {
    if (e.target == right) {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    }
};



