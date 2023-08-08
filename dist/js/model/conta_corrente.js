import { Conta } from "./conta.js";
export class ContaCorrente extends Conta {
    // atributos
    _taxa = 0.01;
    // sobrescrevendo o comportamento de sacar
    sacar(valor) {
        const valorSacar = valor + valor * this._taxa;
        return super.sacar(valorSacar);
    }
}
