import SudokuElement from '../../types/SudokuElement';

interface SudokuSquareProps {
  element: SudokuElement;
}

const SudokuSquare = ({ element }: SudokuSquareProps): JSX.Element => {
  const getSelectedStyle = (): string => {
    if (!element.selected) return '';
    return 'ring-green-500 ring';
  };
  return (
    <div
      data-testid="sudokuSquare"
      className="w-full h-full ring-black ring-1 flex justify-center items-center p"
    >
      <div
        data-testid={element.selected ? 'selectedSquare' : ''}
        className={getSelectedStyle() + ' w-full h-full'}
      >
        {element.value !== '0' ? element.value : ''}
      </div>
    </div>
  );
};

export default SudokuSquare;
