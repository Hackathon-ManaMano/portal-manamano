// React & Next
import { ChangeEvent, useState, useEffect } from "react";
// Primereact
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputTextarea } from "primereact/inputtextarea";
// Service
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
// export const info = {
//   color: "black",
//   paddingLeft: 20,
//   paddingTop: "3%",
//   marginLeft: 15,
// };

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
                    setComment(response?.data as any),
                    console.log(response?.data)
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
                    alert("Comentario adicionado com sucesso"),
                        console.log(res);
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

    const cardHeader = (
        <header className="flex align-items-center gap-6 pt-3 pl-3">
            <Avatar
                label={empreendedora.nome[0]}
                shape="circle"
                size="xlarge"
                style={{ color: "black" }}
            />
            <div className="flex gap-6">
                <span className="text-lg">{empreendedora.nome}</span>
                <span className="text-lg">{data_hora}</span>
            </div>
        </header>
    );

    const cardFooter = (
        <div className="grid">
            <Divider />
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
    );
    return (
        <Card
            className="shadow-4 my-6 border"
            header={cardHeader}
            footer={cardFooter}
        >
            <span>{legenda}</span>
            <Image
                className="mt-4"
                src="/empreendedoras-feira.jpg"
                alt="Empreendedoras"
                width="100%"
                height="100%"
                preview
                style={{
                    width: "100%",
                    objectFit: "cover",
                    overflow: "hidden",
                }}
            />
        </Card>
    );
}

export default PostContainer;
