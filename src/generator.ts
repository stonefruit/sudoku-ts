import * as randomSeed from 'random-seed';
import { Cell, Grid } from './types';
import { validateCellValues } from './validator';

const generateGrid = (seed: number): Grid => {
  const cell: Cell = { value: '1' };
  const row = [cell, cell, cell, cell, cell, cell, cell, cell, cell];
  return [row, row, row, row, row, row, row, row, row];
};

const generateCellValues = (seed: string): number[][] => {
  let seedStr = seed;
  console.log(seed);

  const rand = randomSeed.create(seed);

  let randomValues: number[] = [];
  while (true) {
    const values = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
      8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
      6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
      4, 5, 6, 7, 8, 9,
    ];
    while (values.length) {
      randomValues.push(values.splice(rand(values.length), 1)[0]);
    }
    console.log(seedStr);
    if (validateCellValues(randomValues)) {
      break;
    }
    randomValues = [];
    seedStr += '_';
    rand.seed(seedStr);
  }

  const grid: number[][] = [];
  let rowIndex = 0;
  while (randomValues.length) {
    grid[rowIndex] = randomValues.splice(0, 9);
    rowIndex += 1;
  }
  console.log(grid);
  return grid;
};

export { generateGrid, generateCellValues };
