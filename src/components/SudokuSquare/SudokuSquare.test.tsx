import { render, screen } from '@testing-library/react';
import SudokuSquare from './SudokuSquare';

describe('Sudoku Square tests', () => {
  it('should render the squares value', () => {
    render(<SudokuSquare value={2} />);
    expect(screen.getByText('2')).toBeDefined();
  });

  it('should not render value if it is 0', () => {
    render(<SudokuSquare value={0} />);
    expect(screen.queryByText('0')).toBeFalsy();
  });
});
