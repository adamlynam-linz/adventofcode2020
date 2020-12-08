const check = require('../src/passwords');
const newpolicy = require('../src/passwordsnewpolicy');

test('test case 1', () => {
  expect(check("1-3 a: abcde")).toBe(true);
});
test('test case 2', () => {
  expect(check("1-3 b: cdefg")).toBe(false);
});
test('test case 3', () => {
  expect(check("2-9 c: ccccccccc")).toBe(true);
});

test('test case answer', () => {
  input = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc"
    ];
  expect(input.reduce((total, input) => total += check(input) ? 1 : 0, 0)).toBe(2);
});

test('part one answer', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(data.split("\n").reduce((total, input) => total += check(input) ? 1 : 0, 0)).toBe(477);
  });
});

test('new policy - test case 1', () => {
  expect(newpolicy("1-3 a: abcde")).toBe(true);
});
test('new policy - test case 2', () => {
  expect(newpolicy("1-3 b: cdefg")).toBe(false);
});
test('new policy - test case 3', () => {
  expect(newpolicy("2-9 c: ccccccccc")).toBe(false);
});

test('new policy - test case answer', () => {
  input = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc"
    ];
  expect(input.reduce((total, input) => total += newpolicy(input) ? 1 : 0, 0)).toBe(1);
});

test('part two answer', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(data.split("\n").reduce((total, input) => total += newpolicy(input) ? 1 : 0, 0)).toBe(686);
  });
});