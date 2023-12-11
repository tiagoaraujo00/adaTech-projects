class Produto {
  constructor(nome, preco, quantidadeEmEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEmEstoque = quantidadeEmEstoque;
  }

  calcularValorTotalEmEstoque() {
    return this.preco * this.quantidadeEmEstoque;
  }

  adicionarAoEstoque(qtd) {
    this.quantidadeEmEstoque += qtd;
  }

  removerDoEstoque(qtd) {
    if (this.quantidadeEmEstoque >= qtd) {
      this.quantidadeEmEstoque -= qtd;
    } else {
      console.log("Quantidade insuficiente em estoque.");
    }
  }
}

function exibirInformacoes(produto) {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Quantidade em Estoque: ${produto.quantidadeEmEstoque}`);
  console.log(`Valor Total em Estoque: ${produto.calcularValorTotalEmEstoque()}`);
  console.log();
}

let produto1 = new Produto("Notebook", 2000, 5);
let produto2 = new Produto("Smartphone", 800, 10);
let produto3 = new Produto("Fones de Ouvido", 100, 20);

exibirInformacoes(produto1);
produto1.adicionarAoEstoque(3);
exibirInformacoes(produto1);

exibirInformacoes(produto2);
produto2.removerDoEstoque(5);
exibirInformacoes(produto2);

exibirInformacoes(produto3);
produto3.adicionarAoEstoque(10);
exibirInformacoes(produto3);
