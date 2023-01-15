import { EnderecoDto } from './create-user-endereco.dto';

export class UserToReturnDto {
  readonly urlFoto: string;
  readonly nome: string;
  readonly email: string;
  telefone?: number | null;
  readonly endereco: EnderecoDto;
}
