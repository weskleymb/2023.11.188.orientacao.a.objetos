<<<<<<< HEAD
export class Pessoa {

    // atributos
    private _nome: string;
    private _cpf: string;
    private _idade: number;
    private _sexo: string;

    // construtor
    constructor(nome: string, cpf: string, idade: number, sexo: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._idade = idade;
        this._sexo = sexo;
    }
    
    // métodos
    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        const nomeValido = nome.trim().length >= 2;
        if (nomeValido) {
            this._nome = nome.toUpperCase().trim();
        }
        throw new Error("Nome inválido");
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(sexo: string) {    
        this._sexo = sexo;
    }

=======
export class Pessoa {

    // Atributos e construtor
    constructor(private nome: string,
        private cpf: string,
        private idade: number,
        private sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
    }

    // Métodos
    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getIdade(): number {
        return this.idade;
    }

    getSexo(): string {
        return this.sexo;
    }

    toString(): string {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Idade: ${this.idade}, Sexo: ${this.sexo}`;
    }

>>>>>>> 24a3d07e5b7944ea37f95da8e8297f2c6be61a01
}