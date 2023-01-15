// import { Controller, Post, Body } from '@nestjs/common';

import { Controller, Get } from '@nestjs/common';
import { DevicesService } from '../service/devices.service';

// import { AddDeviceDto } from '../dto/add-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}
  //   @Post('/vinculaDevice')
  //   async adiciona(@Body() deviceAdd: AddDeviceDto) {}
  //     try {
  //       return await this.usersService.create(user);
  //     } catch (err) {
  //       if (err.code == 23505)
  //         throw new HttpException({ reason: err.detail }, HttpStatus.CONFLICT);
  //       console.log(err);
  //       throw new HttpException({ reason: err }, HttpStatus.BAD_REQUEST);
  //     }
  //   }
  @Get()
  findAll() {
    return this.devicesService.findAll();
  }
  //   @Get(':id')
  //   findOne(@Param('id') id: number) {
  //     return this.usersService.findOne(+id);
  //   }
  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //     return this.usersService.update(+id, updateUserDto);
  //   }
  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.usersService.remove(+id);
  //   }
}
