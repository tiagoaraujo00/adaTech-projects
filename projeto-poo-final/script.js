class HistoricoTransacoes {
  constructor() {
    this._transacoes = [];
  }

  adicionarTransacao(mensagem) {
    this._transacoes.push(mensagem);
  }

  obterTransacoes() {
    return this._transacoes;
  }
}

class Cliente {
  constructor(nome) {
    this._nome = nome;
  }

  getNome() {
    return this._nome;
  }
}

class Conta {
  constructor(cliente, saldo, historico) {
    this._cliente = cliente;
    this._saldo = saldo;
    this._historico = historico;
  }

  getCliente() {
    return this._cliente;
  }

  getSaldo() {
    return this._saldo;
  }

  depositar(valor) {
    this._saldo += valor;
    const mensagem = `Depósito de ${valor} realizado por ${this._cliente.getNome()}. Novo saldo: ${this._saldo}`;
    this._historico.adicionarTransacao(mensagem);
    this.exibirResultado(mensagem);
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
      const mensagem = `Saque de ${valor} realizado por ${this._cliente.getNome()}. Novo saldo: ${this._saldo}`;
      this._historico.adicionarTransacao(mensagem);
      this.exibirResultado(mensagem);
    } else {
      const mensagem = `Saldo insuficiente para saque por ${this._cliente.getNome()}.`;
      this._historico.adicionarTransacao(mensagem);
      this.exibirResultado(mensagem);
    }
  }

  realizarOperacao(valor, tipoOperacao) {
    const mensagem = `Operação padrão: Valor ${valor}, Tipo ${tipoOperacao}, Cliente ${this._cliente.getNome()}`;
    this.exibirResultado(mensagem);
  }

  exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultadoOperacoes");
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`;
  }
}

class ContaCorrente extends Conta {
  constructor(cliente, saldo, limite, historico) {
    super(cliente, saldo, historico);
    this._limite = limite;
  }

  getLimite() {
    return this._limite;
  }

  sacar(valor) {
    const saldoDisponivel = super.getSaldo() + this._limite;
    if (valor <= saldoDisponivel) {
      super.sacar(valor);
    } else {
      const mensagem = `Limite de saque excedido para ${super.getCliente().getNome()}.`;
      super.exibirResultado(mensagem);
      this._historico.adicionarTransacao(mensagem);
    }
  }

  realizarOperacao(valor, tipoOperacao) {
    const mensagem = `Operação realizada em Conta Corrente: Valor ${valor}, Tipo ${tipoOperacao}, Cliente ${this._cliente.getNome()}`;
    this.exibirResultado(mensagem);
    this._historico.adicionarTransacao(mensagem);
  }
}

class ContaPoupanca extends Conta {
  constructor(cliente, saldo, juros, historico) {
    super(cliente, saldo, historico);
    this._juros = juros;
  }

  realizarOperacao(valor, tipoOperacao) {
    const mensagem = `Operação realizada em Conta Poupanca: Valor ${valor}, Tipo ${tipoOperacao}, Cliente ${this._cliente.getNome()}`;
    this.exibirResultado(mensagem);
    this._historico.adicionarTransacao(mensagem);
  }
}

const historico = new HistoricoTransacoes();

function realizarOperacao() {
  const nomeCliente = document.getElementById("nomeCliente").value;
  const tipoOperacaoElement = document.querySelector('input[name="tipoOperacao"]:checked');
  const tipoOperacao = tipoOperacaoElement ? tipoOperacaoElement.value : null;

  if (!tipoOperacao) {
    alert("Por favor, selecione o tipo de operação.");
    return;
  }

  const valorOperacao = parseFloat(document.getElementById("valorOperacao").value);

  if (isNaN(valorOperacao)) {
    alert("Por favor, informe um valor válido para a operação.");
    return;
  }

  const cliente = new Cliente(nomeCliente);
  const contaCorrente = new ContaCorrente(cliente, 1000, 500, historico);
  const contaPoupanca = new ContaPoupanca(cliente, 2000, 2, historico);

  if (tipoOperacao.toLowerCase() === "débito") {
    contaCorrente.realizarOperacao(valorOperacao, tipoOperacao);
  } else if (tipoOperacao.toLowerCase() === "crédito") {
    contaPoupanca.realizarOperacao(valorOperacao, tipoOperacao);
  } else {
    console.log("Tipo de operação inválido.");
  }
}

function mostrarHistorico() {
  const historicoDiv = document.getElementById("historicoTransacoes");
  historicoDiv.innerHTML = "<h2>Histórico de Transações</h2>";

  // Exibir histórico de transações
  const transacoes = historico.obterTransacoes();
  if (transacoes.length === 0) {
    historicoDiv.innerHTML += "<p>Nenhuma transação realizada.</p>";
  } else {
    transacoes.forEach(transacao => {
      historicoDiv.innerHTML += `<p>${transacao}</p>`;
    });
  }
}

function limparResultado() {
  const resultadoDiv = document.getElementById("resultadoOperacoes");
  resultadoDiv.innerHTML = "";
}
