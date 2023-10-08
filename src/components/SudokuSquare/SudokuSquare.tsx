import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { selectSquare } from '../../redux/sudokuSlice';
import { SudokuIndex } from '../../types/SudokuElement';

interface SudokuSquareProps {
  elementIndex: SudokuIndex;
}

const SudokuSquare = ({ elementIndex }: SudokuSquareProps): JSX.Element => {
  const { elements } = useAppSelector((state) => state.sudoku);
  const element = elements[elementIndex.blockIndex][elementIndex.squareIndex];
  const dispatch = useAppDispatch();

  const getSelectedStyle = (): string => {
    if (!element.selected) return '';
    return 'ring-green-500 ring';
  };
  return (
    <div
      data-testid="sudokuSquare"
      className="w-full h-full ring-black ring-1 flex justify-center items-center p"
      onClick={() => dispatch(selectSquare(elementIndex))}
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
