function solve(input) {
  const tokens = input.split(' ');
  var result = 0;
  var lastOperator = '+';
  for (i = 0; i < tokens.length; i++) {
    if (parseInt(tokens[i])) {
      switch(lastOperator) {
        case '+':
          result += parseInt(tokens[i]);
          break;
        case '*':
          result *= parseInt(tokens[i]);
          break;
      }
    }
    else {
      lastOperator = tokens[i];
    }
  }
  return result;
}

function maths(input) {
  const lines = input.split("\n");
  return lines.reduce((sum, line) => {
    var solvedBrackets = line;
    while (solvedBrackets.includes('(')) {
      solvedBrackets = solvedBrackets.replace(new RegExp('\\([^(]*?\\)', 'g'), match => {
        // console.log(match.replace('(', '').replace(')', ''));
        return solve(match.replace('(', '').replace(')', ''));
      });
      // console.log(solvedBrackets);
    }
    return sum + solve(solvedBrackets);
  }, 0)
}
module.exports = maths;