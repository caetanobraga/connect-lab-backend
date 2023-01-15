import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDevicesEntity } from '../entities/user-devices.entity';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { AddDeviceDto } from '../dto/add-device.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
    @Inject('USER_DEVICES_REPOSITORY')
    private userDevicesRepository: Repository<UserDevicesEntity>,
    @Inject('DEVICES_REPOSITORY')
    private deviceRepository: Repository<DeviceEntity>,
  ) {}

  async create(usuario: CreateUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const { senha } = usuario;
        const salt = await bcrypt.genSalt();
        const password = await this.hashPassword(senha, salt);
        const user = { ...usuario, salt };
        user.senha = password;
        delete user.confirmacaoSenha;
        await this.userRepository.save(user);
        resolve({ mensagem: 'usuario criado com sucesso' });
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  async findAll() {
    const usersToReturn = await this.userRepository.find();
    return usersToReturn;
  }

  async findOne(idRecebido: number) {
    const userToReturn = await this.userRepository.findOne({
      where: { id: idRecebido },
    });

    if (!userToReturn) return { message: 'usuario não encontrado' };
    return userToReturn;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  addDeviceParaUser(
    idUser: number,
    idDevice: number,
    deviceSetings: AddDeviceDto,
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: idUser },
          relations: {
            userDevices: true,
          },
        });
        let deviceASerAdicionado = this.userDevicesRepository.create();
        deviceASerAdicionado = {
          ...deviceASerAdicionado,
          ...deviceSetings,
          device_id: idDevice,
        };
        user.addDevice(deviceASerAdicionado);
        await this.userRepository.save(user);

        resolve({ menssagem: 'Dispositivo adicionado com sucesso!' });
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
