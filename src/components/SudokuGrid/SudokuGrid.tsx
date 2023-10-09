import SudokuBlock from '../SudokuBlock/SudokuBlock';
import SudokuElement from '../../types/SudokuElement';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { useEffect } from 'react';
import { setupGrid } from '../../redux/sudokuSlice';

interface SudokuGridProps {
  elementString: string;
}

const SudokuGrid = ({ elementString }: SudokuGridProps): JSX.Element => {
  const { elements } = useAppSelector((state) => state.sudoku);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: KeyboardEvent): void => {
    console.log(event.key);
  };

  useEffect(() => {
    dispatch(setupGrid(elementString));
  }, [elementString, dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
