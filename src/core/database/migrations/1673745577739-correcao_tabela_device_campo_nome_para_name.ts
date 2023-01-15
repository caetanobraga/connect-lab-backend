import { MigrationInterface, QueryRunner } from "typeorm";

export class correcaoTabelaDeviceCampoNomeParaName1673745577739 implements MigrationInterface {
    name = 'correcaoTabelaDeviceCampoNomeParaName1673745577739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" RENAME COLUMN "nome" TO "name"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" RENAME COLUMN "name" TO "nome"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "nome" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "nome" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dispositivos" RENAME COLUMN "nome" TO "name"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" RENAME COLUMN "name" TO "nome"`);
    }

}
