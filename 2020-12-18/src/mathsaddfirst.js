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
  // console.log(input + ' = ' + result);
  return result;
}

function solveAddsFirst(input) {
  var solvedAdds = input;
  while (solvedAdds.includes('+')) {
    solvedAdds = solvedAdds.replace(new RegExp('[0-9]+ \\+ [0-9]+', 'g'), match => {
      // console.log(match);
      return solve(match);
    });
    // console.log(solvedAdds);
  }
  // console.log(solvedAdds);
  return solve(solvedAdds);
}

function maths(input) {
  const lines = input.split("\n");
  return lines.reduce((sum, line) => {
    var solvedBrackets = line;
    while (solvedBrackets.includes('(')) {
      solvedBrackets = solvedBrackets.replace(new RegExp('\\([^(]*?\\)', 'g'), match => {
        // console.log(match.replace('(', '').replace(')', ''));
        return solveAddsFirst(match.replace('(', '').replace(')', ''));
      });
      // console.log(solvedBrackets);
    }
    return sum + solveAddsFirst(solvedBrackets);
  }, 0)
}
module.exports = maths;