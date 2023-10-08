import { screen } from '@testing-library/react';
import { renderWithProvider } from '../../redux/testUtils';
import SudokuBlock from './SudokuBlock';

describe('Sudoku Block tests', () => {
  it('should render the correct valued sudoku squares', () => {
    renderWithProvider(<SudokuBlock blockIndex={0} />);
    expect(screen.getAllByTestId('sudokuSquare')).toBeDefined();
  });
});
