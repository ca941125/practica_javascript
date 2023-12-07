// botones y contenido
const buttons = document.querySelectorAll('.toggle-btn');
const contents = document.querySelectorAll('.contenido');

//  evento clic a c/ botón
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Si el contenido está oculto, lo mostramos; si está visible, lo ocultamos.
    if (contents[index].classList.contains('show')) {
      contents[index].classList.remove('show');
    } else {
      contents[index].classList.add('show');
    }
  });
});
