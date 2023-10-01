import SudokuBlock from '../SudokuBlock/SudokuBlock';
import { useEffect, useState } from 'react';
import SudokuElement, {
  convertStringToElements,
} from '../../types/SudokuElement';

interface SudokuGridProps {
  elementString: string;
}

const SudokuGrid = ({ elementString }: SudokuGridProps): JSX.Element => {
  const [elements, setElements] = useState<SudokuElement[][]>([]);

  useEffect(() => {
    setElements(convertStringToElements(elementString));
  }, [elementString]);

  return (
    <div
      data-testid="sudokuGrid"
      className="w-full h-full ring-4 ring-black grid grid-cols-3 grid-rows-3"
    >
      {elements.map((blockElements: SudokuElement[], index: number) => {
        return <SudokuBlock key={index} elements={blockElements} />;
      })}
    </div>
  );
};

export default SudokuGrid;
