import { DataSource } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';
import { InfoEntity } from './entities/info.entity';

export const deviceProviders = [
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(DeviceEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'INFO_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(InfoEntity),
    inject: ['DATA_SOURCE'],
  },
];
