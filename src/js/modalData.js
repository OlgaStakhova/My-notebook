import uniqid from 'uniqid';
import templateTodoItem from '../template/todoItemTemplate.hbs';

const noteNameRef = document.querySelector('.NameNoteModal');
const noteCategoriesRef = document.querySelector('#category-select');
const noteColorRef = document.querySelector('#colorWell');
const noteFormCreateRef = document.querySelector('#create-todo-form');
let modal = document.getElementById('modal');
const noteListRef = document.querySelector('#noteList');

let todoCollection = [];

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

function handlerItemEvent(event) {
  if(!event.target.title){
    return
  }
  let typeButton =event.target.title;
  let itemId =event.target.dataset.itemId;
   if (typeButton === 'Edit') {
    editItem(itemId);
  }
  if (typeButton === 'Delete') {
    deleteItem(itemId);
  }
}

function editItem(id) {
console.log('edit button click', id)
}

function deleteItem(id) {
  console.log('delete button click', id)
  const filteredArray = todoCollection.filter(item =>{
   return item.id!==id
  })
  todoCollection = filteredArray;
  renderTodoList()
  }


noteFormCreateRef.addEventListener('submit', dataCollectionHandler);

noteListRef.addEventListener('click', handlerItemEvent);
