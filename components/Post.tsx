// React & Next
import { ChangeEvent, useState, useEffect } from "react";
// Primereact
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputTextarea } from "primereact/inputtextarea";
import Commentary from "./Commentary";

// Service
import { supabase } from "../services/supabase";
import commentService from "../services/comment_service";
import { InputProps } from "../components/newPost";
import { showMessage } from "../utils/utils";
export interface PostProps {
    id_publicacao: number;
    id_usuario: string;
    empreendedora: {
        nome: string;
        id_empreendedora: string;
    };
    legenda: string;
    data_hora: string;
    pinado: boolean;
    usuario: InputProps;
    toast: any;
}
export interface CommentProps {
    id_comentario_publicacao: number;
    id_publicacao: number;
    comentario: string;
    data_hora: string;
    id_empreendedora: string;
}
export interface ImagesProps {
    id_midia_publicacao: number;
    id_publicacao: number;
    anexo: string;
}
function PostContainer({
    id_publicacao,
    data_hora,
    legenda,
    empreendedora,
    usuario,
    toast,
}: PostProps) {
    const [text, setText] = useState("");
    const [comment, setComment] = useState<CommentProps[]>([]);
    const [image, setImageUrl] = useState<ImagesProps[]>([]);

    useEffect(() => {
        updateComment();
        getImage(id_publicacao);
    }, []);

    const updateComment = () => {
        supabase
            .from("comentario_empreendedora_publicacao")
            .select("*")
            .eq("id_publicacao", id_publicacao)
            .then((response) => setComment(response?.data as any));
    };

    const getImage = (id: number) => {
        supabase
            .from("midia_publicacao")
            .select("*")
            .eq("id_publicacao", id)
            .then((response) => {
                setImageUrl(response?.data as any);
                console.log(response?.data as any);
            });
    };
    const postComment = () => {
        var today = new Date();
        try {
            console.log(usuario);
            commentService
                .newComment(
                    text,
                    today.toISOString(),
                    usuario.id_empreendedora,
                    id_publicacao
                )
                .then((res) => {
                    updateComment();
                    setText("");
                    showMessage(
                        "success",
                        "sucesso",
                        "Coment??rio criado com sucesso",
                        toast
                    );
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
                label={empreendedora?.nome[0]}
                shape="circle"
                size="xlarge"
                style={{ color: "black" }}
            />
            <div className="flex gap-6">
                <span className="text-lg">{empreendedora?.nome}</span>
                <span className="text-lg">{data_hora}</span>
            </div>
        </header>
    );

    const cardFooter = (
        <div>
            <div className="grid">
                {comment?.length > 0 ? <Divider /> : ""}
                {comment?.map((commentInfo, index) =>
                    id_publicacao == comment[index].id_publicacao ? (
                        <Commentary
                            key={index}
                            id_comentario_publicacao={
                                commentInfo.id_comentario_publicacao
                            }
                            id_publicacao={commentInfo.id_publicacao}
                            id_empreendedora={commentInfo.id_empreendedora}
                            data_hora={commentInfo.data_hora}
                            comentario={commentInfo.comentario}
                        />
                    ) : (
                        " "
                    )
                )}

                <Divider />
            </div>
            <div className="flex align-items-center gap-2">
                <div className="col-8">
                    <InputTextarea
                        placeholder="Escreva um coment??rio..."
                        value={text}
                        onChange={change}
                        autoResize
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-4 align-items-center">
                    <Button
                        label="Enviar"
                        icon="pi pi-check"
                        onClick={postComment}
                    />
                </div>
            </div>
        </div>
    );
    return (
        <Card
            className="shadow-4 my-5 border"
            header={cardHeader}
            footer={cardFooter}
        >
            <span>{legenda}</span>
            {image?.length > 0 ? (
                <Image
                    className="mt-4"
                    src={image[0]?.anexo}
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
            ) : (
                ""
            )}
        </Card>
    );
}

export default PostContainer;
