class ContaBancaria {
  constructor(numeroConta, saldoInicial, titular) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.titular = titular;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado com sucesso! Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para realizar o saque!");
    }
  }
}

let conta1 = new ContaBancaria(123, 2000, "Tiago");
let conta2 = new ContaBancaria(456, 600, "Maria");

conta1.depositar(200);

conta2.sacar(100);

conta1.sacar(1500);
