import { supabase } from "./supabase";
import { Class } from "../models/class_models";

export class ClassService {
    async getClasses(id_turma?: number) {
        let response;
        if (id_turma) {
            response = await supabase
                .from("turma")
                .select("*")
                .eq("id_turma", id_turma);
        } else {
            response = await supabase.from("turma").select("*");
        }
        return response.data;
    }

    async createClass({ descricao, data_inicio, data_fim }: Class) {
        const response = await supabase.from("turma").insert({
            descricao,
            data_inicio,
            data_fim,
        });
        return response.error;
    }
}
