import { IsNotEmpty, IsNumberString, MinLength } from 'class-validator';

export class InfoDto {
  @IsNotEmpty()
  virtual_id: string;

  @IsNotEmpty()
  ip_address: string;

  @IsNotEmpty()
  mac_address: string;

  @IsNotEmpty()
  signal: string;
}
