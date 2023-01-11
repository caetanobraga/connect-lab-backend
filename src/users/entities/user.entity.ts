import { Endereco } from './endereco';

export class User {
  id: number;
  nome: string;
  urlFoto: string;
  email: string;
  senha: string;
  telefone: string;
  endereco: Endereco;
}
