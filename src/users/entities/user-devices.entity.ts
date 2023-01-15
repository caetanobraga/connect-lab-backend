import { DeviceEntity } from 'src/devices/entities/device.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'user_devices' })
export class UserDevicesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  local: string;

  @Column()
  is_on: boolean;

  @Column({ length: 255 })
  room: string;

  @Column({ length: 255 })
  virtual_id: string;

  @Column({ length: 50 })
  ip_address: string;

  @Column({ length: 50 })
  mac_address: string;

  @Column()
  signal: string;

  @Column()
  device_id: number;

  @ManyToOne(() => UserEntity, (user) => user.userDevices, {
    onDelete: 'SET NULL',
  })
  user: UserEntity;
}
