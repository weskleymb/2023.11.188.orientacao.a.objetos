// criar um modelo de conta bancaria
export class Conta {
    // atributos
    _agencia;
    _numero;
    _titular;
    _saldo = 0.0;
    // construtor
    constructor(agencia, numero, titular) {
        this._agencia = agencia;
        this._numero = numero;
        this._titular = titular;
    }
    // metodos
    get agencia() {
        return this._agencia;
    }
    set agencia(agencia) {
        this._agencia = agencia;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get titular() {
        return this._titular;
    }
    set titular(titular) {
        this._titular = titular;
    }
    get saldo() {
        return this._saldo;
    }
    depositar(valor) {
        const podeDepositar = valor > 0;
        if (podeDepositar) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    sacar(valor) {
        const podeSacar = valor > 0 && valor <= this._saldo;
        if (podeSacar) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    transferir(contaDestino, valor) {
        const podeTransferir = this.sacar(valor);
        if (podeTransferir) {
            return contaDestino.depositar(valor);
        }
        return false;
    }
}
