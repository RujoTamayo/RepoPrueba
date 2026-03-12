// --- EJERCICIOS DE JAVASCRIPT ---

// 1. Hola Mundo 
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! You are pretty .... good :D !`);
}

// 2. Calcular de Edad Canina
function edadLua(edadHumana) {
    const resultado = edadHumana * 7;
    console.log(`Lua tiene ${resultado} años perrunos.`);
    console.log("Lua tiene " + resultado + " años perrunos.");
}

// 3. Inversor de Palabras
function invertirTexto(texto) {
    let invertido = texto.split("").reverse().join("");
    console.log(`Original: ${texto} | Invertido: ${invertido}`);
}

// 4. El Contador de Frutas (Arrays + Bucle For)
// Recorre una lista y muestra cada elemento con su índice
function listarFrutas() {
    const frutas = ["Sandía", "Uva", "Durazno", "Mango"];
    console.log("--- Frutas favoritas de Jok ---");
    for (let i = 0; i < frutas.length; i++) {
        console.log(`Fruta no. ${i + 1}. ${frutas[i]}`);
    }
}

// 5. El Filtro de Números (Métodos de Array)
// Solo los números que son mayores a 10
function filtrarMayores(lista) {
    const resultado = lista.filter(num => num > 10);
    console.log("Números mayores a 10:", resultado);
}

// ################################################################################

// 6. La Calcular IVA (Uso de RETURN)
// Obtiene total devolviendo el valor para usarlo después.
function calcularPrecioTotal(precio) {
    const impuesto = 0.16; // 16% de IVA
    const total = precio + (precio * impuesto);
    return total; // Aquí "sacamos" el dato de la función
}

//  ----------------------------------------------- Ejecutar las funciones una por una:

saludar("Jokita");
// edadLua(5);
// invertirTexto("JavaScript");
// listarFrutas();
// filtrarMayores([5, 12, 8, 20, 1]);

// Ejemplo interactivo del RETURN:
    // const factura = calcularPrecioTotal(100); 
    // console.log(`El total a pagar con IVA es: $${factura}`);

