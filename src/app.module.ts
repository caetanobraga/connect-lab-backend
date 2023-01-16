import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './core/auth/auth.module';
import { JwtStrategy } from './core/auth/guards/jwt.strategy';
import { databaseProviders } from './core/database/database.provider';
import { userProviders } from './users/users.provider';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DevicesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [...databaseProviders, ...userProviders, JwtStrategy],
})
export class AppModule {}
