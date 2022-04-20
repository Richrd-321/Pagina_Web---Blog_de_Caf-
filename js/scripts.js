// querySelector
// const heading = document.querySelector("#heading");  // retorna 0 o 1 elementos
const heading = document.querySelector(".header__texto h2");  // retorna 0 o 1 elementos
heading.textContent = 'Nuevo heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const headding2 = document.getElementById('heading');
console.log();