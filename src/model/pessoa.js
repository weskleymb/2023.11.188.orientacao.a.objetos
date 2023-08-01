"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    // Atributos e construtor
    function Pessoa(nome, cpf, idade, sexo) {
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
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.getSexo = function () {
        return this.sexo;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
