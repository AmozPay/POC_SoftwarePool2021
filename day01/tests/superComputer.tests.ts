import { expect } from '@jest/globals';
import { callback, superComputer as sc, Symbols } from '../src/superComputer';

test('additions', () => {
  expect(sc(1, Symbols.ADD, 1, callback)).toEqual(2);
  expect(sc(654, Symbols.ADD, 1546, callback)).toEqual(2200);
  expect(sc(-100, Symbols.ADD, 100, callback)).toEqual(0);
  expect(sc(2, Symbols.ADD, 1, callback)).toEqual(3);
});

test('division + modulo', () => {
  expect(sc(10, Symbols.DIV, 0, callback)).toEqual(Infinity);
  expect(sc(10, Symbols.MOD, 0, callback)).toEqual(NaN);
});
