const inputTitleNoteRef = document.querySelector(".createNoteForm-input");
const btnOpenModalRef = document.querySelector(".open_modal");
const titleNoteModsal = document.querySelector(".NameNoteModal");

function valueTitleHandler (){
    titleNoteModsal.innerHTML = inputTitleNoteRef.value;
    clearTitleInput();
}

function clearTitleInput (){
    inputTitleNoteRef.value = "";
}



btnOpenModalRef.addEventListener('click', valueTitleHandler);