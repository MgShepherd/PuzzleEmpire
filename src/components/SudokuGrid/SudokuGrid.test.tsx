import { render, screen } from '@testing-library/react';
import SudokuGrid from './SudokuGrid';

describe('Sudoku Grid tests', () => {
  it('should render the right number of Sudoku blocks', () => {
    const elementString =
      '123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789';
    render(<SudokuGrid elementString={elementString} />);
    expect(screen.getAllByTestId('sudokuBlock')).toHaveLength(9);
  });

  it('should render the correct values in each square based on the input string', () => {
    const elementString =
      '111111111,222222222,120456789,120456789,120456789,120456789,120456789,120456789,120456789';
    render(<SudokuGrid elementString={elementString} />);
    expect(screen.getAllByText('1')).toHaveLength(16);
    expect(screen.queryAllByText('3')).toHaveLength(0);
    expect(screen.getAllByText('9')).toHaveLength(7);
  });
});
