import { IsNotEmpty } from 'class-validator';

export class AddDeviceDto {
  @IsNotEmpty()
  local: string;

  @IsNotEmpty()
  is_on: boolean;

  @IsNotEmpty()
  room: string;

  @IsNotEmpty()
  virtual_id: string;

  @IsNotEmpty()
  ip_address: string;

  @IsNotEmpty()
  mac_address: string;

  @IsNotEmpty()
  signal: string;
}
