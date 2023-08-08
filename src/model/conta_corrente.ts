<<<<<<< HEAD
import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
  
  // atributos
  private _taxa: number = 0.01;

  // sobrescrevendo o comportamento de sacar
  sacar(valor: number): boolean {
    const valorSacar = valor + valor * this._taxa;
    return super.sacar(valorSacar);
  } 
  
}
=======
import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
	// definindo os atributos
	private _taxa: number = 0.01;

	// sobrescrevendo o comportamento de sacar
	sacar(valor: number): boolean {
		const valorSacar = valor + valor * this._taxa;
		return super.sacar(valorSacar);
	}
}
>>>>>>> 24a3d07e5b7944ea37f95da8e8297f2c6be61a01
