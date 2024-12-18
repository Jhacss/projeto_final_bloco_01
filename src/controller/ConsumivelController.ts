import { Consumivel } from "../model/Consumivel";
import { ConsumivelRepository } from "../Repository/ConsumivelRepository";

export class ConsumivelController implements ConsumivelRepository {
  public id: number = 0;

  // Coleção Array que vai armazenar os objetos de consumíveis
  listaconsumiveis = new Array<Consumivel>();

  // Método para criar consumível
  criarConsumivel(consumivel: Consumivel): void {
    this.listaconsumiveis.push(consumivel);
    console.log("O consumível foi adicionado com sucesso!");
  }

  // Método para atualizar um consumível
  atualizarConsumivel(consumivel: Consumivel): void {
    const index = this.listaconsumiveis.findIndex(
      (c) => c.id === consumivel.id
    );
    if (index !== -1) {
      this.listaconsumiveis[index] = consumivel;
      console.log("O consumível foi atualizado com sucesso!");
    } else {
      console.log("Consumível não encontrado.");
    }
  }

  // Método para listar todos os consumíveis
  listarTodos(): void {
    this.listaconsumiveis.forEach((consumivel) => consumivel.visualizar());
  }

  // Método para buscar consumível por id
  buscaPorId(id: number): void {
    const consumivel = this.listaconsumiveis.find((c) => c.id === id);
    if (consumivel) {
      consumivel.visualizar();
    } else {
      console.log("Consumível não encontrado.");
    }
  }

  // Método para deletar consumível
  deletarConsumivel(id: number): void {
    const index = this.listaconsumiveis.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.listaconsumiveis.splice(index, 1);
      console.log("Consumível deletado com sucesso!");
    } else {
      console.log("Consumível não encontrado.");
    }
  }

  // Método auxiliar para gerar ID para os consumíveis
  public gerarId(): number {
    return ++this.id;
  }
}
