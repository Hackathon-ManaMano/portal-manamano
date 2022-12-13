export interface Comentario {
  id_publicacao: number;
  comentario: string;
  data_hora: string;
  id_empreendedora: string;
}

export const newComentario = {
  id_publicacao: -1,
  comentario: "",
  data_hora: "",
  id_empreendedora: "",
};
