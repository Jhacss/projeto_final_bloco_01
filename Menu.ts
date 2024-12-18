import readlinesync = require("readline-sync");
import { colors } from "./src/utill/Cores";

export function main() {
  let opcao: number;

  while (true) {

  menu();

  opcao = readlinesync.questionInt("Digite uma opcao: ");

  if (opcao === 0) {
    about();
    process.exit(0);
  }

  switch (opcao) {
    case 1:
      console.log("Criar produto");

      keyPress();
      break;

    case 2:
      console.log("listar todos os produtos");

      keyPress();
      break;

    case 3:
      console.log("Consultar aperitivo por id");

      keyPress();
      break;

    case 4:
      console.log("atualizar produto");

      keyPress();
      break;

    case 5:
      console.log("deletar produto");

      keyPress();
      break;
  }}
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
