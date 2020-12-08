function customs(input) {
  var count = 0;
  const people = input.split("\n");
  [...people[0]].forEach (letter => {
    var matches = input.match (new RegExp(letter,'g')).length;
    if (matches === people.length) {
      count ++;
    }
  });

  return count;
}
module.exports = customs;
