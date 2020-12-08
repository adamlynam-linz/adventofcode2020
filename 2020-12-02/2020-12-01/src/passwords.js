function count(letter, password) {
  return [...password.matchAll(new RegExp(letter, 'g'))].length
}

function buildRange(range) {
  const rangeParts = range.split('-');
  var range = [];
  for (i = parseInt(rangeParts[0]); i < parseInt(rangeParts[1])+1; i++) {
    range.push(i);
  }
  return range;
}

function check(input) {
  const parts = input.split(" ");
  const occurs = count(parts[1].replace(':', ''), parts[2]);
  // console.log(occurs);
  const validrange = buildRange(parts[0]);
  // console.log(validrange);
  return validrange.includes(occurs);
}
module.exports = check;