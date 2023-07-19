import { Carro } from './modules/carro.js';
import { ContaCorrente } from './modules/conta-corrente.js';
import { Conta } from './modules/conta.js';

const contaTiago = new Conta(123, 123456, "Tiago");
contaTiago.depositar(1000);

const contaMarcos = new ContaCorrente(123, 111111, "Marcos");
contaMarcos.depositar(1000);

contaMarcos.transferir(contaTiago, 100);

console.log(contaTiago);
console.log(contaMarcos);
