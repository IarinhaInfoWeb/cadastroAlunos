export interface Aluno{
    dados: any;
    id?: number;
    codigodaMatricula: number;
    nome: string;
    turma: string;
    ativo: boolean;
    foto: string;
    dataDeCriacao?: string;
    dataDeAlteracao?: string;

}