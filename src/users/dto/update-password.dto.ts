import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { Match } from 'src/core/constraints/match.decorator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)
  readonly senha: string;

  @Match('senha')
  readonly confirmacaoSenha: string;
}
