import { Consumivel } from "../model/Consumivel";

export interface ConsumivelRepository {
  criarConsumivel(consumivel: Consumivel): void;
  listarTodos(): void;
  buscaPorId(id: number): void;
  atualizarConsumivel(consumivel: Consumivel): void;
  deletarConsumivel(id: number): void;
}
