const elfgame = require('../src/elfgame');

test('test input part 1 1,3,2', () => {
  expect(elfgame("1,3,2", 2020)).toBe(1);
});

test('test input part 1 2,1,3', () => {
  expect(elfgame("2,1,3", 2020)).toBe(10);
});

test('test input part 1 1,2,3', () => {
  expect(elfgame("1,2,3", 2020)).toBe(27);
});

test('test input part 1 2,3,1', () => {
  expect(elfgame("2,3,1", 2020)).toBe(78);
});

test('test input part 1 3,2,1', () => {
  expect(elfgame("3,2,1", 2020)).toBe(438);
});

test('test input part 1 3,1,2', () => {
  expect(elfgame("3,1,2", 2020)).toBe(1836);
});

test('real input part 1', () => {
  expect(elfgame("10,16,6,0,1,17", 2020)).toBe(412);
});

test('real input part 2', () => {
  expect(elfgame("10,16,6,0,1,17", 30000000)).toBe(243);
});