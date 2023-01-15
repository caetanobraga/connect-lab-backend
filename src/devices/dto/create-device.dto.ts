import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { InfoDto } from './create-device-info.dto';

export class CreateDeviceDto {
  @IsNotEmpty()
  readonly nome: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly madeBy: string;

  @IsNotEmpty()
  readonly urlFoto: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InfoDto)
  readonly info: InfoDto;
}
