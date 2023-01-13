import { EnderecoDto } from './create-user-endereco.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Match } from 'src/core/constraints/match.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly nome: string;

  @IsUrl()
  readonly urlFoto: string | 'www.suafoto.com.br';

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)
  readonly senha: string;

  @IsNotEmpty()
  @MinLength(8)
  @Match('senha', { message: 'Senha e confirmação de senha devem ser iguais' })
  readonly confirmacaoSenha: string;

  @MinLength(8)
  @IsNumberString()
  readonly telefone: number | null;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnderecoDto)
  readonly endereco: EnderecoDto;
}
