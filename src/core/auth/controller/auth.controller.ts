import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { LoginDto } from 'src/users/dto/login.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() login: LoginDto) {
    return await this.authService.login(login);
  }

  @Get('/verificaSessao')
  @UseGuards(JwtAuthGuard)
  verificaSessao(@Request() request) {
    const { user } = request;
    console.log('--request--');
    console.log(user);
    return 'ok';
  }
}
