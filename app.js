// Elements
const okBtnElement = document.getElementById('okBtn');
const nameElement = document.getElementById('nameInput');
const nameDivElement = document.querySelector('.name');
const addTaskElement = document.querySelector('.addTask');
const listElement = document.querySelector('.list');
const spanNameElement = document.getElementById('nameSpan');
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