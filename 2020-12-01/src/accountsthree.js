function accounts(input) {
  for (var i = 0; i < input.length; i++) {
    const element = input[i];
    const result = findtwo(input, 2020 - parseInt(element))
    if (result > 0) {
      return parseInt(element) * result;
    }
  }
  return 0;
}

function findtwo(input, target) {
  const lookup = new Map();
  input.forEach(element => {
    lookup.set(parseInt(element), true);
  });
  for (var i = 0; i < input.length; i++) {
    const element = input[i];
    if (lookup.has(target - parseInt(element))) {
      return (target - parseInt(element)) * parseInt(element);
    }
  }
  return 0;
}

module.exports = accounts;
  