export type Color = 'red' | 'blue' | 'grey';

export type Cell = {
  value: string;
  color?: Color;
};

export type Grid = Cell[][];
