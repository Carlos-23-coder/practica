import { AppDataSource } from './conexion';
import { ITutor, ITutorado, ITutoria } from './entidades';

// Crear Tutor usando Promises
export function crearTutor(data: { nombre: string; identificacion: string; experticia: string }): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutorRepository = AppDataSource.getRepository(ITutor);
            const tutor = tutorRepository.create(data);
            await tutorRepository.save(tutor);
            console.log('Tutor creado:', tutor);
            resolve();
        } catch (error) {
            reject(new Error(`Error al crear el tutor: ${error.message}`));
        }
    });
}

// Mostrar Tutores usando Promises
export function mostrarTutores(): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutorRepository = AppDataSource.getRepository(ITutor);
            const tutores = await tutorRepository.find();
            console.log('Tutores:', tutores);
            resolve();
        } catch (error) {
            reject(new Error(`Error al mostrar los tutores: ${error.message}`));
        }
    });
}

// Modificar Tutor usando Promises
export function modificarTutor(id: number, data: Partial<{ nombre: string; identificacion: string; experticia: string }>): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutorRepository = AppDataSource.getRepository(ITutor);
            const tutor = await tutorRepository.findOneBy({ id });
            if (!tutor) {
                reject(new Error('Tutor no encontrado'));
                return;
            }
            tutorRepository.merge(tutor, data);
            await tutorRepository.save(tutor);
            console.log('Tutor modificado:', tutor);
            resolve();
        } catch (error) {
            reject(new Error(`Error al modificar el tutor: ${error.message}`));
        }
    });
}

// Eliminar Tutor usando Promises
export function eliminarTutor(id: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutorRepository = AppDataSource.getRepository(ITutor);
            const result = await tutorRepository.delete(id);
            if (result.affected === 0) {
                reject(new Error('Tutor no encontrado'));
                return;
            }
            console.log('Tutor eliminado');
            resolve();
        } catch (error) {
            reject(new Error(`Error al eliminar el tutor: ${error.message}`));
        }
    });
}

// Crear Tutorado usando Promises
export function crearTutorado(data: Partial<ITutorado>): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutoradoRepository = AppDataSource.getRepository(ITutorado);
            const tutorado = tutoradoRepository.create(data);
            await tutoradoRepository.save(tutorado);
            console.log('Tutorado creado:', tutorado);
            resolve();
        } catch (error) {
            reject(new Error(`Error al crear el tutorado: ${error.message}`));
        }
    });
}

// Mostrar Tutorados usando Promises
export function mostrarTutorados(): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutoradoRepository = AppDataSource.getRepository(ITutorado);
            const tutorados = await tutoradoRepository.find();
            console.log('Tutorados:', tutorados);
            resolve();
        } catch (error) {
            reject(new Error(`Error al mostrar los tutorados: ${error.message}`));
        }
    });
}

// Crear Tutoria usando Promises
export function crearTutoria(data: Partial<ITutoria>): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutoriaRepository = AppDataSource.getRepository(ITutoria);
            const tutoria = tutoriaRepository.create(data);
            await tutoriaRepository.save(tutoria);
            console.log('Tutoria creada:', tutoria);
            resolve();
        } catch (error) {
            reject(new Error(`Error al crear la tutoría: ${error.message}`));
        }
    });
}

// Mostrar Tutorías usando Promises
export function mostrarTutorias(): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const tutoriaRepository = AppDataSource.getRepository(ITutoria);
            const tutorias = await tutoriaRepository.find();
            console.log('Tutorías:', tutorias);
            resolve();
        } catch (error) {
            reject(new Error(`Error al mostrar las tutorías: ${error.message}`));
        }
    });
}
