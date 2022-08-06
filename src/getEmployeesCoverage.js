const data = require('../data/zoo_data');

function validandoInfo(object) {
  const idArr = data.employees.map((element) => element.id);
  const firstNameArr = data.employees.map((element) => element.firstName);
  const lastNameArr = data.employees.map((element) => element.lastName);
  const fullNameArr = [...firstNameArr, ...lastNameArr];
  if (Object.keys(object)[0] === 'name') {
    if (fullNameArr.includes(Object.values(object)[0])) {
      return null;
    }
    throw new Error('Informações inválidas');
  }
  if (idArr.includes(Object.values(object)[0])) {
    return null;
  }
  throw new Error('Informações inválidas');
}

function getEmployeeByName(object) {
  const name = Object.values(object)[0];
  const person = data.employees.find((objetoE) => objetoE.firstName === name
    || objetoE.lastName === name);
  const animais = person.responsibleFor;
  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: animais.map((idAnimais) => data.species.find((el) => el.id === idAnimais).name),
    locations: animais.map((idAnimais) => data.species.find((el) => el.id === idAnimais).location),
  };
}

function getEmployeesCoverage(object) {
  // seu código aqui]
  if (!(object)) {
    return data.employees.map((employee) => getEmployeeByName({ name: employee.firstName }));
  }
  validandoInfo(object);
  if (Object.keys(object)[0] === 'name') {
    return getEmployeeByName(object);
  }
  if (Object.keys(object)[0] === 'id') {
    const objeto = Object.values(object)[0];
    const name = data.employees.find((objetoE) => objetoE.id === objeto).firstName;
    return getEmployeeByName({ name });
  }
}
module.exports = getEmployeesCoverage;
