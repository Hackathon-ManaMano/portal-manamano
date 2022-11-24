export interface User {
  username: string;
  senha: string;
  confirma_senha: string;
}

export const newUser: User = {
  username: "",
  senha: "",
  confirma_senha: "",
};
