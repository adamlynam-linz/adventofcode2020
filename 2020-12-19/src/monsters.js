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

function findMatches(messages, rules, matchIndex) {
  const rule = rules.get(matchIndex);
  // console.log('find matches for ' + messages + ' in rule ' + rule);
  
  return messages.flatMap(message => {
    if (rule.includes('"')) {
      const match = rule.replace(new RegExp('"', 'g'), '');
      if (message.startsWith(match)) {
        // console.log('returning ' + [message.replace(match, '')])
        return [message.replace(match, '')];
      }
      else {
        // console.log('no match')
        return [];
      }
    }

    return rule.split(' | ').flatMap(option => {
      const subRules = option.split(' ');
      var subMatches = [message];
      for (var i = 0; i < subRules.length; i++) {
        subMatches = findMatches(subMatches, rules, subRules[i]);
      }
      // console.log('sub matches found ' + subMatches);
      return subMatches;
    });
  });
}

function monsters(input) {
  const parts = input.split("\n\n");
  const rules = parseRules(parts[0].split("\n"));
  const messages = parts[1].split("\n");
  // console.log(rules);

  return messages.reduce((count, message) => {
    if (findMatches([message], rules, '0').includes('')) {
      return count + 1;
    }
    return count;
  }, 0);
}
module.exports = monsters;