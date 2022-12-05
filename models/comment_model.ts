export interface Comment {
  id_publicacao: number;
  id_comentario_publicacao: number;
  comentario: string;
  data_hora: string;
  id_empreendedora: string;
}

export const newComment = {
  id_publicacao: -1,
  id_comentario_publicacao: -1,
  comentario: "",
  data_hora: "",
  id_empreendedora: "",
};
