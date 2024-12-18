import { Alimento } from "../model/Alimento";

export interface AlimentoRepository{

    criarAlimento(alimento: Alimento): void;
    listarTodos(): void;
    buscaPorId(id: number): void;
    atualizarAlimento(alimento: Alimento): void;
    deletarAlmento(id: number): void;

}