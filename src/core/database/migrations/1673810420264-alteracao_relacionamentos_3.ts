import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoRelacionamentos31673810420264 implements MigrationInterface {
    name = 'alteracaoRelacionamentos31673810420264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP CONSTRAINT "FK_92d355922c99a9beae60a9273eb"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "userDeviceId"`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "userDevicesId" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_f4668648bcab633a2c656103bb3" FOREIGN KEY ("userDevicesId") REFERENCES "dispositivos"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_f4668648bcab633a2c656103bb3"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "userDevicesId"`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "userDeviceId" integer`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD CONSTRAINT "FK_92d355922c99a9beae60a9273eb" FOREIGN KEY ("userDeviceId") REFERENCES "user_devices"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
