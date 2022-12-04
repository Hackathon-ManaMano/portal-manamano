import { supabase } from "./supabase";

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
    id_empreendedora: string
  ) {
    const response = await supabase.from("empreendedora").insert({
      email,
      nome,
      id_empreendedora,
    });
    return response.data;
  }
}
