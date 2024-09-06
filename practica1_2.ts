import { ITutor, ITutorado, ITutoria, tutores, tutorados, tutorias } from './practica1';

// Mostrar Tutores
function mostrarTutores(): void {
    tutores.forEach(tutor => {
        console.log(`Tutor: ${tutor.nombre}, Experticia: ${tutor.experticia}`);
    });
}

// Mostrar Tutorados
function mostrarTutorados(): void {
    tutorados.forEach(tutorado => {
        console.log(`Tutorado: ${tutorado.nombre}, Identificación: ${tutorado.identificacion}`);
    });
}

// Mostrar Tutorías
function mostrarTutorias(): void {
    tutorias.forEach(tutoria => {
        console.log(`Tutoria de ${tutoria.asignatura} para Tutor ID ${tutoria.idTutor} y Tutorado ID ${tutoria.idTutorado}`);
    });
}

// Buscar tutoría por ID con Callback
function buscarTutoriaPorID(
    tutorias: ITutoria[], 
    id: number, 
    callback: (error: Error | null, tutoria?: ITutoria) => void
): void {
    const tutoria = tutorias.find(t => t.id === id);
    if (!tutoria) {
        callback(new Error(`No se ha encontrado la tutoría con id ${id}`));
        return;
    }
    callback(null, tutoria);
}


// Buscar tutoría por ID usando Promises
function buscarTutoriaPorIDAsync(tutorias: ITutoria[], id: number): Promise<ITutoria> {
    return new Promise((resolve, reject) => {
        const tutoria = tutorias.find(t => t.id === id);
        if (tutoria) {
            resolve(tutoria);
        } else {
            const error = new Error('Tutoría no encontrada');
            reject(error);
        }
    });
}


// Ejecutar búsqueda de tutoría usando async/await
async function ejecutarBusquedaTutoria(id: number): Promise<void> {
    try {
        const tutoria = await buscarTutoriaPorIDAsync(tutorias, id);
        console.log(`Tutoría encontrada: Asignatura: ${tutoria?.asignatura}, Hora: ${tutoria?.hora}`);
    } catch (error) {
        console.log(error);
    }
}

// Obtener datos de usuarios desde un servicio REST
async function obtenerDatosUsuarios(): Promise<void> {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const usuarios = await respuesta.json();
        console.log("Usuarios obtenidos:", usuarios);
    } catch (error) {
        console.log("Error al obtener los datos:", error);
    }
}

export { 
    mostrarTutores, 
    mostrarTutorados, 
    mostrarTutorias, 
    buscarTutoriaPorID, 
    buscarTutoriaPorIDAsync, 
    ejecutarBusquedaTutoria, 
    obtenerDatosUsuarios 
};
