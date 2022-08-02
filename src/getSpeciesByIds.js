const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // species
  // const rebeldes = pilots.filter(pilot => pilot.faction === "Rebels")
  // return species.filter((animal) => animal.id === ids);
  // const idadeMinima = data.species.find((element) => element.name === animal);
  // return idadeMinima.residents.every((resident) => resident.age >= age);
  if (ids.length < 1) { return []; }
  return data.species.filter((element) => element.id === ids[0] || element.id === ids[1]);
}
module.exports = getSpeciesByIds;
