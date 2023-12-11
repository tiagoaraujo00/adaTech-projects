class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

let person1 = new Pessoa("Tiago", 25, "São Paulo");
let person2 = new Pessoa("João", 30, "Rio de Janeiro");
let person3 = new Pessoa("Maria", 22, "Belo Horizonte");

console.log("Pessoa 1:");
console.log("Nome:", person1.nome);
console.log("Idade:", person1.idade);
console.log("Cidade:", person1.cidade);

console.log("Pessoa 2:");
console.log("Nome:", person2.nome);
console.log("Idade:", person2.idade);
console.log("Cidade:", person2.cidade);

console.log("Pessoa 3:");
console.log("Nome:", person3.nome);
console.log("Idade:", person3.idade);
console.log("Cidade:", person3.cidade);
