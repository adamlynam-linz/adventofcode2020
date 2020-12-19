const monsters = require('../src/monsters');

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(monsters(data)).toBe(2);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(monsters(data)).toBe(124);
  });
});

// test('test input part 2', () => {
//   fs = require('fs');
//   fs.readFile('test-input', 'utf8', function (err,data) {
//     if (err) throw err;
//     expect(part2(data)).toBe(0);
//   });
// });

// test('real input part 2', () => {
//   fs = require('fs');
//   fs.readFile('input', 'utf8', function (err,data) {
//     if (err) throw err;
//     expect(part2(data)).toBe(0);
//   });
// });