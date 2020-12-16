const parseInput = require('../src/parseInput');
const completelyInvalid = require('../src/completelyInvalid');
const validTickets = require('../src/validTickets');
const solveFields = require('../src/solveFields');

test('test input parsing part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(parseInput(data)).toStrictEqual({
      rules: {
        class: [{
          from: 1,
          to: 3
        }, {
          from: 5,
          to: 7
        }],
        row: [{
          from: 6,
          to: 11
        }, {
          from: 33,
          to: 44
        }],
        seat: [{
          from: 13,
          to: 40
        }, {
          from: 45,
          to: 50
        }],
      },
      myTicket: [7,1,14],
      nearbyTickets: [
        [7,3,47],
        [40,4,50],
        [55,2,20],
        [38,6,12],
      ],
    });
  });
});

test('test input parsing part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(completelyInvalid(data)).toBe(71);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(completelyInvalid(data)).toBe(19240);
  });
});

test('test input valid part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(validTickets(data)).toStrictEqual([[7,3,47]]);
  });
});

test('test input solve fields part 2', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(solveFields(data, ['row', 'class', 'seat'])).toBe(11 * 12 * 13);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(solveFields(data, [
      'departure location',
      'departure station',
      'departure platform',
      'departure track',
      'departure date',
      'departure time',
    ])).toBe(21095351239483);
  });
});