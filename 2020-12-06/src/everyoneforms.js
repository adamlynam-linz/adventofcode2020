const customs = require('./everyone');
function forms(input) {
    const groups = input.split("\n\n");
    var count = 0;
    groups.forEach(group => {
        count += customs(group);
    });
    return count;
}

  module.exports = forms;