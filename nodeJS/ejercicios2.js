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

    if (usuario.edad > 18) {
        console.log("Eres mayor de edad, puedes acceder a contenido exclusivo.");
    } else {
        console.log("Eres menor de edad, algunos contenidos pueden estar restringidos.");
    }

    const mayorDeEdad = usuario.edad > 18 ? "Sí" : "No";
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
//  tramitarINE("21 casi 22");    // Caso éxito
 //tramitarINE("veinte"); // Caso error

 // == es para comparar valores, 
 // === compara valor y tipo de dato, 
 // !== es diferente en valor, 
 // !=== es diferente en valor o tipo de dato

 // TAREA: Hace una funcion que tenga un objeto (que tenga una funcion) y try-catch// 9. Tarea: Función con objeto que tiene método y try-catch
function tareaCombinada() {
    const calculadora = { // Objeto con un método para sumar
        sumar: function(a, b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error('Ambos parámetros deben ser números');
            }
            return a + b;
        }
    };

    try {
        console.log('Suma de 3 + 5:', calculadora.sumar(3, 5));
        console.log('Suma de 10 + "hola":', calculadora.sumar(10, 'hola')); // Esto lanzará error
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Operación completada.');
    }
}

// Ejecutar la tarea
tareaCombinada();
 // Crear una rama en GitHub que se llame "feature/tarea" y subir el ejercicio