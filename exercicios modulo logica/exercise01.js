const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

const countFoodType = (lista) => {
  const tipoPorItem = {
    'banana': 'fruta', 'maçã': 'fruta', 'abacaxi': 'fruta', 'melancia': 'fruta', 'laranja': 'fruta', 'limão': 'fruta',
    'cenoura': 'legume', 'batata': 'legume', 'brócolis': 'legume', 'abóbora': 'legume', 'tomate': 'legume', 'alho-poró': 'legume',
    'alface': 'verdura', 'espinafre': 'verdura', 'rúcula': 'verdura', 'couve': 'verdura', 'agrião': 'verdura', 'acelga': 'verdura'
  };

  const contadores = {
    fruta: 0,
    legume: 0,
    verdura: 0
  };

  lista.forEach((item) => {
    const tipo = tipoPorItem[item];
    if (tipo) {
      contadores[tipo]++;
    }
  });

  return contadores;
};

const resultado = countFoodType(hotifrutis)
console.log(resultado);