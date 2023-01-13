import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EnderecoEntity } from './endereco.entity';

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

  @Column({ length: 255 })
  confirmacaoSenha: string;

  @Column()
  telefone: number;

  @OneToOne(() => EnderecoEntity, (user) => UserEntity, {
    cascade: true,
  })
  @JoinColumn({ name: 'endereco_id' })
  endereco: EnderecoEntity;

  @CreateDateColumn()
  createdAt: Date;
}
