class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lados = [lado1, lado2, lado3];
  }

  verificarTrianguloValido() {
    return this.lados.every((lado, index, array) => lado < array[(index + 1) % 3] + array[(index + 2) % 3]);
  }

  calcularArea() {
    if (this.verificarTrianguloValido()) {
      const s = this.lados.reduce((sum, lado) => sum + lado, 0) / 2;
      return Math.sqrt(s * this.lados.reduce((prod, lado) => prod * (s - lado), 1));
    } else {
      console.log("Os lados não formam um triângulo válido.");
      return null;
    }
  }
}

let triangulo1 = new Triangulo(3, 4, 5);
let triangulo2 = new Triangulo(5, 12, 13);
let triangulo3 = new Triangulo(2, 2, 5);

function mostrarResultados(triangulo) {
  console.log("Lados:", triangulo.lados.join(", "));
  console.log("É um triângulo válido:", triangulo.verificarTrianguloValido());
  console.log("Área:", triangulo.calcularArea());
}

console.log("Triângulo 1:");
mostrarResultados(triangulo1);

console.log("Triângulo 2:");
mostrarResultados(triangulo2);

console.log("Triângulo 3:");
mostrarResultados(triangulo3);
