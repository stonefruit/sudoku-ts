import chalk from 'chalk';
import { render } from './render';

describe('render', () => {
  it('should generate single value correctly', () => {
    expect(render([[{ value: '1' }]])).toBe('1');
  });
  it('should generate single row correctly', () => {
    expect(render([[{ value: '1' }, { value: '2' }]])).toBe('1 2');
    expect(render([[{ value: '1' }, { value: '2' }, { value: '3' }]])).toBe(
      '1 2 3'
    );
  });
  it('should generate multiple rows correctly', () => {
    expect(render([[{ value: '1' }], [{ value: '2' }]])).toBe('1\n2');
    expect(
      render([
        [{ value: '1', color: 'red' }, { value: '2' }, { value: '3' }],
        [{ value: '4' }, { value: '5' }, { value: '6' }],
        [{ value: '7' }, { value: '8' }, { value: '9' }],
      ])
    ).toBe(`${chalk.red('1')} 2 3\n4 5 6\n7 8 9`);
  });
});
