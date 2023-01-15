import { MigrationInterface, QueryRunner } from "typeorm";

export class correcaoTipoSinal1673744883231 implements MigrationInterface {
    name = 'correcaoTipoSinal1673744883231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" integer NOT NULL`);
    }

}
