const monsters = require('../src/monsters');
const loops = require('../src/loops')

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(monsters(data)).toBe(2);
  });
});

test('test input part 2, no loops', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(monsters(data)).toBe(3);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(monsters(data)).toBe(124);
  });
});

test('test input part 2, no loops', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(loops(data)).toBe(12);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(loops(data)).toBe(228);
  });
});