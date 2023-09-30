interface SudokuSquareProps {
  value: number;
}

const SudokuSquare = ({ value }: SudokuSquareProps): JSX.Element => {
  return <div>{value !== 0 ? value : ''}</div>;
};

export default SudokuSquare;
