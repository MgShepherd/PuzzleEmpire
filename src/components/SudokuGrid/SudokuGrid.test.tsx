import { render, screen } from '@testing-library/react';
import SudokuGrid from './SudokuGrid';

describe('Sudoku Grid tests', () => {
  it('should render the right number of Sudoku blocks', () => {
    const elementString =
      '123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789';
    render(<SudokuGrid elementString={elementString} />);
    expect(screen.getAllByTestId('sudokuBlock')).toHaveLength(9);
  });
});
