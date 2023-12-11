class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

let retangulo1 = new Retangulo(5, 10);
let retangulo2 = new Retangulo(8, 15);
let retangulo3 = new Retangulo(12, 6);

console.log("Retângulo 1:");
console.log("Largura:", retangulo1.largura);
console.log("Altura:", retangulo1.altura);
console.log("Área:", retangulo1.calcularArea());

console.log("Retângulo 2:");
console.log("Largura:", retangulo2.largura);
console.log("Altura:", retangulo2.altura);
console.log("Área:", retangulo2.calcularArea());

console.log("Retângulo 3:");
console.log("Largura:", retangulo3.largura);
console.log("Altura:", retangulo3.altura);
console.log("Área:", retangulo3.calcularArea());
