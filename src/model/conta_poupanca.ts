<<<<<<< HEAD
import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    private _rendimento: number = 0.01;

    render() {
        const valorRendimento = this.saldo * this._rendimento;
        this.depositar(valorRendimento);
    }

}
=======
import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    private _rendimento: number = 0.01;

    render() {
        const valorRendimento = this.saldo * this._rendimento;
        this.depositar(valorRendimento);
    }

}
>>>>>>> 24a3d07e5b7944ea37f95da8e8297f2c6be61a01
