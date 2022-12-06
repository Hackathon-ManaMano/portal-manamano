import { supabase } from "./supabase";

export default {
  async newComment(
    comentario: string,
    data_hora: string,
    id_empreendedora: string,
    id_publicacao: number,
    id_comentario_publicacao: number
  ) {
    try {
      const response = await supabase.from("comentario_empreendedora_publicacao").insert({
        id_comentario_publicacao,
        id_publicacao,
        comentario,
        data_hora,
        id_empreendedora,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
