export interface Post {
    id_usuario: string;
    legenda: string;
    data_hora : string | Date ;
  }
  
  export const newPost = {
    id_usuario: "",
    legenda: "",
    data_hora : ""
  };