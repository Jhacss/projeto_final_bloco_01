import { Bebida } from "../model/Bebida";
import { Consumivel } from "../model/Consumivel";
import { ConsumivelRepository } from "../Repository/ConsumivelRepository";

export class ConsumivelController implements ConsumivelRepository {
  criarConsumivel(consumivel: Consumivel): void {
    this.listaconsumiveis.push(consumivel);
    console.log("O consumivel foi adicionado com sucesso!");
  }

  public id: number = 0;

  //coleção Array que vai armazenar os objetos de consumiveis
  listaconsumiveis = new Array<Consumivel>();

  listarTodos(): void {
    this.listaconsumiveis.forEach((consumivel) => consumivel.visualizar());
  }
  // Método auxiliar para buscar uma conta no array
  public buscarNoArray(id: number): Consumivel | null {
    for (let consumivel of this.listaconsumiveis) {
      if (consumivel.id === this.id) {
        return consumivel;
      }
    }

    return null;
  }

  buscaPorId(id: number): void {
    const buscaConsumivel = this.buscarNoArray(id);

    if (buscaConsumivel !== null) {
      buscaConsumivel.visualizar();
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  atualizarConsumivel(consumiveis: Consumivel): void {
    const buscaConsumivel = this.buscarNoArray(consumiveis.id);

    if (buscaConsumivel !== null) {
      this.listaconsumiveis[this.listaconsumiveis.indexOf(buscaConsumivel)] =
        consumiveis;
      console.log("Consumivel foi atualizado com sucesso!");
    } else {
      console.log("\nConsumivel não encontrado!");
    }
  }
  deletarConsumivel(id: number): void {
    const buscaConsumivel = this.buscarNoArray(id);

    if (buscaConsumivel !== null) {
      this.listaconsumiveis.splice(
        this.listaconsumiveis.indexOf(buscaConsumivel),
        1
      );
      console.log("O consumivel foi deletado com sucesso!");
    } else {
      console.log("\n O consumivel não foi encontrado");
    }
  }

  /*Métodos Auxiliares*/

  /*Gerar Id do Produto*/
  public gerarId(): number {
    return ++this.id;
  }
}
