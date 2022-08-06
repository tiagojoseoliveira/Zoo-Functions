const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function week(weekday) {
  if (weekday === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: `Open from ${data.hours[weekday]
      .open}am until ${data.hours[weekday].close}pm`,
    exhibition: species.filter((bixo) => bixo.availability.includes(weekday))
      .map((bixo) => bixo.name),
  };
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animal = species.map((specie) => specie.name);
  const weekdays = Object.keys(data.hours);
  if (animal.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (weekdays.includes(scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = week(scheduleTarget);
    return result;
  }
  return weekdays.reduce((acc, curr) => {
    acc[curr] = week(curr);
    return acc;
  }, {});
}
getSchedule();

module.exports = getSchedule;