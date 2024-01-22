const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const getAnimalLocation = data.species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[acc.location] = [curr.name];
      return acc;
    } acc[curr.location].push(curr.name);
    return acc;
  }, {});
  return getAnimalLocation;
}

module.exports = getAnimalMap;
