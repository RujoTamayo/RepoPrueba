// 7. Perfil de Usuario (Objetos)
// Acceder a propiedades de un objeto y usar un método interno
function mostrarPerfil() {
    const usuario = {
        nombre: "Rut Jocabed Tamayo Sequera",
        edad: 21,
        esPremium: true,
        hobbies: ["estudiar", "programar", "sacar a Lua"],
        // Esto es un método (una función dentro de un objeto)
        presentarse: function() {
            return `Hola, soy ${this.nombre} y me gusta ${this.hobbies[1]}.`;
        }
    };

    console.log("--- Datos del Usuario ---");
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`¿Es Premium?: ${usuario.esPremium ? "Sí" : "No"}`);
    console.log(usuario.presentarse());
}

// 8. Validador de Edad (Manejo de Errores - Try/Catch)
// Evitar que el programa se detenga si alguien mete un dato mal.
function tramitarINE(edad) {
    try {
        if (typeof edad !== "number") {
            throw new Error("¡Oye! Eso no es un número. todo bien en tu cabeza? :D");
        }
        if (edad < 18) {
            console.log("No puedes tramitar aún tu INE.");
        } else {
            console.log("Formate en orden, silencio y no comas... espere su turno ceñora.");
        }
    } catch (error) {
        console.error(`ERROR CRÍTICO: ${error.message}`);
    } finally {
        console.log("Trámite finalizado.");
    }
}

//  ----------------------------------------------- Ejecutar las funciones una por una:
// mostrarPerfil();
// tramitarINE(20);    // Caso éxito
// tramitarINE("veinte"); // Caso error
