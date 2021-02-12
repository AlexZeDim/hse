'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * На вход подается натуральное четырехзначное число N,
 * вывести YES, если сумма крайних цифр равна сумме средних. Вывести NO в противном случае.
 * @param number {number}
 */
const task1 = number => {
  const stringNumber = number.toString();

  if (stringNumber.length === 4) {
    const array = Array.from(stringNumber);
    const outer = parseInt(array[0]) + parseInt(array[3]);
    const inner = parseInt(array[1]) + parseInt(array[2]);
    if (outer === inner) return 'YES';
  }

  return 'NO';
};
/**
 * На вход подаются два числа: N и M.
 * Напишите программу, которая умножает первое число на 5, если оно больше второго по абсолютной величине.
 * @param n {number}
 * @param m {number}
 */

const task2 = (n, m) => {
  if (Math.abs(n) > Math.abs(m)) return [n * 5, m];
  return [n, m];
};
/**
 * На вход подается натуральное число N. Напишите программу вычисления выражения: 1 / (N * (N + 1))
 * @param number {number}
 */

const task3 = number => {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += 1 / (i * (i + 1));
  }

  return parseFloat(sum.toString().slice(0, 5));
};
/**
 * Даны значения одномерного массива размером 20 элементов.
 * Преобразовать исходный массив, заменив нулями элементы между первым и вторым отрицательными.
 * @param array {number[]}
 */

const task4 = array => {
  const negatives = {
    first: 0,
    second: 0
  };

  if (Array.isArray(array) && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      //exit loop if negatives found
      if (negatives.first !== 0 && negatives.second !== 0) break;

      if (array[i] < 0) {
        if (negatives.first === 0) {
          negatives.first = i;
        } else if (negatives.second === 0) {
          negatives.second = i;
        }
      }
    }
  }

  if (negatives.first && negatives.second) {
    //rebuild original array via map
    return array.map((n, i) => i > negatives.first && i < negatives.second ? 0 : n);
  }

  return array;
};

exports.task1 = task1;
exports.task2 = task2;
exports.task3 = task3;
exports.task4 = task4;
//# sourceMappingURL=hse.cjs.development.js.map
