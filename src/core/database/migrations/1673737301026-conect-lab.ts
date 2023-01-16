import { MigrationInterface, QueryRunner } from "typeorm";

export class conectLab1673737301026 implements MigrationInterface {
    name = 'conectLab1673737301026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "urlFoto" character varying(255) NOT NULL DEFAULT 'www.suafoto.com.br', "email" character varying(255) NOT NULL, "senha" character varying(255) NOT NULL, "telefone" integer NOT NULL, "salt" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "endereco_id" integer, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "REL_daa6f9099a4117b84e09226f53" UNIQUE ("endereco_id"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" SERIAL NOT NULL, "CEP" integer NOT NULL, "endereco" character varying(255) NOT NULL, "numero" integer NOT NULL, "bairro" character varying(100) NOT NULL, "cidade" character varying(100) NOT NULL, "estado" character varying(80) NOT NULL, "complemento" character varying(100), CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_daa6f9099a4117b84e09226f53e" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_daa6f9099a4117b84e09226f53e"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
