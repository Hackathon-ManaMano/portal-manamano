import { Avatar } from "primereact/avatar";
import { useState, useEffect } from "react";
import { changeFormatDate } from "../utils/utils";

// Models
import { Card } from "primereact/card";
import { supabase } from "../services/supabase";
import { InputProps } from "./newPost";

export interface CommentProps {
    id_publicacao: number;
    id_comentario_publicacao: number;
    comentario: string;
    data_hora: string;
    id_empreendedora: string;
}

interface UsuarioProps {
    administrador_id_usuario: string;
    cadastro_aprovado: boolean;
    email: string;
    foto: string;
    id_empreendedora: string;
    id_turma: number;
    nome: string;
}

function Commentary({ comentario, data_hora, id_empreendedora }: CommentProps) {
    const [usuario, setUsuario] = useState<UsuarioProps[]>([]);

    useEffect(() => {
        const getNomeEmpreendedora = async () => {
            supabase
                .from("empreendedora")
                .select("*")
                .eq("id_empreendedora", id_empreendedora)
                .then(
                    (response) => (
                        setUsuario(response?.data as any),
                        console.log(response?.data)
                    )
                );
        };

        getNomeEmpreendedora();
    }, []);


    return (
        <div
            className="shadow-4"
            style={{ width: "90%", padding: 2, marginLeft: "4%", borderRadius:5 }}
        >
            <header className="flex align-items-center gap-5 p-2">
                <div className="Grid">
                    <Avatar
                        label={usuario[0]?.nome[0]}
                        shape="circle"
                        size="large"
                        style={{ color: "black" }}
                    />
                </div>
                <div>{usuario[0]?.nome}</div>
                <div className="Comment-date">
                    {changeFormatDate(data_hora)}
                </div>
            </header>
            <div className="Comment-text" style={{marginLeft:"2%", marginBottom:"2%"}}>{comentario}</div>
        </div>
    );
}

export default Commentary;
