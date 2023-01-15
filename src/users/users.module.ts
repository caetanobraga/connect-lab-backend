import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { databaseProviders } from 'src/core/database/database.provider';
import { userProviders } from './users.provider';
import { deviceProviders } from 'src/devices/devices.provider';

@Module({
  controllers: [UsersController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...deviceProviders,
    UsersService,
  ],
})
export class UsersModule {}
