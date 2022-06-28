// Elements
const okBtnElement = document.getElementById('okBtn');
const nameElement = document.getElementById('nameInput');
const nameDivElement = document.querySelector('.name');
const addTaskElement = document.querySelector('.addTask');
const addTaskInputElement=document.querySelector('.addTask input')
console.log(addTaskInputElement);
const addTaskBtnElement=document.querySelector('#addTaskBtn');

const spanNameElement = document.getElementById('nameSpan');
const listElement = document.querySelector('.list');

let name = ''

// Events

okBtnElement.addEventListener('click', (e) => {
    name = nameElement.value;
    nameElement.value = '';
    spanNameElement.textContent = name;
    nameDivElement.style.display = 'none';
    addTaskElement.classList.remove('hidden');
    listElement.classList.remove('hidden');
})