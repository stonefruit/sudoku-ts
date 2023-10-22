import chalk from 'chalk';

type Color = 'red' | 'blue' | 'grey';

type Cell = {
  value: string;
  color?: Color;
};

type Grid = Cell[][];

const colorText = (cell: Cell) => {
  const { color, value } = cell;
  if (!color) {
    return value;
  }
  switch (color) {
    case 'red':
      return chalk.red(value);
    case 'blue':
      return chalk.blue(value);
    case 'grey':
      return chalk.grey(value);
  }
};

const render = (inputGrid: Grid): string => {
  const cellArr: Cell[] = [];
  for (let rowIndex = 0; rowIndex < inputGrid.length; rowIndex += 1) {
    const row = inputGrid[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
      const cell = row[colIndex];
      cellArr.push(cell);
      if (colIndex < row.length - 1) {
        cellArr.push({ value: ' ' });
      }
    }
    if (rowIndex < inputGrid.length - 1) {
      cellArr.push({ value: '\n' });
    }
  }
  const strArr = cellArr.map((cell) => colorText(cell));
  const coloredStr = strArr.join('');
  return coloredStr;
};

export { render };
