import { tutores, tutorados, tutorias } from './practica/practica1';
import { mostrarTutores, mostrarTutorados, mostrarTutorias, 
    buscarTutoriaPorID, ejecutarBusquedaTutoria, obtenerDatosUsuarios } from './practica/practica1_2';

// Mostrar datos
console.log("Mostrando Tutores:");
mostrarTutores();

console.log("\nMostrando Tutorados:");
mostrarTutorados();

console.log("\nMostrando Tutorías:");
mostrarTutorias();

// Buscar tutoría por ID con callback
buscarTutoriaPorID(tutorias, 3, (error, result) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else if (result) {
        console.log(`Tutoría encontrada: Asignatura: ${result.asignatura}, Fecha: ${result.fecha}`);
    }
});


// Buscar tutoría con async/await
console.log("\nBuscando tutoría usando async/await:");
ejecutarBusquedaTutoria(2);

// Consumo de un servicio REST
console.log("\nObteniendo datos de usuarios del servicio REST:");
obtenerDatosUsuarios();
