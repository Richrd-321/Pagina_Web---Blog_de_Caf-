// querySelector
// const heading = document.querySelector("#heading");  // retorna 0 o 1 elementos
const heading = document.querySelector(".header__texto h2");  // retorna 0 o 1 elementos
heading.textContent = 'Nuevo heading';
// heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll
/*
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');

*/
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById
// const headding2 = document.getElementById('heading');
// console.log();

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
 
// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al Documento
const Navegacion = document.querySelector('.navegacion');
Navegacion.appendChild(nuevoEnlace);
 

console.log(nuevoEnlace);



// EVENTOS
/*
console.log(1); 

window.addEventListener('load', function() { // load espera que el JS y los archivos que dependen del HTML estebn listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded espera por el HTML, pero no espera CSS o Imageens
    console.log(4);
});

console.log(5);
*/

/*
function imprimir() {
    console.log(2);
}

window.onscroll = function(evento) {
    console.log(evento);
}
*/
 
// Seleccionar elementos y asociarles un evento
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();

    // Validar un formulario
    console.log('Enviando Formulario...');
});
*/

// Eventos de los inputs y los text area

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', LeerTexto);
email.addEventListener('input', LeerTexto);
mensaje.addEventListener('input', LeerTexto);

// Evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el Formulario

    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        //console.log('Todos los campos son obligatorios...');

        mostrarAlerta('Todos los campos son obligatorios...', 'error');
        return; // Corta la ejecucion del codigo
    }

    // Enviar el Formulario
    mostrarAlerta('Formulario Enviando Correctamente...');
    console.log('Formulario Enviando...');
})

function LeerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

// Mostrar un error en pantalla
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('confirmacion');
    }

    formulario.appendChild( alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
 /*
function mostrarError(mensaje) {
    //const error = document.createElement('P');
    //error.textContent = mensaje;
    //error.classList.add('error');

    formulario.appendChild( error);

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}

// mostrar una confirmacion en pantalla 
function mostrarConfirmacion(mensaje) {
    //const confirmacion = document.createElement('P');
    //confirmacion.textContent = mensaje;
    //confirmacion.classList.add('confirmacion');

    formulario.appendChild( confirmacion);

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        confirmacion.remove();
    }, 3000);
}*/