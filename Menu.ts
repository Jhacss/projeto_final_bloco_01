import readlinesync = require("readline-sync");
import { colors } from "./src/utill/Cores";
import { ConsumivelController } from "./src/controller/ConsumivelController";
import { Bebida } from "./src/model/Bebida";
import { Comida } from "./src/model/Comida";

export function main() {
  let opcao, tipo, preco, id: number;
  let nome, segmento, tipoSabor: string;

  let tipoConsumiveis = ["Bebida", "Comida"];

  // Instanciar um Objeto da Classe ConsumiveisController
  const consumivelController = new ConsumivelController();

  const c1 = new Comida(1, "coxinha", 2, 2, "salgado")
  consumivelController.criarConsumivel(c1)

  while (true) {
    menu();

    opcao = readlinesync.questionInt("Digite uma opcao: ");

    if (opcao === 0) {
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("Criar Consumivel");

        console.log("digite o nome do Consumivel: ");
        nome = readlinesync.question("");

        console.log("escolha o tipo do Consumivel: ");
        tipo =
          readlinesync.keyInSelect(tipoConsumiveis, "", {
            cancel: false,
          }) + 1;

        preco = readlinesync.questionFloat(`Digite o preco: `);

        switch (tipo) {
          case 1:
            console.log(" Digite o segmento da bebida: ");
            segmento = readlinesync.question(``);
            consumivelController.criarConsumivel(
              new Bebida(
                consumivelController.gerarId(),
                nome,
                tipo,
                preco,
                segmento
              )
            );

            break;
          case 2:
            console.log("digite o tipo de sabor da comida: ");
            tipoSabor = readlinesync.question("");
            consumivelController.criarConsumivel(
              new Comida(
                consumivelController.gerarId(),
                nome,
                tipo,
                preco,
                tipoSabor
              )
            );
            break;
        }
        keyPress();
        break;

      case 2:
        console.log("listar todos os consumiveis");
        consumivelController.listarTodos();

        keyPress();

        break;

      case 3:
        console.log("Consultar o consumivel");
        console.log("Digite o id do consumivel: ");
        id = readlinesync.questionInt("");

        consumivelController.buscaPorId(id);

        keyPress();
        break;

      case 4:
        console.log("atualizar produto");

        id = readlinesync.questionInt("Digite o Id do Produto: ");

        // Verifica se o Produto existe
        let consumivel = consumivelController.buscarNoArray(id);

        if (consumivel !== null) {
          nome = readlinesync.question("Digite o Nome do Consumivel: ");
          tipo = consumivel.tipo;
          preco = readlinesync.questionFloat("Digite o preco: ");

          switch (tipo) {
            case 1:
              segmento = readlinesync.question("Digite o Nome do Segmento: ");
              consumivelController.atualizarConsumivel(
                new Bebida(id, nome, tipo, preco, segmento)
              );
              break;

            case 2:
              tipoSabor = readlinesync.question("Digite o tipo do sabor: ");

              consumivelController.atualizarConsumivel(
                new Comida(id, nome, tipo, preco, tipoSabor)
              );
              break;
          }
        } else console.log("Produto não Encontrado!");

        keyPress(); // Aqui já é o final do case, então não precisa de mais um keyPress.
        break;

      case 5:
        console.log("deletar produto");
        console.log("apagar conta: ");
        console.log("Digite o id do consumiveol: ");
        id = readlinesync.questionInt("");

        consumivelController.deletarConsumivel(id);
        break;
        keyPress();
        break;
    }
  }
}

function menu(): void {
  console.log(colors.fg.blue);
  console.log("\n**************************************\n");

  console.log("*          Bar do Zoio De Gato           *\n");

  console.log("****************************************");
  console.log("1 - Criar alimento");
  console.log("2 - listar todos os alimentos");
  console.log("3 - consultar alimento por id");
  console.log("4 - atualizar alimento");
  console.log("5 - deletar alimento");
  console.log("0 - sair do bar do Zoio De Gato");
  console.log("**************************************");
  console.log(colors.reset);
}
function about(): void {
  console.log(colors.fg.blue);
  console.log("**************************************");
  console.log("bar do Zoio de Gato ");
  console.log("**************************************");
  console.log("Projeto desenvolvido por: João Henrique");
  console.log("git hub: https://github.com/Jhacss?tab=repositories");
  console.log(colors.reset);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
