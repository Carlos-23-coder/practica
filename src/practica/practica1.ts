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
];

const tutorados: ITutorado[] = [
    { id: 1, nombre: "Pedro Alcivar", identificacion: "98765" },
];

const tutorias: ITutoria[] = [
    { id: 1, idTutor: 1, idTutorado: 1, asignatura: "Matemáticas", numHoras: 2, fecha: "2024-09-10", hora: "10:00" },
    
];

export { ITutor, ITutorado, ITutoria, tutores, tutorados, tutorias };
