import { MigrationInterface, QueryRunner } from "typeorm";

export class mudancaRelacionamentoDeviceUsers1673764492820 implements MigrationInterface {
    name = 'mudancaRelacionamentoDeviceUsers1673764492820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "deviceId" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_e81c41e04269a2d2152f0d60b5c" FOREIGN KEY ("deviceId") REFERENCES "dispositivos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_e81c41e04269a2d2152f0d60b5c"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "deviceId"`);
    }

}
