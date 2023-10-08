import { screen } from '@testing-library/react';
import { renderWithProvider } from '../../redux/testUtils';
import SudokuGrid from '../SudokuGrid/SudokuGrid';

describe('Sudoku Block tests', () => {
  it('should render sudoku squares', () => {
    renderWithProvider(<SudokuGrid />);
    expect(screen.getAllByTestId('sudokuSquare')).toBeDefined();
  });
});
