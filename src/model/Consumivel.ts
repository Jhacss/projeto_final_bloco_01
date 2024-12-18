export abstract class Consumivel {
  private _id: number;
  private _nome: string;
  private _tipo: number;
  private _preco: number;

  constructor(id: number, nome: string, tipo: number, preco: number) {
    this._id = id;
    this._nome = nome;
    this._tipo = tipo;
    this._preco = preco;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get preco(): number {
    return this._preco;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "bebida";
        break;
      case 2:
        tipo = "comida";
        break;
    }
    console.log("==============================================");
    console.log("=============     Consumiveis   ==============");
    console.log("==============================================");
    console.log(` ID do consumivel:  ${this._id}`);
    console.log(` Nome do consumivel: ${this._nome}`);
    console.log(` Tipo do consumivel: ${tipo}`);
    console.log(` Preco do consumivel: ${this._preco}`);
  }
}
