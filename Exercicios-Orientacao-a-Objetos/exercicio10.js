class Jogo {
  constructor(nome, genero, classificacaoEtaria) {
    this.nome = nome;
    this.genero = genero;
    this.classificacaoEtaria = classificacaoEtaria;
  }
}

let jogo1 = new Jogo("The Legend of Zelda: Breath of the Wild", "Ação/Aventura", "10+");
let jogo2 = new Jogo("FIFA 22", "Esportes", "E");
let jogo3 = new Jogo("Cyberpunk 2077", "RPG", "18+");

console.log("Jogo 1:");
console.log("Nome:", jogo1.nome);
console.log("Gênero:", jogo1.genero);
console.log("Classificação Etária:", jogo1.classificacaoEtaria);

console.log("Jogo 2:");
console.log("Nome:", jogo2.nome);
console.log("Gênero:", jogo2.genero);
console.log("Classificação Etária:", jogo2.classificacaoEtaria);

console.log("Jogo 3:");
console.log("Nome:", jogo3.nome);
console.log("Gênero:", jogo3.genero);
console.log("Classificação Etária:", jogo3.classificacaoEtaria);
