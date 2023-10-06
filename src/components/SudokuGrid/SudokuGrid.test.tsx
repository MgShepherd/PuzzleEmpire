import { screen } from '@testing-library/dom';
import { renderWithProvider } from '../../redux/testUtils';
import SudokuGrid from './SudokuGrid';

describe('Sudoku Grid tests', () => {
  it('should render sudoku blocks', () => {
    renderWithProvider(<SudokuGrid />);
    expect(screen.getAllByTestId('sudokuSquare')).toBeDefined();
  });
});
