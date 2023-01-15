import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InfoEntity } from './info.entity';

@Entity({ name: 'dispositivos' })
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 50 })
  type: string;

  @Column({ length: 50 })
  madeBy: string;

  @Column({ length: 255 })
  urlFoto: string;

  @OneToOne(() => InfoEntity, () => DeviceEntity, {
    cascade: true,
  })
  @JoinColumn({ name: 'endereco_id' })
  info: InfoEntity;
}
