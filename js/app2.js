// 1. Seleccionar los elementos del DOM
const tarjeta = document.querySelector('#tarjeta');
const btnAzul = document.querySelector('#btn-azul');
const btnVerde = document.querySelector('#btn-verde');
const btnRojo = document.querySelector('#btn-rojo');
const btnRestablecer = document.querySelector('#btn-restablecer');

// 2. Escuchar los eventos de click para cambiar colores
btnAzul.addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'blue';
    tarjeta.style.color = 'white'; 
});

btnVerde.addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'green';
    tarjeta.style.color = 'white';
});

btnRojo.addEventListener('click', () => {
    tarjeta.style.backgroundColor = 'red';
    tarjeta.style.color = 'white';
});

// 3. Escuchar el evento para restablecer el color original
btnRestablecer.addEventListener('click', () => {
    tarjeta.style.backgroundColor = '#fff';
    tarjeta.style.color = 'black'; 
});