import { useAppSelector } from '../../redux/reduxHooks';
import SudokuElement from '../../types/SudokuElement';
import SudokuSquare from '../SudokuSquare/SudokuSquare';

interface SudokuBlockProps {
  blockIndex: number;
}

const SudokuBlock = ({ blockIndex }: SudokuBlockProps): JSX.Element => {
  const { elements } = useAppSelector((state) => state.sudoku);

  return (
    <div
      data-testid="sudokuBlock"
      className="grid grid-cols-3 w-full h-full grid-rows-3 ring-2 ring-black"
    >
      {elements.map((_: SudokuElement, index: number) => {
        return (
          <SudokuSquare
            key={index}
            elementIndex={{ blockIndex, squareIndex: index }}
          />
        );
      })}
    </div>
  );
};

export default SudokuBlock;
