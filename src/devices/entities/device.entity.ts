import { UserDevicesEntity } from 'src/users/entities/user-devices.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';

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
}
