<<<<<<< HEAD
import { Conta } from "./model/conta.js";
import { ContaCorrente } from "./model/conta_corrente.js";
import { Pessoa } from "./model/pessoa.js";

const mauricio = new Pessoa("Mauricio", "123.456.789-00", 30, "M");
const contaMauricio = new ContaCorrente(1001, 1, mauricio);

contaMauricio.depositar(1000);

const pedro = new Pessoa("Pedro", "123.456.789-00", 30, "M");

window.alert(`Correntista: ${contaMauricio.titular.nome}`);
window.alert(`Saldo: ${contaMauricio.saldo}`);
=======
import { ContaCorrente } from "./model/conta_corrente.js";
import { Pessoa } from "./model/pessoa.js";

const joao = new Pessoa("João", "111.111.111-11", 25, "M");
const contaJoao = new ContaCorrente(1, 111, joao);

contaJoao.depositar(1000);

window.alert(contaJoao);
console.log(contaJoao);
>>>>>>> 24a3d07e5b7944ea37f95da8e8297f2c6be61a01
