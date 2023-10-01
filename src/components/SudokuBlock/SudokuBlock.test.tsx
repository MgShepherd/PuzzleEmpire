import { render, screen } from '@testing-library/react';
import SudokuElement from '../../types/SudokuElement';
import SudokuBlock from './SudokuBlock';

describe('Sudoku Block tests', () => {
  it('should render the correct number of squares', () => {
    const elements: SudokuElement[] = [
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '1' },
    ];
    render(<SudokuBlock elements={elements} />);
    expect(screen.getAllByTestId('sudokuSquare')).toHaveLength(elements.length);
  });
});
