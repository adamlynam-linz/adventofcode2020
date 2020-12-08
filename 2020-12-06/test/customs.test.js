const customs = require('../src/customs');
const forms = require('../src/forms');
const everyoneforms = require('../src/everyoneforms');
const everyone = require('../src/everyone');

test('test case 1', () => {
  expect(customs("abc")).toBe(3);
});
test('test case 2', () => {
  expect(customs("b")).toBe(1);
});
test('test case 3', () => {
  expect(customs("a\nb\nc")).toBe(3);
});
test('test case 4', () => {
  expect(customs("ab\nac")).toBe(3);
});
test('test case 5', () => {
  expect(customs("a\na\na\na")).toBe(1);
});
test('test case 1', () => {
  expect(everyone("abc")).toBe(3);
});
test('test case 2', () => {
  expect(everyone("b")).toBe(1);
});
test('test case 3', () => {
  expect(everyone("a\nb\nc")).toBe(0);
});
test('test case 4', () => {
  expect(everyone("ab\nac")).toBe(1);
});
test('test case 5', () => {
  expect(everyone("a\na\na\na")).toBe(1);
});

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(forms(data)).toBe(11);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(forms(data)).toBe(6585);
  });
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(everyoneforms(data)).toBe(6);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(everyoneforms(data)).toBe(3276);
  });
});
