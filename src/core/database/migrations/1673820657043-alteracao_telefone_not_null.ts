import { MigrationInterface, QueryRunner } from "typeorm";

export class alteracaoTelefoneNotNull1673820657043 implements MigrationInterface {
    name = 'alteracaoTelefoneNotNull1673820657043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "telefone" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "telefone" SET NOT NULL`);
    }

}
