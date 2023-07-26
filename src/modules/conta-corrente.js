import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
  // definindo os atributos
  #taxa = 0.01;

  // sobrescrevendo o comportamento de sacar
  sacar(valor) {
    const valorSacar = valor + valor * this.#taxa;
    return super.sacar(valorSacar);
  }
}
