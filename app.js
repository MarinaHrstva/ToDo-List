// Elements
const okBtnElement = document.getElementById('okBtn');
const nameElement = document.getElementById('nameInput');
const nameDivElement = document.querySelector('.name');
const addTaskElement = document.querySelector('.addTask');
const addTaskInputElement = document.querySelector('.addTask input')

const addTaskBtnElement = document.querySelector('#addTaskBtn');

const spanNameElement = document.getElementById('nameSpan');
const listElement = document.querySelector('.list ul');

let name = ''

// Events

// okBtnElement.addEventListener('click', (e) => {
//     name = nameElement.value;
//     nameElement.value = '';
//     spanNameElement.textContent = name;
//     nameDivElement.style.display = 'none';
//     addTaskElement.classList.remove('hidden');
//     listElement.classList.remove('hidden');
// })

addTaskBtnElement.addEventListener('click', (e) => {
    const task = addTaskInputElement.value;
    const liElement = createTaskLi(task);
    listElement.appendChild(liElement);
})


function createTaskLi(task) {
    const li = document.createElement('li');
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.classList.add('done');
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    doneBtn.classList.add('delete');


    li.textContent = task;
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    return li;
}