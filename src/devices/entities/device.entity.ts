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

  @OneToMany(() => UserDevicesEntity, (devices) => devices.user, {
    cascade: true,
  })
  device: UserDevicesEntity[];

  addDevice(device: UserDevicesEntity) {
    if (this.device == null) {
      this.device = new Array<UserDevicesEntity>();
    }
    this.device.push(device);
  }
}
