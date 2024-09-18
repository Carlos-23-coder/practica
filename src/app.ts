import * as readline from 'readline-sync';
import { AppDataSource } from './practica/conexion';
import { crearTutor, mostrarTutores, modificarTutor, eliminarTutor } from './practica/funciones';

async function main() {
    await AppDataSource.initialize();

    let exit = false;

    while (!exit) {
        console.log('\nMenú Principal');
        console.log('1. Crear Tutor');
        console.log('2. Mostrar Tutores');
        console.log('3. Modificar Tutor');
        console.log('4. Eliminar Tutor');
        console.log('5. Salir');
        
        const option = readline.question('Seleccione una opcion: ');

        switch(option) {
            case '1':
                const nombre = readline.question('Nombre del tutor: ');
                const identificacion = readline.question('Identificación: ');
                const experticia = readline.question('Experticia: ');
                await crearTutor({ nombre, identificacion, experticia });
                break;

            case '2':
                await mostrarTutores();
                break;

            case '3':
                const idModificar = readline.question('ID del tutor a modificar: ');
                const nuevoNombre = readline.question('Nuevo nombre: ');
                const nuevoIdentificacion = readline.question('Nueva Identificación: ');
                const nuevoIxperticia = readline.question('Nueva Experticia: ');
                await modificarTutor(parseInt(idModificar), { nombre: nuevoNombre, 
                    identificacion:nuevoIdentificacion , experticia:nuevoIxperticia  });
                break;

            case '4':
                const idEliminar = readline.question('ID del tutor a eliminar: ');
                await eliminarTutor(parseInt(idEliminar));
                break;

            case '5':
                exit = true;
                console.log('Saliendo del programa...');
                break;

            default:
                console.log('Opción no válida. Por favor, elija una opción correcta.');
        }
    }
}

main().catch(err => console.log('Error:', err));
