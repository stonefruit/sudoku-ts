import { generateGrid, generateCellValues } from './generator';

describe('generateGrid', () => {
  it('should generate grid with 81 cells', () => {
    const grid = generateGrid(0);
    expect(grid.flat().length).toBe(81);
  });
});

describe('generateCellValues', () => {
  it('should generate grid with 81 cells', () => {
    const gridValues = generateCellValues('0');
    expect(gridValues.flat().length).toBe(81);
  });
});
