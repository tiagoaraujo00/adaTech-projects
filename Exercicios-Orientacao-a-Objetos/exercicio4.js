class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

let circulo1 = new Circulo(8);
let circulo2 = new Circulo(12);
let circulo3 = new Circulo(20);


console.log("Círculo 1:");
console.log("Raio:", circulo1.raio);
console.log("Área:", circulo1.calcularArea());
console.log("Perímetro:", circulo1.calcularPerimetro());

console.log("Círculo 2:");
console.log("Raio:", circulo2.raio);
console.log("Área:", circulo2.calcularArea());
console.log("Perímetro:", circulo2.calcularPerimetro());

console.log("Círculo 3:");
console.log("Raio:", circulo3.raio);
console.log("Área:", circulo3.calcularArea());
console.log("Perímetro:", circulo3.calcularPerimetro());
