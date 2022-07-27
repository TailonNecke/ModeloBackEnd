import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { query } from "express"

export class ModeloExemplo1658420051089 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
            name: "Modelo_Exemplo",
            columns: [
                {
                    name: "modelo_id",
                    type: "number",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "nome",
                    type: "varchar",
                },
                {
                    name: "mensagem",
                    type: "varchar",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable( 'Modelo_Exemplo');
    }

}
