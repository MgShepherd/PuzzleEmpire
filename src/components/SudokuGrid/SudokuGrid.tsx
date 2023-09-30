import SudokuElement from '../../types/SudokuElement';
import SudokuSquare from '../SudokuSquare/SudokuSquare';

const SudokuGrid = (): JSX.Element => {
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
    <div data-testid="sudokuGrid">
      {elements.map((element, index) => {
        return <SudokuSquare key={index} element={element} />;
      })}
    </div>
  );
};

export default SudokuGrid;
