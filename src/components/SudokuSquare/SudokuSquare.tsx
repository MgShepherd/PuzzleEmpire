import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { selectSquare } from '../../redux/sudokuSlice';
import { SudokuIndex } from '../../types/SudokuElement';

interface SudokuSquareProps {
  elementIndex: SudokuIndex;
}

const SudokuSquare = ({ elementIndex }: SudokuSquareProps): JSX.Element => {
  const { elements } = useAppSelector((state) => state.sudoku);
  const dispatch = useAppDispatch();

  const element = elements[elementIndex.blockIndex][elementIndex.squareIndex];

  const getSelectedStyle = (): string => {
    if (!element.selected) return '';
    return 'ring-green-500 ring-4 ';
  };

  return (
    <div
      data-testid="sudokuSquare"
      className="w-full h-full ring-black ring-1 p-1"
      onClick={() => dispatch(selectSquare(elementIndex))}
    >
      {element !== undefined && (
        <div
          data-testid={element.selected ? 'selectedSquare' : ''}
          className={
            getSelectedStyle() +
            ' w-full h-full flex justify-center items-center text-3xl'
          }
        >
          {element.value !== '0' ? element.value : ''}
        </div>
      )}
    </div>
  );
};

export default SudokuSquare;
