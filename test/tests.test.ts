import {task1, task2, task3, task4} from '../src';

test('task1: 1234', () => {
  expect(task1(1234)).toBe("YES");
});

test('task1: 2234', () => {
  expect(task1(2234)).toBe("NO");
});

test('task1: 7632', () => {
  expect(task1(7632)).toBe("YES");
});

test('task1: 1', () => {
  expect(task1(1)).toBe("NO");
});

test('task1: 3617', () => {
  expect(task1(1)).toBe("NO");
});

test('task2: 3,15', () => {
  expect(task2(3, 15)).toStrictEqual([3,15]);
});

test('task2: -10,6', () => {
  expect(task2(-10, 6)).toStrictEqual([-50,6]);
});

test('task3: 2', () => {
  expect(task3(2)).toEqual(0.666);
});

test('task3: 13', () => {
  expect(task3(13)).toEqual(0.928);
});

test('task4: 12 -30 23 43 -51 26 0 88 19 -10 11 2 23 -14 15 6 -7 1 -19 120', () => {
  expect(task4([12, -30, 23, 43, -51, 26, 0, 88, 19, -10, 11, 2, 23, -14, 15, 6, -7, 1, -19, 120])).toStrictEqual([12, -30, 0, 0, -51, 26, 0, 88, 19, -10, 11, 2, 23, -14, 15, 6, -7, 1, -19, 120]);
});

test('task4: 12 -30 -23 43 51 26 0 88 19 -10 11 2 23 -14 15 6 -7 1 -19 120', () => {
  expect(task4([12, -30, -23, 43, 51, 26, 0, 88, 19, -10, 11, 2, 23, -14, 15, 6, -7, 1, -19, 120])).toStrictEqual([12, -30, -23, 43, 51, 26, 0, 88, 19, -10, 11, 2, 23, -14, 15, 6, -7, 1, -19, 120]);
});
