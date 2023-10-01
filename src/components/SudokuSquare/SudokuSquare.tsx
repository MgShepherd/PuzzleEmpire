import SudokuElement from '../../types/SudokuElement';

interface SudokuSquareProps {
  element: SudokuElement;
}

const SudokuSquare = ({ element }: SudokuSquareProps): JSX.Element => {
  return (
    <div
      data-testid="sudokuSquare"
      className="w-full h-full ring-black ring-1 flex justify-center items-center"
    >
      {element.value !== 0 ? element.value : ''}
    </div>
  );
};

export default SudokuSquare;
