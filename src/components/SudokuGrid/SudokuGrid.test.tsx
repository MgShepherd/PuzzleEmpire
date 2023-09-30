import { render, screen } from '@testing-library/react';
import SudokuGrid from './SudokuGrid';

describe('Sudoku Grid tests', () => {
  it('should render the correct number of squares', () => {
    render(<SudokuGrid />);
    expect(screen.getAllByTestId('sudokuSquare')).toHaveLength(9);
  });
});
