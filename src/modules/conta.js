// criar um modelo de conta bancaria
export class Conta {

    // definindo os atributos
    // definindo o construtor
    constructor(agencia, numero, titular) {
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    // definindo os metodos

}

contaTiago = new Conta(123, 123456, "Tiago");
console.log(contaTiago);
