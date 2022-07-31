const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const idadeMinima = data.species.find((element) => element.name === animal);
  return idadeMinima.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
