import { MigrationInterface, QueryRunner } from "typeorm";

export class remocaoTabelaInfo1673762442321 implements MigrationInterface {
    name = 'remocaoTabelaInfo1673762442321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP CONSTRAINT "FK_41666aa3b32f1b4ceb66381455d"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP CONSTRAINT "REL_41666aa3b32f1b4ceb66381455"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "endereco_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "endereco_id" integer`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD CONSTRAINT "REL_41666aa3b32f1b4ceb66381455" UNIQUE ("endereco_id")`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD CONSTRAINT "FK_41666aa3b32f1b4ceb66381455d" FOREIGN KEY ("endereco_id") REFERENCES "infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
