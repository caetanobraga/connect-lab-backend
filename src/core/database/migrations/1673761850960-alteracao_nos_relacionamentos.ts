import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoNosRelacionamentos1673761850960 implements MigrationInterface {
    name = 'alteracaoNosRelacionamentos1673761850960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_devices" ("id" SERIAL NOT NULL, "local" character varying(25) NOT NULL, "is_on" boolean NOT NULL, "room" character varying(255) NOT NULL, "virtual_id" character varying(255) NOT NULL, "ip_address" character varying(50) NOT NULL, "mac_address" character varying(50) NOT NULL, "signal" character varying NOT NULL, "userId" integer, CONSTRAINT "UQ_dd75062a9308bc9ec93c407dfd4" UNIQUE ("room"), CONSTRAINT "PK_c9e7e648903a9e537347aba4371" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD "userDeviceId" integer`);
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_devices" ADD CONSTRAINT "FK_e12ac4f8016243ac71fd2e415af" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD CONSTRAINT "FK_92d355922c99a9beae60a9273eb" FOREIGN KEY ("userDeviceId") REFERENCES "user_devices"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP CONSTRAINT "FK_92d355922c99a9beae60a9273eb"`);
        await queryRunner.query(`ALTER TABLE "user_devices" DROP CONSTRAINT "FK_e12ac4f8016243ac71fd2e415af"`);
        await queryRunner.query(`ALTER TABLE "infos" DROP COLUMN "signal"`);
        await queryRunner.query(`ALTER TABLE "infos" ADD "signal" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP COLUMN "userDeviceId"`);
        await queryRunner.query(`DROP TABLE "user_devices"`);
    }

}
