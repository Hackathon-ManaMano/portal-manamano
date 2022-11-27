export interface Register {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

export const newRegister: Register = {
  email: "",
  name: "",
  password: "",
  confirm_password: "",
};
