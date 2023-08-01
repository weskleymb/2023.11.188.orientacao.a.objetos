"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
// criar um modelo de conta bancaria
var Conta = /** @class */ (function () {
    // definindo o construtor
    function Conta(agencia, numero, titular) {
        this._saldo = 0.0;
        this._agencia = agencia;
        this._numero = numero;
        this._titular = titular;
    }
    Object.defineProperty(Conta.prototype, "agencia", {
        // definindo os metodos
        get: function () {
            return this._agencia;
        },
        set: function (novaAgencia) {
            this._agencia = novaAgencia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (novoNumero) {
            this._numero = novoNumero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "titular", {
        get: function () {
            return this._titular;
        },
        set: function (novoTitular) {
            if (novoTitular === null) {
                throw new Error("Titular não pode ser em branco");
            }
            this._titular = novoTitular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.depositar = function (valor) {
        var podeDepositar = valor > 0;
        if (podeDepositar) {
            this._saldo += valor;
            return true;
        }
        return false;
    };
    Conta.prototype.sacar = function (valor) {
        var podeSacar = valor > 0 && valor <= this._saldo;
        if (podeSacar) {
            this._saldo -= valor;
            return true;
        }
        return false;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        var podeTransferir = this.sacar(valor);
        if (podeTransferir) {
            return contaDestino.depositar(valor);
        }
        return false;
    };
    Conta.prototype.toString = function () {
        return "Agencia: ".concat(this._agencia, ", \n              Conta: ").concat(this._numero, ", \n              Titular: ").concat(this._titular.getNome(), ", \n              Saldo: R$ ").concat(this._saldo.toFixed(2));
    };
    return Conta;
}());
exports.Conta = Conta;
