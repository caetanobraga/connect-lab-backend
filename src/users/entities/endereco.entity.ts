import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'enderecos' })
export class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  CEP: number;

  @Column({ length: 255 })
  endereco: string;

  @Column()
  numero: number;

  @Column({ length: 100 })
  bairro: string;

  @Column({ length: 100 })
  cidade: string;

  @Column({ length: 80 })
  estado: string;

  @Column({ length: 100, nullable: true })
  complemento: string;

  @OneToOne(() => UserEntity, () => EnderecoEntity)
  user: UserEntity;
}
