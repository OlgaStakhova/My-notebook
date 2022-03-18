let colorWell;
const defaultColor = '#0000ff';

window.addEventListener('load', startup, false);

function startup() {
  colorWell = document.querySelector('#colorWell');
  colorWell.value = defaultColor;
  colorWell.addEventListener('input', updateFirst, false);
  colorWell.addEventListener('change', updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  const span = document.querySelector('span');

  if (span) {
    span.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll('span').forEach(function (span) {
    span.style.color = event.target.value;
  });
}
