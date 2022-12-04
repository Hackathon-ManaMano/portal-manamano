import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ChangeEvent, useState } from "react";

import postServ from "../services/postService";

// Models
import { newPost, Post } from "../models/PostModel";

export interface InputProps {
  id_empreendedora: string;
  nome: string;
  email: string;
  postIndex: number;
}

const profilePhoto = {
  backgroundColor: "white",
  width: 60,
  height: 60,
  color: "black",
  marginTop: "20%",
  marginLeft: "5%",
};
export const info = {
  color: "black",
  paddingLeft: 20,
  paddingTop: 15,
  marginLeft: 15,
  fontFamily: "Roboto sans-serif",
};

const PostWrapper = {
  width: "100%",
  height: "auto",
  marginBottom: "5%",
  marginTop: "3%",
  backgroundColor: "#170e4935",
  borderRadius: 10,
  boxShadow: "10px 5px 5px #0000001d",
};

function InputWrapper({
  nome,
  id_empreendedora,
  email,
  postIndex,
}: InputProps) {
  const [text, setText] = useState("");
  const [post, setPost] = useState<Post>(newPost);
  const Click = () => {
    var today = new Date();
    try {
      postServ
        .newPost(text, today.toISOString(), id_empreendedora, postIndex + 1)
        .then((res) => {
          alert("Publicação criada com sucesso"), console.log(res);
          window.location.reload();
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
      <div style={PostWrapper}>
        <div className="grid">
          <div className="col-fixed" style={{ width: 100 }}>
            <div className="text-center p-3 border-round-sm  font-bold text-white">
              <Avatar
                label={nome[0]}
                shape="circle"
                image=""
                style={profilePhoto}
              />
            </div>
          </div>
          <div className="col">
            <div className="col">
              <p style={info}>{nome}</p>
            </div>
            <div className="flex flex-column md:flex-row card-container">
              <InputTextarea
                style={{
                  width: "100%",
                  maxWidth: 450,
                  marginBottom: 25,
                  marginLeft: 10,
                  borderRadius: 20,
                }}
                placeholder="Compartilhe novidades! Faça uma publicação."
                autoResize
                value={text}
                onChange={change}
              />
              <div style={{ marginLeft: "5%" }}>
                <Button label="Compartilhar" onClick={Click} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputWrapper;
