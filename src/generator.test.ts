import { generateGrid } from './generator';

describe('generateGrid', () => {
  it('should generate grid with 81 cells', () => {
    const grid = generateGrid(0);
    expect(grid.flat().length).toBe(81);
  });
});
