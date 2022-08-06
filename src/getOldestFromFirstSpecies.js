const data = require('../data/zoo_data');

function Person(id) {
  return data.employees.find((objetoEmpregado) => objetoEmpregado.id === id);
}

function Specie(id) {
  const animal = Person(id).responsibleFor[0];
  return data.species.find((element) => element.id === animal);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const oldAnimal = Specie(id).residents.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      acc.name = curr.name;
      acc.sex = curr.sex;
      acc.age = curr.age;
    }
    return acc;
  }, { name: '', sex: '', age: 0 });
  return [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
