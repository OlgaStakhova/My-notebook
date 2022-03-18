let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

let close_modalEdit = document.getElementById('close_modalEdit');
let modalEdit = document.getElementById('modalEdit');

for (let i = 0; i < open_modal.length; i++) {
  open_modal[i].onclick = function () {
    modal.classList.add('modal_vis'); 
    modal.classList.remove('bounceOutDown'); 
    body.classList.add('body_block'); 
  };
}
close_modal.onclick = function () {
  modal.classList.add('bounceOutDown'); 
  window.setTimeout(function () {
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block'); 
  }, 500);
};

close_modalEdit.onclick = function () {
  modalEdit.classList.add('bounceOutDown'); 
  window.setTimeout(function () {
    modalEdit.classList.remove('modal_vis');
    body.classList.remove('body_block'); 
  }, 500);
};
