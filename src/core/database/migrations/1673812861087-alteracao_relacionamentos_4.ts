import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoRelacionamentos41673812861087 implements MigrationInterface {
    name = 'alteracaoRelacionamentos41673812861087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_f4668648bcab633a2c656103bb3"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP COLUMN "userDevicesId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_devices" ADD "userDevicesId" integer`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_f4668648bcab633a2c656103bb3" FOREIGN KEY ("userDevicesId") REFERENCES "dispositivos"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
