export class Pessoa {
    nome;
    cpf;
    idade;
    sexo;
    // Atributos e construtor
    constructor(nome, cpf, idade, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
    }
    // Métodos
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getIdade() {
        return this.idade;
    }
    getSexo() {
        return this.sexo;
    }
    toString() {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Idade: ${this.idade}, Sexo: ${this.sexo}`;
    }
}
