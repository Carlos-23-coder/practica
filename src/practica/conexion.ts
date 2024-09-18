import { DataSource } from 'typeorm';
import { ITutor, ITutorado, ITutoria} from './entidades';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'prueba',
    synchronize: true,
    logging: false,
    entities: [ITutor, ITutorado, ITutoria],
});
