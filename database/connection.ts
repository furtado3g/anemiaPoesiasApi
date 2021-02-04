import Knex from 'knex';
import path from 'path';


const db = Knex({
    client: 'mysql',
    connection: {
        host: '172.18.0.2',
        user: 'root',
        password: 'Thereva7x',
        database: 'anemiaPoesias'
    },
    migrations: {
        directory: path.resolve(__dirname, "database", "migrations"),
    },
})

export default db;