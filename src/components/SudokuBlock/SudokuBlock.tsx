import SudokuElement from '../../types/SudokuElement';
import SudokuSquare from '../SudokuSquare/SudokuSquare';

const SudokuBlock = (): JSX.Element => {
  const elements: SudokuElement[] = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
  ];

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
