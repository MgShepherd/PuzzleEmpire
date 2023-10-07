import { render, screen } from '@testing-library/react';
import SudokuElement from '../../types/SudokuElement';
import SudokuSquare from './SudokuSquare';

describe('Sudoku Square tests', () => {
  it('should render the squares value', () => {
    const element: SudokuElement = { value: '2', selected: false };
    render(<SudokuSquare element={element} />);
    expect(screen.getByText('2')).toBeDefined();
  });

  it('should not render value if it is 0', () => {
    const element: SudokuElement = { value: '0', selected: false };
    render(<SudokuSquare element={element} />);
    expect(screen.queryByText('0')).toBeFalsy();
  });

  it('should render green border if selected', () => {
    const element: SudokuElement = { value: '0', selected: true };
    render(<SudokuSquare element={element} />);
    expect(screen.getByTestId('selectedSquare')).toBeDefined();
  });
});
