import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.provider';
import { DevicesController } from './controller/devices.controller';
import { deviceProviders } from './devices.provider';
import { DevicesService } from './service/devices.service';

@Module({
  controllers: [DevicesController],
  providers: [...databaseProviders, ...deviceProviders, DevicesService],
})
export class DevicesModule {}
