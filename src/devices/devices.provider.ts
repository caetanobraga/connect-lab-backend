import { DataSource } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';

export const deviceProviders = [
  {
    provide: 'DEVICES_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(DeviceEntity),
    inject: ['DATA_SOURCE'],
  },
  // {
  //   provide: 'INFO_REPOSITORY',
  //   useFactory: (datasource: DataSource) =>
  //     datasource.getRepository(InfoEntity),
  //   inject: ['DATA_SOURCE'],
  // },
];
