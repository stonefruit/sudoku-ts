import { Cell, Grid } from './types';

const generateGrid = (seed: number): Grid => {
  const cell: Cell = { value: '1' };
  const row = [cell, cell, cell, cell, cell, cell, cell, cell, cell];
  return [row, row, row, row, row, row, row, row, row];
};

const generateCellValues = (seed: number): number[][] => {
  return [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];
};

export { generateGrid, generateCellValues };
