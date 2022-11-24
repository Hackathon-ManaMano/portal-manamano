export interface Profile {
  id_usuario: number;
  foto: string;
  cep: string;
  email: string;
  telefone: string;
  nome: string;
  data_nascimento: string | Date;
}

export const newProfile = {
  id_usuario: -1,
  foto: "",
  cep: "",
  email: "",
  telefone: "",
  nome: "",
  data_nascimento: "",
};
