const bags = require('../src/bags');
const bagcount = require('../src/bagcount');

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bags(data)).toBe(4);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bags(data)).toBe(177);
  });
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bagcount(data)).toBe(32);
  });
});

test('test input 2 part 2', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bagcount(data)).toBe(126);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bagcount(data)).toBe(34988);
  });
});