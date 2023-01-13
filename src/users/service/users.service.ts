import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
  ) {}

  async create(usuario: CreateUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const userToSave = await this.userRepository.create(usuario);
        const res = await this.userRepository.save(userToSave);
        resolve(res);
      } catch (error) {
        reject({ code: error.code, detail: error.detail });
      }
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(idRecebido: number) {
    const userToReturn = await this.userRepository.findOne({
      where: { id: idRecebido },
    });

    if (!userToReturn) return { message: 'usuario não encontrado' };
    return userToReturn;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
