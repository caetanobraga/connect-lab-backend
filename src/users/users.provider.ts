import { DataSource } from 'typeorm';
import { EnderecoEntity } from './entities/endereco.entity';
import { UserDevicesEntity } from './entities/user-devices.entity';
import { UserEntity } from './entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(EnderecoEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_DEVICES_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(UserDevicesEntity),
    inject: ['DATA_SOURCE'],
  },
];
