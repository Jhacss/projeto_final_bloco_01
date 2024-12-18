import { Alimento } from "./Alimento";

export class Bebida extends Alimento {
  private _seguimento;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    seguimnento: string
  ) {
    super(id, nome, tipo, preco);
    this._seguimento = seguimnento;
  }
  public get seguimento(): string {
    return this._seguimento;
  }

  public set seguimento(value: string) {
    this._seguimento = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Seguimento: ${this._seguimento}`);
  }
}
