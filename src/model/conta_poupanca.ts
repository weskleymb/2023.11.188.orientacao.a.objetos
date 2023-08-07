import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    private _rendimento: number = 0.01;

    render() {
        const valorRendimento = this.saldo * this._rendimento;
        this.depositar(valorRendimento);
    }

}