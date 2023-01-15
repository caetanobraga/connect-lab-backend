import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Put,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AddDeviceDto } from '../dto/add-device.dto';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { UpdatePasswordDto } from '../dto/update-password.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/cadastro')
  async create(@Body() user: CreateUserDto) {
    try {
      return await this.usersService.create(user);
    } catch (err) {
      if (err.code == 23505)
        throw new HttpException({ reason: err.detail }, HttpStatus.CONFLICT);
      console.log(err);
      throw new HttpException({ reason: err }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/vinculaDevice/:idUser/:idDevice')
  @UseGuards(JwtAuthGuard)
  async addDevice(
    @Body() deviceSettings: AddDeviceDto,
    @Param('idUser') idUser: number,
    @Param('idDevice') idDevice: number,
  ) {
    return await this.usersService.addDeviceParaUser(
      +idUser,
      +idDevice,
      deviceSettings,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.usersService.update(+id, updatePasswordDto);
  }
}
