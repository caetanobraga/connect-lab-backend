import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EnderecoEntity } from './endereco.entity';
import * as bcrypt from 'bcrypt';
import { UserDevicesEntity } from './user-devices.entity';
import { IsOptional } from 'class-validator';

@Entity({ name: 'usuarios' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 255, default: 'www.suafoto.com.br' })
  urlFoto: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  senha: string;

  @Column({ nullable: true })
  telefone?: number;

  @OneToOne(() => EnderecoEntity, () => UserEntity, {
    cascade: true,
  })
  @JoinColumn({ name: 'endereco_id' })
  endereco: EnderecoEntity;

  @Column({ nullable: false })
  salt: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => UserDevicesEntity, (devices) => devices.user, {
    cascade: true,
  })
  user: UserDevicesEntity[];

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.senha;
  }

  addDevice(device: UserDevicesEntity) {
    if (this.user == null) {
      this.user = new Array<UserDevicesEntity>();
    }
    this.user.push(device);
  }
}
