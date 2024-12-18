import { Consumivel } from "./Consumivel";

export class Comida extends Consumivel {
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

  public get tipoSabor(): string {
    return this._tipoSabor;
  }

  public set tipoSabor(value: string) {
    this._tipoSabor = value;
  }

  public visualizar(): void{

    super.visualizar();
    console.log(`Tipo do sabor: ${this._tipoSabor}`);
  }
}
