const adaptors = require('../src/adaptors');
const combinations = require('../src/combinations');

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(adaptors(data)).toBe(7 * 5);
  });
});

test('test input 2 part 1', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(adaptors(data)).toBe(22 * 10);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(adaptors(data)).toBe(1836);
  });
});

test('my test input part 2', () => {
  fs = require('fs');
  expect(combinations("3\n6\n7\n8")).toBe(2);
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(combinations(data)).toBe(8);
  });
});

test('test input 2 part 2', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(combinations(data)).toBe(19208);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(combinations(data)).toBe(43406276662336);
  });
});