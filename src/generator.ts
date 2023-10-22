import { Cell, Grid } from './types';

const generateGrid = (seed: number): Grid => {
  const cell: Cell = { value: '1' };
  const row = [cell, cell, cell, cell, cell, cell, cell, cell, cell];
  return [row, row, row, row, row, row, row, row, row];
};

export { generateGrid };
