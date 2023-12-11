class Aluno {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }

    const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
    return somaNotas / this.notas.length;
  }
}

let aluno1 = new Aluno("João", "123", [7, 8, 9]);
let aluno2 = new Aluno("Maria", "456", [8, 9, 10]);
let aluno3 = new Aluno("Carlos", "789", [6, 7, 8]);

console.log("Aluno 1:");
console.log("Nome:", aluno1.nome);
console.log("Matrícula:", aluno1.matricula);
console.log("Notas:", aluno1.notas);
console.log("Média:", aluno1.calcularMedia());

console.log("Aluno 2:");
console.log("Nome:", aluno2.nome);
console.log("Matrícula:", aluno2.matricula);
console.log("Notas:", aluno2.notas);
console.log("Média:", aluno2.calcularMedia());

console.log("Aluno 3:");
console.log("Nome:", aluno3.nome);
console.log("Matrícula:", aluno3.matricula);
console.log("Notas:", aluno3.notas);
console.log("Média:", aluno3.calcularMedia());
