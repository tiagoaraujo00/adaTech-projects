class Cliente {
  constructor(nome) {
      this.nome = nome;
  }
}

class Conta {
  constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
  }

  exibeSaldo() {
      console.log(`Saldo de ${this.titular.nome}: R$ ${this.saldo.toFixed(2)}`);
  }

  realizaOperacao(valor) {
      console.log(`Movimentação no valor de R$ ${valor.toFixed(2)} realizada.`);
  }
}

class ContaCorrente extends Conta {
  constructor(titular, saldo, limite) {
      super(titular, saldo);
      this.limite = limite;
  }

  realizarOperacao(valor) {
      if (valor > this.saldo + this.limite) {
          console.log('Operação não realizada. Limite excedido.');
          return;
      }

      this.saldo -= valor;
      console.log(`Operação de R$ ${valor.toFixed(2)} realizada na Conta Corrente de ${this.titular.nome}.`);
  }
}

class ContaPoupanca extends Conta {
  realizarOperacao(valor) {
      if (valor > this.saldo) {
          console.log('Operação não permitida. Saldo insuficiente.');
          return;
      }

      this.saldo -= valor;
      console.log(`Operação de R$ ${valor.toFixed(2)} realizada na Conta Poupança de ${this.titular.nome}.`);
  }
}

class OperacaoFinanceira {
  static deposito(conta, valor) {
      conta.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado na conta de ${conta.titular.nome}.`);
  }

  static saque(conta, valor) {
      if (valor > conta.saldo) {
          console.log('Saque não permitido. Saldo insuficiente.');
          return;
      }

      conta.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado na conta de ${conta.titular.nome}.`);
  }
}

class Transacao {
  constructor(origem, destino, valor) {
      this.origem = origem;
      this.destino = destino;
      this.valor = valor;
  }

  exibirDetalhes() {
      console.log(`Transação de R$ ${this.valor.toFixed(2)} de ${this.origem.titular.nome} para ${this.destino.titular.nome}.`);
  }
}

class HistoricoTransacoes {
  constructor() {
      this.transacoes = [];
  }

  adicionarTransacao(transacao) {
      this.transacoes.push(transacao);
      console.log('Transação registrada no histórico.');
  }

  exibirHistorico() {
      console.log('Histórico de Transações:');
      this.transacoes.forEach(transacao => {
          transacao.exibirDetalhes();
      });
  }
}

const cliente1 = new Cliente('Alice');
const contaCorrenteAlice = new ContaCorrente(cliente1, 1000, 500);
const contaPoupancaAlice = new ContaPoupanca(cliente1, 2000);

const cliente2 = new Cliente('Bob');
const contaCorrenteBob = new ContaCorrente(cliente2, 1500, 800);
const contaPoupancaBob = new ContaPoupanca(cliente2, 3000);

const historico = new HistoricoTransacoes();

OperacaoFinanceira.deposito(contaCorrenteAlice, 300);
OperacaoFinanceira.saque(contaPoupancaBob, 500);

const transacao1 = new Transacao(contaCorrenteAlice, contaPoupancaBob, 200);
historico.adicionarTransacao(transacao1);

historico.exibirHistorico();
