import { Consumivel } from "./Consumivel";

export class Bebida extends Consumivel {
  
  private _segmento: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    segmento: string
  ) {
    super(id, nome, tipo, preco);
    this._segmento = segmento;
  }
  public get segmento(): string {
    return this._segmento;
  }

  public set segmento(value: string) {
    this._segmento = value;
  }

  public visualizar(): void{

    super.visualizar();
    console.log(`Segmento: ${this._segmento}`);
  }
}
