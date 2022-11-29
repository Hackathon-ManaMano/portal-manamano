import { supabase } from "./supabse";

export class RegisterService {
  static async getEmpreendedora(email: string) {
    const response = await supabase
      .from("empreendedora")
      .select("email")
      .filter("email", "eq", email);
    return response.data;
  }

  static async createEmpreendedora(
    nome: string,
    email: string,
    id_emprendedora: string
  ) {
    const response = await supabase.from("empreendedora").insert({
      email,
      nome,
      id_emprendedora,
    });
    return response.data;
  }
}
