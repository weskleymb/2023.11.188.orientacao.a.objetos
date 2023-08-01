import { ContaCorrente } from "./model/conta_corrente.js";
import { Pessoa } from "./model/pessoa.js";

const joao = new Pessoa("João", "111.111.111-11", 25, "M");
const contaJoao = new ContaCorrente(1, 111, joao);

contaJoao.depositar(1000);

window.alert(contaJoao);
console.log(contaJoao);