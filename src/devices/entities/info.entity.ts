import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DeviceEntity } from './device.entity';

@Entity({ name: 'infos' })
export class InfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  virtual_id: string;

  @Column({ length: 50 })
  ip_address: string;

  @Column({ length: 50 })
  mac_address: string;

  @Column()
  signal: string;

  @OneToOne(() => DeviceEntity, () => InfoEntity)
  device: DeviceEntity;
}
