import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ChangeEvent, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";
import postServ from "../services/postService";
import { useRef } from "react";
import {showMessage} from "../utils/utils"
// Models
import { newPost, Post } from "../models/PostModel";
import { Card } from "primereact/card";

export interface InputProps {
    id_empreendedora: string;
    nome: string;
    email: string;
    postIndex: number[];
    updatePost: Function;
}

const profilePhoto = {
    backgroundColor: "white",
    width: 60,
    height: 60,
    color: "black",
    marginTop: "20%",
    marginLeft: "5%",
};

const myIcon = (
    <button className="p-dialog-titlebar-icon p-link">
        <span className="pi pi-search"></span>
    </button>
);

function InputWrapper({
    nome,
    id_empreendedora,
    postIndex,
    updatePost,
}: InputProps) {
    const [text, setText] = useState("");
    const [post, setPost] = useState<Post>(newPost);
    const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

    const closeDialog = () => {
        setIsDialogVisible(false);
    };
    const openDialog = () => {
        return setIsDialogVisible(true);
    };

    const footer = () => {
        return (
            <div>
                <Button label="Publicar" onClick={() => Click()} />
            </div>
        );
    };
    const toast = useRef(null);
    const Click = () => {
        var today = new Date();
        try {
            console.log(Math.max.apply(null, postIndex) + 1);
            postServ
                .newPost(
                    text,
                    today.toISOString(),
                    id_empreendedora,
                    Math.max.apply(null, postIndex) + 1
                )
                .then((res) => {
                    // alert("Publicação criada com sucesso")
                    updatePost();
                    closeDialog()
                    showMessage("success","sucesso","Publicação criada com sucesso",toast)
                });
        } catch (err) {
            alert(err);
            alert(text);
        }
    };
    const change = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };
    var str = "Compartilhe novidades! Faça uma publicação, ";
    const cardHeader = (
        <header className="flex align-items-center gap-5 p-5">
            <div>
                <Avatar
                    label={nome[0]}
                    shape="circle"
                    size="xlarge"
                    style={{ color: "black" }}
                />
            </div>
            <div className="flex-grow-1">
                <span className="text-lg">
                    <Button
                        style={{
                            width: "100%",
                            minWidth: 200,
                            maxWidth: 550,
                            borderRadius: 20,
                            backgroundColor: "white",
                            color: "#495057bf",
                            border: "1px solid #ced4da",
                        }}
                        label={str.concat(nome + "!")}
                        value={text}
                        onClick={() => openDialog()}
                    />
                    <Dialog
                        visible={isDialogVisible}
                        draggable={false}
                        onHide={() => closeDialog()}
                        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                        style={{ width: "100vh" }}
                        footer={footer()}
                        header="Criar nova publicação"
                    >
                        <div className="flex align-items-center gap-5 p-3">
                            <Avatar
                                label={nome[0]}
                                shape="circle"
                                size="xlarge"
                                style={{ color: "black" }}
                            />
                            <span className="text-lg">{nome}</span>
                        </div>
                        <div className="col-12">
                            <InputTextarea
                                style={{
                                    width: "100%",
                                    maxWidth: 600,
                                    marginBottom: 25,
                                    marginLeft: 10,
                                    borderRadius: 20,
                                }}
                                placeholder={str + nome + "!"}
                                autoResize
                                value={text}
                                onChange={change}
                            />
                        </div>
                        <Divider />
                        <div className="flex align-items-center p-3">
                            <Button
                                label="Adicionar mídia à publicação"
                                style={{
                                    backgroundColor: "white",
                                    color: "gray",
                                    borderColor: "white",
                                }}
                            >
                                <i
                                    className="pi pi-paperclip"
                                    style={{
                                        fontSize: "1.7rem",
                                        paddingLeft: 5,
                                    }}
                                />
                            </Button>
                        </div>
                    </Dialog>
                </span>
            </div>
        </header>
    );

    return (
        <>
            <Toast ref={toast} position="bottom-left" />
            <Card className="shadow-4" header={cardHeader} />
        </>
    );
}

export default InputWrapper;
