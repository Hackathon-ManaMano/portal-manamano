import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ChangeEvent, useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import commentService from "../services/comment_service";

// Models
import { newComment, Comment } from "../models/comment_model";

// https://www.primefaces.org/primereact/carousel/

export interface PostProps {
  id_publicacao: number;
  id_usuario: string;
  empreendedora: {
    nome: string;
    id_empreendedora: string;
  };
  legenda: string;
  data_hora: string;
}
export interface CommentProps {
  id_comentario_publicacao: number;
  id_publicacao: number;
  comentario: string;
  data_hora: string;
  id_empreendedora: string;
}

const profilePhoto = {
  backgroundColor: "white",
  width: 50,
  height: 50,
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 35,
};
export const info = {
  color: "black",
  paddingLeft: 20,
  paddingTop: "3%",
  marginLeft: 15,
};

const PostWrapper = {
  width: "100%",
  height: "auto",
  marginBottom: "10%",
  backgroundColor: "#170e4935",
  borderRadius: 10,
  // boxShadow: "10px 5px 5px #0000001d",
};

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
];

function PostContainer(
  { id_publicacao, data_hora, legenda, empreendedora }: PostProps,
  { id_comentario_publicacao }: CommentProps
) {
  const [text, setText] = useState("");
  const [comment, setComment] = useState<Comment>(newComment);
  useEffect(() => {
    supabase
      .from("comentario_empreendedora_publicacao")
      .select("*")
      .then(
        (response) => (
          setComment(response?.data as any), console.log(response?.data)
        )
      );
  }, []);
  const Comment = () => {
    var today = new Date();
    try {
      commentService
        .newComment(
          text,
          today.toISOString(),
          empreendedora.id_empreendedora,
          id_publicacao,
          id_comentario_publicacao + 1
        )
        .then((res) => {
          alert("Comentario adicionado com sucesso"), console.log(res);
          //window.location.reload();
        });
    } catch (err) {
      alert(err);
      alert(text);
    }
  };
  const change = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="shadow-6" style={PostWrapper}>
        <div className="grid">
          <Avatar
            className="ml-5 mt-3"
            label={empreendedora.nome[0]}
            shape="circle"
            size="xlarge"
            style={{ color: "black", backgroundColor: "white" }}
          />
          <p style={info}>{empreendedora.nome}</p>
          <p style={info}>{data_hora}</p>
        </div>
        <div style={{ marginLeft: 35, paddingTop: "2%", paddingBottom: "1%" }}>
          <p>{legenda}</p>
        </div>
        <div
          className="flex flex-wrap align-items-center justify-content-center card-container blue-container"
          style={{ marginBottom: "5%" }}
        >
          <div
            className="border-round p-1 m-1 bg-white"
            style={{ width: "90%", height: 400 }}
          >
            <div className="image-gallery">
              <img
                alt="0"
                src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho.jpg"
                style={{ width: "100%", height: 395 }}
              />
            </div>
          </div>
        </div>
        <div className="grid">
          <div style={{ marginLeft: "5%", width: "70%" }}>
            <InputTextarea
              style={{ width: "100%", marginBottom: 25, marginLeft: 10 }}
              placeholder="Escreva um comentário..."
              autoResize
              value={text}
              onChange={change}
            />
          </div>
          <div style={{ marginLeft: 20, marginTop: "1%" }}>
            <Button label="Enviar" icon="pi pi-check" onClick={Comment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
