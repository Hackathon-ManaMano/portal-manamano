export interface Post {
   // id_publicacao: number;
    id_usuario: string;
    legenda: string;
    data_hora : string | Date ;
  }
  
  export const newPost = {
   // id_publicacao: -1,
    id_usuario: "",
    legenda: "",
    data_hora : ""
  };