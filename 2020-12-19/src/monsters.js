function parseRules(lines) {
  const rules = new Map();
  lines.forEach(line => {
    const parts = line.split(': ');
    rules.set(parts[0], parts[1]);
  });
  return rules;
}

function buildMatches(rules, matchIndex) {
  const rule = rules.get(matchIndex);
  // console.log(matchIndex);
  if (rule.includes('"')) {
    return [rule.replace(new RegExp('"', 'g'), '')];
  }
  return rule.split(' | ').flatMap(option => {
    return option.split(' ').reduce((matches, ruleIndex) => {
      const ruleMatches = buildMatches(rules, ruleIndex);
      const newMatches = [];
      matches.forEach(match => {
        ruleMatches.forEach(ruleMatch => {
          newMatches.push(match + ruleMatch);
        });
      });
      return newMatches;
    }, ['']);
  });
}

function monsters(input) {
  const parts = input.split("\n\n");
  const rules = parseRules(parts[0].split("\n"));
  const messages = parts[1].split("\n");
  // console.log(rules);
  const ruleZeroMatches = buildMatches(rules, '0');
  // console.log(ruleZeroMatches);

  return messages.reduce((count, message) => {
    if (ruleZeroMatches.includes(message)) {
      return count + 1;
    }
    return count;
  }, 0);
}
module.exports = monsters;