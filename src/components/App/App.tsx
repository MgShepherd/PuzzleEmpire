import SudokuGrid from '../SudokuGrid/SudokuGrid';

const App = (): JSX.Element => {
  const elementString =
    '111111111,123456789,123456789,123456789,123456789,123456789,123456789,123456789,123456789';
  return (
    <div className="flex py-10 justify-center items-center h-screen w-screen">
      <div className="h-full aspect-square">
        <SudokuGrid elementString={elementString} />
      </div>
    </div>
  );
};

export default App;
