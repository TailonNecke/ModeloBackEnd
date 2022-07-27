import { DataSource, DataSourceOptions } from "typeorm";
let connection: DataSource  ;
export const initialize = async () => {
  const config: DataSourceOptions = {
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
  }

  if (!connection) {
    let connection = new DataSource(config);
    await connection.initialize();
    if (connection.isInitialized) return connection;
  }
  return connection;
};