import SudokuElement from '../../types/SudokuElement';
import SudokuSquare from '../SudokuSquare/SudokuSquare';

interface SudokuBlockProps {
  elements: SudokuElement[];
}

const SudokuBlock = ({ elements }: SudokuBlockProps): JSX.Element => {
  return (
    <div
      data-testid="sudokuBlock"
      className="grid grid-cols-3 w-full h-full grid-rows-3 ring-2 ring-black"
    >
      {elements.map((element, index) => {
        return <SudokuSquare key={index} element={element} />;
      })}
    </div>
  );
};

export default SudokuBlock;
