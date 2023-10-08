import SudokuBlock from '../SudokuBlock/SudokuBlock';
import SudokuElement from '../../types/SudokuElement';
import { useAppSelector } from '../../redux/reduxHooks';

const SudokuGrid = (): JSX.Element => {
  const { elements } = useAppSelector((state) => state.sudoku);

  return (
    <div
      data-testid="sudokuGrid"
      className="w-full h-full ring-4 ring-black grid grid-cols-3 grid-rows-3"
    >
      {elements.map((_: SudokuElement[], index: number) => {
        return <SudokuBlock key={index} blockIndex={index} />;
      })}
    </div>
  );
};

export default SudokuGrid;
