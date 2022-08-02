const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
    if (!employeeName) { return {}; }
    const pessoa = data.employees.find((element) => 
    element.firstName === employeeName || element.lastName === employeeName);
    return pessoa;
}

module.exports = getEmployeeByName;
