export interface Class {
    data_inicio: Date | undefined;
    data_fim: Date | undefined;
    descricao: string;
    id_turma: number;
}

export const emptyClass: Class = {
    data_inicio: undefined,
    data_fim: undefined,
    descricao: "",
    id_turma: -1,
};
