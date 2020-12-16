const parseInput = require('./parseInput');
const validTickets = require('./validTickets');

function allValuesMatchRules(values, rule1, rule2) {
  for (i = 0; i < values.length; i++) {
    const value = values[i];
    if (
      (value < rule1.from || value > rule1.to)
       && 
      (value < rule2.from || value > rule2.to)) {
      return false;
    }
  }
  return true;
}

function solveFields(input, fields) {
  const parsedInput = parseInput(input);
  const tickets = validTickets(input);
  const ticketValuesByIndex = new Map();
  for (i = 0; i < parsedInput.myTicket.length; i++) {
    const values = [parsedInput.myTicket[i]];
    tickets.forEach(ticket => {
      values.push(ticket[i]);
    });
    ticketValuesByIndex.set(i, values);
  }

  const rulesMatch = new Map();
  Object.keys(parsedInput.rules).forEach(rule => {
    const matched = [];
    ticketValuesByIndex.forEach((values, index) => {
      if (allValuesMatchRules(values, parsedInput.rules[rule][0], parsedInput.rules[rule][1])) {
        matched.push(index);
      }
    });
    rulesMatch.set(rule, matched);
  });
  
  var fieldsFound = new Set();
  while (fieldsFound.size < parsedInput.myTicket.length) {
    [...rulesMatch.keys()].forEach(key => {
      if (rulesMatch.get(key).length === 1) {
        const index = rulesMatch.get(key)[0];
        fieldsFound.add(index);
        [...rulesMatch.keys()].forEach(otherKey => {
          if (otherKey !== key) {
            rulesMatch.set(otherKey, rulesMatch.get(otherKey).filter(value => {
              if (value === index) {
                return false;
              }
              return true;
            }));
          }
        });
      }
    });
  }

  console.log(rulesMatch);
  
  return fields.reduce((product, field) => {
    return product * parsedInput.myTicket[rulesMatch.get(field)[0]];
  }, 1);
}
module.exports = solveFields;