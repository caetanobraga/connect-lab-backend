import { IsNotEmpty } from 'class-validator';

export class CreateDeviceDto {
  @IsNotEmpty()
  readonly nome: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly madeBy: string;

  @IsNotEmpty()
  readonly urlFoto: string;
}
