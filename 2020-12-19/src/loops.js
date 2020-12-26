const monsters = require('./monsters');

function loops(input) {
  const lines = input.split("\n");
  const newLines = [];
  lines.forEach(line => {
    if (line.startsWith('8:')) {
      newLines.push('8: 42 | 42 8');
    }
    else if (line.startsWith('11:')) {
      newLines.push('11: 42 31 | 42 11 31');
    }
    else {
      newLines.push(line);
    }
  });
  // console.log(newLines);
  return monsters(newLines.join('\n'));
}
module.exports = loops;