class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

let carro1 = new Carro("Toyota", "Camry", 2020);
let carro2 = new Carro("Ford", "Explorer", 2022);
let carro3 = new Carro("Chevrolet", "Malibu", 2021);

console.log("Carro 1:");
console.log("Marca:", carro1.marca);
console.log("Modelo:", carro1.modelo);
console.log("Ano:", carro1.ano);

console.log("Carro 2:");
console.log("Marca:", carro2.marca);
console.log("Modelo:", carro2.modelo);
console.log("Ano:", carro2.ano);

console.log("Carro 3:");
console.log("Marca:", carro3.marca);
console.log("Modelo:", carro3.modelo);
console.log("Ano:", carro3.ano);
