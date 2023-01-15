import { MigrationInterface, QueryRunner } from "typeorm";

export class inclusaoTabelaDevices1673739649981 implements MigrationInterface {
    name = 'inclusaoTabelaDevices1673739649981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "infos" ("id" SERIAL NOT NULL, "virtual_id" character varying(255) NOT NULL, "ip_address" character varying(50) NOT NULL, "mac_address" character varying(50) NOT NULL, "signal" integer NOT NULL, CONSTRAINT "PK_be86029f65ae5c9d902e255013a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dispositivos" ("id" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "type" character varying(50) NOT NULL, "madeBy" character varying(50) NOT NULL, "urlFoto" character varying(255) NOT NULL, "endereco_id" integer, CONSTRAINT "REL_41666aa3b32f1b4ceb66381455" UNIQUE ("endereco_id"), CONSTRAINT "PK_e9595bb1be0bf2b2e376b904434" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dispositivos" ADD CONSTRAINT "FK_41666aa3b32f1b4ceb66381455d" FOREIGN KEY ("endereco_id") REFERENCES "infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dispositivos" DROP CONSTRAINT "FK_41666aa3b32f1b4ceb66381455d"`);
        await queryRunner.query(`DROP TABLE "dispositivos"`);
        await queryRunner.query(`DROP TABLE "infos"`);
    }

}
