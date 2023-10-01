import SudokuBlock from '../SudokuBlock/SudokuBlock';

const SudokuGrid = (): JSX.Element => {
  const placeholderElements = new Array<number>(9).fill(0);

  return (
    <div
      data-testid="sudokuGrid"
      className="w-full h-full ring-4 ring-black grid grid-cols-3 grid-rows-3"
    >
      {placeholderElements.map((_, index) => {
        return <SudokuBlock key={index} />;
      })}
    </div>
  );
};

export default SudokuGrid;
