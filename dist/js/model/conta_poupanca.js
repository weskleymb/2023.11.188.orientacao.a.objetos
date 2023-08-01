import { Conta } from "./conta.js";
export class ContaPoupanca extends Conta {
    _rendimento = 0.01;
    render() {
        const valorRendimento = this.saldo * this._rendimento;
        this.depositar(valorRendimento);
    }
}
