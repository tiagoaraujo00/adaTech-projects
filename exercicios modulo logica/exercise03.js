const calcularIMC = (pessoas) => {
  pessoas.forEach((pessoa) => {
    const imc = pessoa.peso / Math.pow(pessoa.altura, 2);
    console.log(`O IMC de ${pessoa.nome} é ${imc.toFixed(2)}`);
  });
};

const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
];

calcularIMC(pessoas);
