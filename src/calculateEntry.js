const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // ];
  if (entrants === {} || entrants === undefined) {
    return 0;
  }  
  const child = (entrants.filter((entrant) => entrant.age < 18)).length;
  // console.log(child.length);
  const adult = (entrants.filter((entrant) => entrant.age >= 18)).length;
  const senior = (entrants.filter((entrant) => entrant.age >= 50)).length;    
  return {
  child, adult, senior,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !Object.values(entrants).length) {
    return 0;
  }
}

module.exports = { calculateEntry, countEntrants };
