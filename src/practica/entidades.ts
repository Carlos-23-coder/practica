import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ITutor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    identificacion: string;

    @Column()
    experticia: string;
}

@Entity()
export class ITutorado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    identificacion: string;
}

@Entity()
export class ITutoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idTutor: number;

    @Column()
    idTutorado: number;

    @Column()
    asignatura: string;

    @Column()
    numHoras: number;

    @Column()
    fecha: string;

    @Column()
    hora: string;
}
