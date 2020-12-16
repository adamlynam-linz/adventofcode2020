function parse(input) {
  const sections = input.split("\n\n");
  const rules = {};
  sections[0].split("\n").forEach(line => {
    const parts = line.split(': ');
    rules[parts[0]] = parts[1].split(' or ').map(rule => {
      const ruleParts = rule.split('-');
      return {
        from: parseInt(ruleParts[0]),
        to: parseInt(ruleParts[1]),
      }
    });
  });
  const myTicket = sections[1].split("\n")[1].split(',').map(value => parseInt(value));
  const nearbyTicketStrings = sections[2].split("\n");
  nearbyTicketStrings.shift();
  const nearbyTickets = nearbyTicketStrings.map(line => {
    return line.split(',').map(value => parseInt(value));
  });
  return {
    rules: rules,
    myTicket: myTicket,
    nearbyTickets: nearbyTickets,
  }
}
module.exports = parse;