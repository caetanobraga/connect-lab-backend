import { MainSeeder } from '../../seeds/main.seed';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-flow').config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    __dirname + '/../../**/*.entity{.ts,.js}',
    'dist/**/**/*.entity.js',
  ],
  migrations: [
    __dirname + '../migrations/*{.ts,.js}',
    __dirname + './migrations/*{.ts,.js}',
    'dist/core/database/migrations/*{.ts,.js}',
  ],
  seeds: [MainSeeder],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'history',
};

export const AppDataSource = new DataSource(options);
