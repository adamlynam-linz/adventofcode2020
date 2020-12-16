const parseInput = require('./parseInput');

function validTickets(input) {
  const parsedInput = parseInput(input);
  const flatRules = Object.values(parsedInput.rules).flat();
  return parsedInput.nearbyTickets.filter(ticket => {
    const ticketValues = ticket.flat();
    const validTicketValues = ticketValues.filter(value => {
      for (i = 0; i < flatRules.length; i++) {
        const rule = flatRules[i];
        if (value >= rule.from && value <= rule.to) {
          return true;
        }
      }
      return false;
    });
    return validTicketValues.length === ticketValues.length;
  });
}
module.exports = validTickets;