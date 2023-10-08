import { screen } from '@testing-library/dom';
import { renderWithProvider } from '../../redux/testUtils';
import SudokuGrid from './SudokuGrid';

describe('Sudoku Grid tests', () => {
  it('should render the correct sudoku squares based on input string', () => {
    const elementString =
      '123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789';
    renderWithProvider(<SudokuGrid elementString={elementString} />);
    for (let i = 1; i <= 9; i++) {
      expect(screen.getAllByText(i)).toHaveLength(9);
    }
  });
});
