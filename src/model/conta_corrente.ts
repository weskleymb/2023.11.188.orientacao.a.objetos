import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
  
  // atributos
  private _taxa: number = 0.01;

  // sobrescrevendo o comportamento de sacar
  sacar(valor: number): boolean {
    const valorSacar = valor + valor * this._taxa;
    return super.sacar(valorSacar);
  } 
  
}
