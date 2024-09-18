import mongoose from 'mongoose';
import { TutorUpdateData } from './types'; // Asegúrate de que este archivo esté en la misma carpeta o ajusta el path

const mongoURI = 'mongodb://localhost:27017/tutorias_db';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });

const tutorSchema = new mongoose.Schema({
    nombre: String,
    identificacion: String,
    experticia: String,
});

const TutorModel = mongoose.model('Tutor', tutorSchema);

export async function modificarTutor(id: string, data: TutorUpdateData) {
    try {
        const result = await TutorModel.findByIdAndUpdate(id, data, { new: true });
        if (!result) {
            throw new Error('Tutor no encontrado');
        }
        console.log('Tutor modificado:', result);
    } catch (error) {
        console.error('Error al modificar el tutor:', error);
    }
}

export async function eliminarTutor(id: string) {
    try {
        const result = await TutorModel.findByIdAndDelete(id);
        if (!result) {
            throw new Error('Tutor no encontrado');
        }
        console.log('Tutor eliminado');
    } catch (error) {
        console.error('Error al eliminar el tutor:', error);
    }
}
