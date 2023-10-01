import { render, screen } from '@testing-library/react';
import SudokuGrid from './SudokuGrid';

describe('Sudoku Grid tests', () => {
  it('should render the right number of Sudoku blocks', () => {
    render(<SudokuGrid />);
    expect(screen.getAllByTestId('sudokuBlock')).toHaveLength(9);
  });
});
