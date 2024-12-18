import { Alimento } from "./Alimento";

export class Comida extends Alimento {
  private _tipoSabor;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    tipoSabor: string
  ) {
    super(id, nome, tipo, preco);
    this._tipoSabor = tipoSabor;
  }
  public get seguimento(): string {
    return this._tipoSabor;
  }

  public set seguimento(value: string) {
    this._tipoSabor = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Tipo do sabor: ${this._tipoSabor}`);
  }
}
