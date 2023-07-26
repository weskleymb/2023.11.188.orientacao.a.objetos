import { Carro } from './modules/carro.js';
import { ContaCorrente } from './modules/conta-corrente.js';
import { ContaPoupanca } from './modules/conta-poupanca.js';
import { Conta } from './modules/conta.js';
import { Pessoa } from './modules/pessoa.js';

const ramon = new Pessoa("Ramon", "123456789", 39, "M");
const contaRamon = new ContaCorrente(123, 123, ramon);

const mauricio = new Pessoa("Mauricio", "987654321", 35, "M");
const contaMauricio = new ContaPoupanca(412, 36, mauricio);

contaRamon.depositar(3000);
contaMauricio.depositar(2500);

contaRamon.transferir(contaMauricio, 1000);

window.alert(contaRamon);
window.alert(contaMauricio);

const conta = new Conta()