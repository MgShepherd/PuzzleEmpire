import { render, screen } from '@testing-library/react';
import SudokuElement from '../../types/SudokuElement';
import SudokuBlock from './SudokuBlock';

describe('Sudoku Block tests', () => {
  let elements: SudokuElement[];

  beforeEach(() => {
    elements = [
      { value: '1' },
      { value: '1' },
      { value: '1' },
      { value: '2' },
      { value: '2' },
      { value: '0' },
      { value: '0' },
      { value: '0' },
      { value: '3' },
    ];
    render(<SudokuBlock elements={elements} />);
  });

  it('should render the correct number of squares', () => {
    expect(screen.getAllByTestId('sudokuSquare')).toHaveLength(elements.length);
  });

  it('should render the correct values for squares based on elements', () => {
    expect(screen.getAllByText('1')).toHaveLength(3);
    expect(screen.getAllByText('2')).toHaveLength(2);
    expect(screen.getAllByText('3')).toHaveLength(1);
    expect(screen.queryAllByText('4')).toHaveLength(0);
  });
});
