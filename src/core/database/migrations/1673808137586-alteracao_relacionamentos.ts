import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoRelacionamentos1673808137586 implements MigrationInterface {
    name = 'alteracaoRelacionamentos1673808137586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_e81c41e04269a2d2152f0d60b5c"`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "deviceId" TO "device_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "device_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "device_id" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "device_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "device_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "device_id" TO "deviceId"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_e81c41e04269a2d2152f0d60b5c" FOREIGN KEY ("deviceId") REFERENCES "dispositivos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
