import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoConstrain1673804806902 implements MigrationInterface {
    name = 'alteracaoConstrain1673804806902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "UQ_dd75062a9308bc9ec93c407dfd4"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "UQ_dd75062a9308bc9ec93c407dfd4" UNIQUE ("room")`);
    }

}
