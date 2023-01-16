import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { databaseProviders } from 'src/core/database/database.provider';
import { userProviders } from 'src/users/users.provider';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: 6000 },
    }),
  ],
  providers: [...databaseProviders, ...userProviders, AuthService],
})
export class AuthModule {}
