import { Pessoa } from "./pessoa.js";

// criar um modelo de conta bancaria
export abstract class Conta {
    
  // atributos
    private _agencia: number;
    private _numero: number;
    private _titular: Pessoa;
    private _saldo: number = 0.0;
  
    // construtor
    constructor(agencia: number, numero: number, titular: Pessoa) {
      this._agencia = agencia;
      this._numero = numero;
      this._titular = titular;
    }
  
    // metodos
    get agencia(): number {
      return this._agencia;
    }
  
    set agencia(agencia: number) {
      this._agencia = agencia;
    }
  
    get numero(): number {
      return this._numero;
    }
  
    set numero(numero: number) {
      this._numero = numero;
    }
  
    get titular(): Pessoa {
      return this._titular;
    }
  
    set titular(titular: Pessoa) {
      this._titular = titular;
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

  }
  