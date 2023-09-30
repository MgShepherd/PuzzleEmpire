import SudokuElement from '../../types/SudokuElement';

interface SudokuSquareProps {
  element: SudokuElement;
}

const SudokuSquare = ({ element }: SudokuSquareProps): JSX.Element => {
  return (
    <div data-testid="sudokuSquare">
      {element.value !== 0 ? element.value : ''}
    </div>
  );
};

export default SudokuSquare;
