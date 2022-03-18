import uniqid from 'uniqid';
import templateTodoItem from '../template/todoItemTemplate.hbs';

const noteNameRef = document.querySelector('.NameNoteModal');
const noteCategoriesRef = document.querySelector('#category-select');
const noteColorRef = document.querySelector('#colorWell');
const noteCategoriesEditRef = document.querySelector('.category-select-edit');
const noteColorEditRef = document.querySelector('.colorWellEdit');
const noteFormCreateRef = document.querySelector('#create-todo-form');
let modal = document.getElementById('modal');
let modalEdit = document.getElementById('modalEdit');
const noteListRef = document.querySelector('#noteList');
let modalEditInput = document.querySelector('.modal-title-edit');
const editTodoFormRef = document.querySelector('#edit-todo-form');

let todoCollection = JSON.parse(localStorage.getItem('save-data')) || [];

if (todoCollection.length) {
  renderTodoList();
}

let editItemId = null;

function dataCollectionHandler(event) {
  event.preventDefault();
  const todoItem = {
    id: uniqid(),
    name: noteNameRef.textContent,
    category: noteCategoriesRef.value,
    color: noteColorRef.value,
  };
  console.log(todoItem);
  todoCollection.push(todoItem);
  renderTodoList();
  closeModal();
}

function renderTodoList() {
  noteListRef.innerHTML = templateTodoItem(todoCollection);
  localStorage.setItem('save-data', JSON.stringify(todoCollection));
}

function closeModal() {
  modal.classList.add('bounceOutDown'); 
  window.setTimeout(function () {
    modal.classList.remove('modal_vis');
    document.body.classList.remove('body_block'); 
  }, 500);
}

function closeModalEdit() {
  modalEdit.classList.add('bounceOutDown'); 
  window.setTimeout(function () {
    modalEdit.classList.remove('modal_vis');
    document.body.classList.remove('body_block'); 
  }, 500);
}

function handlerItemEvent(event) {
  if (!event.target.title) {
    return;
  }
  let typeButton = event.target.title;
  let itemId = event.target.dataset.itemId;
  if (typeButton === 'Edit') {
    editItem(itemId);
  }
  if (typeButton === 'Delete') {
    deleteItem(itemId);
  }
}

function editItem(id) {
  console.log('edit button click', id);
  modalEdit.classList.add('modal_vis'); 
  modalEdit.classList.remove('bounceOutDown'); 
  document.body.classList.add('body_block');

  const itemDataEdit = todoCollection.find(item => {
    return item.id === id;
  });
  console.log(itemDataEdit);

  modalEditInput.value = itemDataEdit.name;
  noteCategoriesEditRef.value = itemDataEdit.category;
  noteColorEditRef.value = itemDataEdit.color;
  editItemId = id;
}

function handlerEditForm(event) {
  event.preventDefault();

  todoCollection.forEach(item => {
    if (item.id === editItemId) {
      item.name = modalEditInput.value;
      item.category = noteCategoriesEditRef.value;
      item.color = noteColorEditRef.value;
    }
  });
  renderTodoList();
  closeModalEdit();
}

function deleteItem(id) {
  console.log('delete button click', id);
  const filteredArray = todoCollection.filter(item => {
    return item.id !== id;
  });
  todoCollection = filteredArray;
  renderTodoList();
}

editTodoFormRef.addEventListener('submit', handlerEditForm);
noteFormCreateRef.addEventListener('submit', dataCollectionHandler);

noteListRef.addEventListener('click', handlerItemEvent);
