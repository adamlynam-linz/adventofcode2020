function containsCount(bagName, ruleMap) {
  var count = 1;
  const containedBags = ruleMap.get(bagName);
  if (containedBags === undefined) {
    return 1;
  }
  containedBags.split(', ').forEach(bag => {
    const bagParts = bag.split(' ');
    if (bagParts.length === 4) {
      count += parseInt(bagParts[0]) * containsCount(bagParts[1] + ' ' + bagParts[2], ruleMap);
    }
  });
  return count;
}

function buildRuleMap(input) {
  const ruleMap = new Map();
  input.split("\n").forEach(rule => {
    const matches = rule.match(new RegExp('(\\w+ \\w+) bags contain (.*)', 'i'));
    ruleMap.set(matches[1], matches[2]);
  })
  return ruleMap;
}

function bagcount(input) {
  const ruleMap = buildRuleMap(input);
  return containsCount('shiny gold', ruleMap) - 1;
}
module.exports = bagcount;