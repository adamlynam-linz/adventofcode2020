function accounts(input) {
    const lookup = new Map();
    input.forEach(element => {
      lookup.set(parseInt(element), true);
    });
    for (var i = 0; i < input.length; i++) {
      const element = input[i];
      if (lookup.has(2020 - parseInt(element))) {
        return (2020 - parseInt(element)) * parseInt(element);
      }
    }
    return 0;
  }
  module.exports = accounts;
  