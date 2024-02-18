
const buttons = document.querySelectorAll('.buttons');
const contents = document.querySelectorAll('.contenido');


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (contents[index].classList.contains('show')) {
      contents[index].classList.remove('show');
    } else {
      contents[index].classList.add('show');
    }
  });
});