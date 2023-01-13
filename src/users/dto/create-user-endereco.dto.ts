import {
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class EnderecoDto {
  @IsNotEmpty()
  @MinLength(8)
  @IsNumberString()
  readonly CEP: number;

  @IsNotEmpty()
  readonly endereco: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly numero: number;

  @IsNotEmpty()
  readonly bairro: string;

  @IsNotEmpty()
  readonly cidade: string;

  @IsNotEmpty()
  readonly estado: string;

  readonly complemento: string;
}
