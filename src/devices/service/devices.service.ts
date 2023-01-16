import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeviceEntity } from '../entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @Inject('DEVICES_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
  ) {}

  async findAll() {
    const devicesToReturn = await this.deviceRepository.find();
    return devicesToReturn;
  }
}
