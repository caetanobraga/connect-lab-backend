import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
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
        const usuarioCriado = await this.userRepository.save(user);
        resolve({ mensagem: 'usuario criado com sucesso' });
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

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  // async trocarASenha(login: trocarSenhaDto id: number, senha: string) {
  //   const user = await this.userRepository.findOne({
  //     where: {
  //       id: id,
  //     },
  //   });

  //   user.senha = await this.hashPassword(senha, user.salt);

  //   await this.userRepository.save(user);

  //   return;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
