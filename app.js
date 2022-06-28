// Elements
const okBtnElement = document.getElementById('okBtn');
const nameElement = document.getElementById('nameInput');
const nameDivElement = document.querySelector('.name');
const addTaskElement = document.querySelector('.addTask');
const addTaskInputElement = document.querySelector('.addTask input')

const addTaskBtnElement = document.querySelector('#addTaskBtn');

const container = document.querySelector('.container')
const spanNameElement = document.getElementById('nameSpan');
const listElement = document.querySelector('.list ul');

let name = ''

// Events

okBtnElement.addEventListener('click', start)

addTaskBtnElement.addEventListener('click', (e) => {
    const task = addTaskInputElement.value;

    if (!task) {
        return;
    }

    const liElement = createTaskLi(task);
    listElement.appendChild(liElement);
    addTaskInputElement.value = '';
})

listElement.addEventListener('click', doneDelete)







// Functions

function start(e) {
    name = nameElement.value;
    nameElement.value = '';
    spanNameElement.textContent = name;
    nameDivElement.style.display = 'none';
    addTaskElement.classList.remove('hidden');
    listElement.classList.remove('hidden');
    container.style.display = 'flex'
}


function doneDelete(e) {
    const button = e.target
    const toDoLi = button.parentNode.parentNode;

    if (button.textContent == 'Delete') {
            toDoLi.classList.toggle('deleted');
            toDoLi.addEventListener('transitionend',()=>{
                toDoLi.remove()
            })
    } else if (e.target.textContent == 'Done') {
        toDoLi.classList.toggle('done');
    }
}

function createTaskLi(task) {
    const li = document.createElement('li');

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btnsContainer');
    btnsContainer.appendChild(doneBtn);
    btnsContainer.appendChild(deleteBtn);

    li.textContent = task;
    li.appendChild(btnsContainer);
    return li;
}

