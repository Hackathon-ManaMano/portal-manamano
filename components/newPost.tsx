import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { ChangeEvent, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import postServ from "../services/postService";
import { showMessage } from "../utils/utils";
import { FileUpload, FileUploadHandlerParam } from "primereact/fileupload";
import { supabase } from "../services/supabase";
// Models
import { newPost, Post } from "../models/PostModel";
import { Card } from "primereact/card";

export interface InputProps {
    id_empreendedora: string;
    nome: string;
    email: string;
    postIndex: number[];
    updatePost: Function;
    toast: any;
}

const Options = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className: "custom-cancel-btn",
    style: "display=none",
};
function InputWrapper({
    nome,
    id_empreendedora,
    postIndex,
    updatePost,
    toast,
}: InputProps) {
    const [text, setText] = useState("");
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
                <Button label="Publicar" onClick={() => {
                    Click()}} />
              
            </div>
        );
    };
    const Click = () => {
        var today = new Date();
        try {
            console.log(Math.max.apply(null, postIndex) + 1);
            postServ
                .newPost(text, today.toISOString(), id_empreendedora)
                .then((res) => {
                    updatePost();
                    closeDialog();
                    showMessage(
                        "success",
                        "sucesso",
                        "Publicação criada com sucesso",
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
    const uploadOptions = { className: "hidden" };
    const cancelOptions = { className: "hidden" };

    var str = "Compartilhe novidades! Faça uma publicação, ";
    return (
        <>
            <Card className="shadow-4">
                <header className="flex align-items-center gap-5">
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
                                breakpoints={{
                                    "960px": "75vw",
                                    "640px": "100vw",
                                }}
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
                                <div style={{ padding: 3 }}>
                                    <div
                                        style={{
                                            marginBottom: 10,
                                            marginLeft: "5%",
                                            display: "flex",
                                        }}
                                    >
                                        <span>
                                            {" "}
                                            Adicionar mídia à publicação
                                        </span>
                                    </div>
                                     <FileUpload
                                        uploadOptions={uploadOptions}
                                        cancelOptions={cancelOptions}
                                        chooseLabel={"Escolher arquivo"}
                                        maxFileSize={1000000}
                                    /> 
                                </div>
                            </Dialog>
                        </span>
                    </div>
                </header>
            </Card>
        </>
    );
}

export default InputWrapper;
