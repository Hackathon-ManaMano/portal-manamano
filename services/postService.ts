import { supabase } from "./supabase";

export default {
  async newPost(
    legenda: string,
    data_hora: string,
    id_empreendedora: string,
    id_publicacao: number
  ) {
    try {
      const response = await supabase.from("publicacao").insert({
        id_publicacao,
        legenda,
        data_hora,
        id_empreendedora,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
};
