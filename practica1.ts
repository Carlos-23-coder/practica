interface ITutor {
    id: number;
    nombre: string;
    identificacion: string;
    experticia: string;
}

interface ITutorado {
    id: number;
    nombre: string;
    identificacion: string;
}

interface ITutoria {
    id: number;
    idTutor: number;
    idTutorado: number;
    asignatura: string;
    numHoras: number;
    fecha: string;
    hora: string;
}

const tutores: ITutor[] = [
    { id: 1, nombre: "Carlos Cedeño", identificacion: "12345", experticia: "Matemáticas" },
    { id: 2, nombre: "Nahomy Arsentales", identificacion: "23456", experticia: "Física" },
    { id: 3, nombre: "Juan Murillo", identificacion: "34567", experticia: "Química" },
    { id: 4, nombre: "Luis Alava", identificacion: "45678", experticia: "Programación" },
    { id: 5, nombre: "José Martínez", identificacion: "56789", experticia: "Biología" }
];

const tutorados: ITutorado[] = [
    { id: 1, nombre: "Pedro Alcivar", identificacion: "98765" },
    { id: 2, nombre: "Josthin Santana", identificacion: "87654" },
    { id: 3, nombre: "Cristian Conforme", identificacion: "76543" },
    { id: 4, nombre: "Sofía García", identificacion: "65432" },
    { id: 5, nombre: "Andres Rivas", identificacion: "54321" }
];

const tutorias: ITutoria[] = [
    { id: 1, idTutor: 1, idTutorado: 1, asignatura: "Matemáticas", numHoras: 2, fecha: "2024-09-10", hora: "10:00" },
    { id: 2, idTutor: 2, idTutorado: 2, asignatura: "Física", numHoras: 3, fecha: "2024-09-11", hora: "14:00" },
    { id: 3, idTutor: 3, idTutorado: 3, asignatura: "Química", numHoras: 1, fecha: "2024-09-12", hora: "09:00" },
    { id: 4, idTutor: 4, idTutorado: 4, asignatura: "Programación", numHoras: 4, fecha: "2024-09-13", hora: "16:00" },
    { id: 5, idTutor: 5, idTutorado: 5, asignatura: "Biología", numHoras: 2, fecha: "2024-09-14", hora: "11:00" }
];

export { ITutor, ITutorado, ITutoria, tutores, tutorados, tutorias };
