function getBagName(bagEntry) {
  const parts = bagEntry.split(' ');
  return parts[1] + ' ' + parts[2];
}

function buildRuleMap(input) {
  const ruleMap = new Map();
  input.split("\n").forEach(rule => {
    const matches = rule.match(new RegExp('(\\w+ \\w+) bags contain (.*)', 'i'));
    matches[2].split(', ').forEach(contained => {
      const bagName = getBagName(contained);
      if (!ruleMap.has(bagName)) {
        ruleMap.set(bagName, []);
      }
      ruleMap.set(bagName, [...ruleMap.get(bagName), matches[1]]);
    });
  })
  return ruleMap;
}

function containedIn(bagName, ruleMap) {
  const containedBy = ruleMap.get(bagName);
  if (containedBy === undefined) {
    return [];
  }
  return [...containedBy, ...containedBy.flatMap(name => {
    return containedIn(name, ruleMap);
  })];
}

function bags(input) {
  const ruleMap = buildRuleMap(input);
  console.log(ruleMap);
  // console.log(new Set(containedIn('shiny gold', ruleMap)));
}
module.exports = bags;