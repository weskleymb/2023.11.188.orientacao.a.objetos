import { Pessoa } from "./pessoa";

// criar um modelo de conta bancaria
export abstract class Conta {
    // definindo os atributos
    private _agencia: number;
    private _numero: number;
    private _titular: Pessoa;
    private _saldo: number = 0.0;
  
    // definindo o construtor
    constructor(agencia: number, numero: number, titular: Pessoa) {
      this._agencia = agencia;
      this._numero = numero;
      this._titular = titular;
    }
  
    // definindo os metodos
    get agencia(): number {
      return this._agencia;
    }
  
    set agencia(novaAgencia: number) {
      this._agencia = novaAgencia;
    }
  
    get numero(): number {
      return this._numero;
    }
  
    set numero(novoNumero: number) {
      this._numero = novoNumero;
    }
  
    get titular(): Pessoa {
      return this._titular;
    }
  
    set titular(novoTitular: Pessoa) {
      if (novoTitular === null) {
        throw new Error("Titular não pode ser em branco");
      }
      this._titular = novoTitular;
    }
  
    get saldo(): number {
      return this._saldo;
    }
  
    depositar(valor: number): boolean {
      const podeDepositar = valor > 0;
      if (podeDepositar) {
        this._saldo += valor;
        return true;
      }
      return false;
    }
  
    sacar(valor: number): boolean {
      const podeSacar = valor > 0 && valor <= this._saldo;
      if (podeSacar) {
        this._saldo -= valor;
        return true;
      }
      return false;
    }
  
    transferir(contaDestino: Conta, valor: number): boolean {
      const podeTransferir = this.sacar(valor);
      if (podeTransferir) {
        return contaDestino.depositar(valor);
      }
      return false;
    }
  
    toString() {
      return `Agencia: ${this._agencia}, 
              Conta: ${this._numero}, 
              Titular: ${this._titular.getNome()}, 
              Saldo: R$ ${this._saldo.toFixed(2)}`;
    }
  }
  