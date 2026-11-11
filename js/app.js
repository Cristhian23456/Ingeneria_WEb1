// 1. Buscar los elementos del DOM
const message  = document.querySelector('#message');
const nombre   = document.querySelector('#nombre');
const formulario = document.querySelector('#formulario');

// 2. Escuchar el evento submit del formulario (no del botón)
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // 3. Obtener el valor y limpiar espacios
    const valor = nombre.value.trim();

    // 4. Validar que no esté vacío
    if (valor === '') {
        message.textContent = 'Por favor, ingrese su nombre.';
        message.style.color = 'red';
        return;
    }

    // 5. Mostrar mensaje de bienvenida
    message.textContent = `¡Bienvenido, ${valor}!`;
    message.style.color = 'green';
    console.log(message.textContent);

});