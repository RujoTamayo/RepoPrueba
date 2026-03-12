// 1. Seleccionamos los elementos del HTML
const boton = document.getElementById('miBoton');
const titulo = document.getElementById('titulo');
const cuerpo = document.body;

// 2. Escuchamos el evento "click"
boton.addEventListener('click', () => {
    // 3. Cambiamos el texto del título
    titulo.textContent = "¡Cambiamos el DOM!";

    // 4. Agregamos o quitamos una clase de CSS (Toggle)
    cuerpo.classList.toggle('modo-oscuro');

    // 5. Un mensaje en la consola y pagina para confirmar
    console.log("El botón ha sido presionado y el estilo cambió.");
    alert("El botón ha sido presionado y el estilo cambió.");
});
