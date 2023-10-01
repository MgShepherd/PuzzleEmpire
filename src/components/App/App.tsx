import SudokuGrid from '../SudokuGrid/SudokuGrid';

const App = (): JSX.Element => {
  return (
    <div className="flex py-10 justify-center items-center h-screen w-screen">
      <div className="h-full aspect-square">
        <SudokuGrid />
      </div>
    </div>
  );
};

export default App;
