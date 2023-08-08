export class Pessoa {
    // atributos
    _nome;
    _cpf;
    _idade;
    _sexo;
    // construtor
    constructor(nome, cpf, idade, sexo) {
        this._nome = nome;
        this._cpf = cpf;
        this._idade = idade;
        this._sexo = sexo;
    }
    logar(usuario, senha) {
        throw new Error("Method not implemented.");
    }
    deslogar() {
        throw new Error("Method not implemented.");
    }
    // métodos
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        const nomeValido = nome.trim().length >= 2;
        if (nomeValido) {
            this._nome = nome.toUpperCase().trim();
        }
        throw new Error("Nome inválido");
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
}
