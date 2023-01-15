import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoRelacionamentos41673822347927 implements MigrationInterface {
    name = 'alteracaoRelacionamentos41673822347927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "device_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "device_id" integer NOT NULL`);
    }

}
