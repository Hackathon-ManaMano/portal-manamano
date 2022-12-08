import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ChangeEvent, useState } from "react";

import postServ from "../services/postService";

// Models
import { newPost, Post } from "../models/PostModel";
import { Card } from "primereact/card";

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

// const PostWrapper = {
//   width: "100%",
//   height: "auto",
//   marginBottom: "5%",
//   marginTop: "3%",
//   backgroundColor: "#170e4935",
//   borderRadius: 10,
//   boxShadow: "10px 5px 5px #0000001d",
// };

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

  const cardHeader = (
    <header className="flex align-items-center gap-6 p-3">
      <Avatar
        label={nome[0]}
        shape="circle"
        size="xlarge"
        style={{ color: "black" }}
      />
      <span className="text-lg">{nome}</span>
    </header>
  );

  return (
    <Card className="shadow-4" header={cardHeader}>
      <div className="grid">
        <div className="col">
          <div className="flex flex-column md:flex-row card-container">
            <InputTextarea
              style={{
                width: "90%",
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
            <div
              className="flex flex-row md:flex-row"
              style={{
                marginLeft: "5%",
                marginTop: "1%",
                marginBottom: "2%",
              }}
            >
              <div>
                <Button label="Compartilhar" onClick={Click} />
              </div>
              <div style={{ marginLeft: "3%" }}>
                <Button
                  className="pi pi-images"
                  style={{ fontSize: "1.4rem" }}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default InputWrapper;
