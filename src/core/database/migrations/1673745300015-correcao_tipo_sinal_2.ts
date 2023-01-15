import { MigrationInterface, QueryRunner } from "typeorm";

export class correcaoTipoSinal21673745300015 implements MigrationInterface {
    name = 'correcaoTipoSinal21673745300015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" integer NOT NULL`);
    }

}
