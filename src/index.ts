import { Conta } from "./model/conta.js";
import { ContaCorrente } from "./model/conta_corrente.js";
import { Pessoa } from "./model/pessoa.js";

const mauricio = new Pessoa("Mauricio", "123.456.789-00", 30, "M");
const contaMauricio = new ContaCorrente(1001, 1, mauricio);

contaMauricio.depositar(1000);

const pedro = new Pessoa("Pedro", "123.456.789-00", 30, "M");

window.alert(`Correntista: ${contaMauricio.titular.nome}`);
window.alert(`Saldo: ${contaMauricio.saldo}`);
