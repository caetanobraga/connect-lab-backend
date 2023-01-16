import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from 'src/users/dto/login.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async login(login: LoginDto) {
    const user = await this.checkLogin(login);
    if (!user) {
      throw new UnauthorizedException('Login inválido!');
    }

    const primeiroNome = user.nome.split(' ')[0];
    const jwtPayload = {
      id: user.id,
      primeiroNome: primeiroNome,
      urlFoto: user.urlFoto,
      email: user.email,
    };

    const token = this.jwtService.sign(jwtPayload);

    return { token: token };
  }

  async checkLogin(login: LoginDto) {
    const { email, senha } = login;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (user && (await user.checkPassword(senha))) {
      return user;
    }
  }

  validateJWT(jwtToken: string) {
    return new Promise(async (resolve, reject) => {
      const tokenRecebido = jwtToken.split(' ')[1];
      try {
        resolve(
          await this.jwtService.verifyAsync(tokenRecebido, {
            ignoreExpiration: false,
          }),
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}
