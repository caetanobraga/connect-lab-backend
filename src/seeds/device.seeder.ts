import { DeviceEntity } from '../devices/entities/device.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { CreateDeviceDto } from 'src/devices/dto/create-device.dto';
import { devices } from './devices';

export class DeviceSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const deviceRepository = dataSource.getRepository(DeviceEntity);

    const deviceData: CreateDeviceDto[] = devices;
    const newDevice = deviceRepository.create(deviceData);
    await deviceRepository.save(newDevice);
  }
}
