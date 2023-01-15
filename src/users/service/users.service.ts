import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDevicesEntity } from '../entities/user-devices.entity';
import { DeviceEntity } from 'src/devices/entities/device.entity';
import { AddDeviceDto } from '../dto/add-device.dto';
import { UpdatePasswordDto } from '../dto/update-password.dto';
import { UserToReturnDto } from '../dto/user-to-return.dto';
import { NOTFOUND } from 'dns';

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

  async findOne(idRecebido: number): Promise<UserToReturnDto> {
    const user: UserEntity = await this.userRepository.findOne({
      where: { id: idRecebido },
      relations: {
        endereco: true,
      },
    });

    if (!user) throw new HttpException('message', HttpStatus.NOT_FOUND);

    const userToReturn: UserToReturnDto = {
      urlFoto: user.urlFoto,
      nome: user.nome,
      email: user.email,
      telefone: user.telefone ?? user.telefone,
      endereco: user.endereco,
    };

    if (userToReturn.telefone === null) delete userToReturn.telefone;

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
            user: true,
          },
        });

        const device: DeviceEntity = await this.deviceRepository.findOne({
          where: { id: idDevice },
          relations: {
            device: true,
          },
        });

        let userDevice = this.userDevicesRepository.create();

        userDevice = { ...userDevice, ...deviceSetings };

        userDevice.device = device;
        userDevice.user = user;

        user.addDevice(userDevice);
        device.addDevice(userDevice);

        await this.userDevicesRepository.save(userDevice);

        resolve({ menssagem: 'Dispositivo adicionado com sucesso!' });
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  async update(idUser: number, updatePassword: UpdatePasswordDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const user: UserEntity = await this.userRepository.findOne({
          where: { id: idUser },
        });

        const novaSenha = await this.hashPassword(
          updatePassword.senha,
          user.salt,
        );
        await this.userRepository.update({ id: idUser }, { senha: novaSenha });
        resolve({ mensagem: 'Senha alterada com sucesso!' });
      } catch (error) {
        reject({
          code: error.code,
          detail: error.detail,
        });
      }
    });
  }

  async findAllDevicesUser(id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.userRepository.findOne({
          where: {
            id: id,
          },
          relations: {
            user: true,
          },
        });
        resolve(res);
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  async showDeviceDetail(id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.userDevicesRepository.findOne({
          where: {
            id: id,
          },
          relations: {
            device: true,
          },
        });

        resolve(res);
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }
}
