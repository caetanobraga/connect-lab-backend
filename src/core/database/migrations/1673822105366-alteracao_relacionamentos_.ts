import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoRelacionamentos_1673822105366 implements MigrationInterface {
    name = 'alteracaoRelacionamentos_1673822105366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "device_id" TO "deviceId"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "device_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "deviceId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "deviceId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_e81c41e04269a2d2152f0d60b5c" FOREIGN KEY ("deviceId") REFERENCES "dispositivos"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_e81c41e04269a2d2152f0d60b5c"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "deviceId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ALTER COLUMN "deviceId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "device_id"`);
        await queryRunner.query(`ALTER TABLE "user_devices" RENAME COLUMN "deviceId" TO "device_id"`);
    }

}
