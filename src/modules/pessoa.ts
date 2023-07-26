export class Pessoa {

    private nome: string;
    private cpf: string;
    private idade: number;
    private sexo: string;

    constructor(nome: string, 
                cpf: string, 
                idade: number, 
                sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
    }

}