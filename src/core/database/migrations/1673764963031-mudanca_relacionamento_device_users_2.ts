import { MigrationInterface, QueryRunner } from 'typeorm';

export class mudancaRelacionamentoDeviceUsers21673764963031
  implements MigrationInterface
{
  name = 'mudancaRelacionamentoDeviceUsers21673764963031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dispositivos" DROP CONSTRAINT "FK_92d355922c99a9beae60a9273eb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "dispositivos" DROP COLUMN "userDeviceId"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dispositivos" DROP CONSTRAINT "FK_92d355922c99a9beae60a9273eb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "dispositivos" DROP COLUMN "userDeviceId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "dispositivos" ADD "userDeviceId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "dispositivos" ADD CONSTRAINT "FK_92d355922c99a9beae60a9273eb" FOREIGN KEY ("userDeviceId") REFERENCES "user_devices"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }
}
