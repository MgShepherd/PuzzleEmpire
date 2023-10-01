import { render, screen } from '@testing-library/react';
import SudokuBlock from './SudokuBlock';

describe('Sudoku Block tests', () => {
  it('should render the correct number of squares', () => {
    render(<SudokuBlock />);
    expect(screen.getAllByTestId('sudokuSquare')).toHaveLength(9);
  });
});
