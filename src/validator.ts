import { Cell, Grid } from './types';

const validateGroups = (values: number[][]): boolean => {
  for (let i = 0; i < values.length; i += 1) {
    const usedValues: number[] = [];
    for (let j = 0; j < values.length; j += 1) {
      if (usedValues.includes(values[i][j])) {
        return false;
      }
      usedValues.push(values[i][j]);
    }
  }
  return true;
};

const validateCellValues = (flatGrid: number[]): boolean => {
  if (flatGrid.length !== 81) {
    return false;
  }
  const rows: number[][] = [[], [], [], [], [], [], [], [], []];
  const columns: number[][] = [[], [], [], [], [], [], [], [], []];
  const squares: number[][] = [[], [], [], [], [], [], [], [], []];

  for (let i = 0; i < flatGrid.length; i += 1) {
    const value = flatGrid[i];

    // ROWS
    const rowIndex = Math.floor(i / 9);
    rows[rowIndex].push(value);

    // COLUMNS
    const colIndex = i % 9;
    columns[colIndex].push(value);

    // SQUARES
    const sqrIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);
    squares[sqrIndex].push(value);
  }

  return (
    validateGroups(rows) && validateGroups(columns) && validateGroups(squares)
  );
};

export { validateCellValues };
