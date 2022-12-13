import { supabase } from "./supabase";

export default {
  async newPost(
    legenda: string,
    data_hora: string,
    id_empreendedora: string
  ) {
    try {
      const response = await supabase.from("publicacao").insert({
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
