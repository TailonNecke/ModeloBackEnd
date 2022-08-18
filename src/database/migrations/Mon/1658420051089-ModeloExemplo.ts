    import { MigrationInterface, QueryRunner, Table,  } from "typeorm"

    export class ModeloExemplo1658420051089 implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<void> {

            // !!!!!! Nome da sequencia tem que ser em maiusculo!!!!! 
            await queryRunner.query(`CREATE SEQUENCE MODELO_EXEMPLO INCREMENT BY 1 START WITH 1 MINVALUE 1 MAXVALUE 99999999999999999999 NOCACHE`); 
            await queryRunner.createTable(new Table({
                name: "Modelo_Exemplo",
                columns: [
                    {
                        name: "modelo_id",
                        type: "varchar",
                        isPrimary: true,
                        default: '"SEQ_WMO"."MODELO_EXEMPLO".nextval',
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
            await queryRunner.query( 'DROP SEQUENCE "MODELO_EXEMPLO"');
        }

    }
