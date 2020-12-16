const parseInput = require('./parseInput');

function completelyInvalid(input) {
  const parsedInput = parseInput(input);
  const flatRules = Object.values(parsedInput.rules).flat();
  const flatTicketValues = parsedInput.nearbyTickets.flat();
  return flatTicketValues.reduce((invalid, value) => {
    for (i = 0; i < flatRules.length; i++) {
      const rule = flatRules[i];
      if (value >= rule.from && value <= rule.to) {
        return invalid;
      }
    }
    return invalid + value;
  }, 0);
}
module.exports = completelyInvalid;