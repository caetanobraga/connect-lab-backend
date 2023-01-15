import { MigrationInterface, QueryRunner } from "typeorm";

export class apagarColunaNomeTabelaDevices1673745836325 implements MigrationInterface {
    name = 'apagarColunaNomeTabelaDevices1673745836325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "nome"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "nome" character varying(255) NOT NULL`);
    }

}
