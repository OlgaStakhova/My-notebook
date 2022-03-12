import uniqid from 'uniqid';
import templateTodoItem from '../template/todoItemTemplate.hbs';

const noteNameRef = document.querySelector('.NameNoteModal');
const noteCategoriesRef = document.querySelector('#category-select');
const noteColorRef = document.querySelector('#colorWell');
const noteFormCreateRef = document.querySelector('#create-todo-form');
let modal = document.getElementById('modal');
const noteListRef = document.querySelector('#noteList');

const todoCollection = [];

function dataCollectionHandler(event) {
    event.preventDefault();
  const todoItem = {
    id:uniqid(),
    name: noteNameRef.textContent,
    category: noteCategoriesRef.value,
    color: noteColorRef.value,
  }
console.log(todoItem);
  todoCollection.push(todoItem);
  renderTodoList();
  closeModal();
}

function renderTodoList() {
    noteListRef.innerHTML = templateTodoItem(todoCollection)
}

 function closeModal() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        document.body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};


noteFormCreateRef.addEventListener('submit', dataCollectionHandler);
