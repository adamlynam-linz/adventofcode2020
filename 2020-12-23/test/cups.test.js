const cups = require('../src/cups');
const million = require('../src/million')

test('test input part 1 10moves', () => {
  expect(
    cups('389125467'
      .split('')
      .map(value => parseInt(value)),
    10).join('')
  ).toBe('92658374');
});

test('test input part 1 100 moves', () => {
  expect(
    cups('389125467'
      .split('')
      .map(value => parseInt(value)),
    100).join('')
  ).toBe('67384529');
});

test('real input part 1', () => {
  expect(
    cups('469217538'
      .split('')
      .map(value => parseInt(value)),
    100).join('')
  ).toBe('27956483');
});

test('test input part 2', () => {
  expect(million('389125467')).toBe(149245887792);
});

test('real input part 2', () => {
  expect(million('469217538')).toBe(18930983775);
});