import { DataSource } from "typeorm";

const MonDataSource = new DataSource({
    type: 'oracle',
    host: 'racdev01',
    port: 1521,
    username: 'SEQ_WMO',
    password: 'seq_wmo',
    serviceName: 'APL',
    entities: [
        "src/app/models/Monitor/*.ts"
    ],
    migrations: [
        "src/database/migrations/Mon/*.ts"
    ]
});


export default MonDataSource;
