import { screen } from '@testing-library/react';
import { setupStore, AppStore } from '../../redux/store';
import { setupGrid } from '../../redux/sudokuSlice';
import { renderWithProvider } from '../../redux/testUtils';
import SudokuSquare from './SudokuSquare';

describe('Sudoku Square tests', () => {
  let store: AppStore;
  beforeEach(() => {
    const elementString =
      '012345678,012345678,012345678,012345678,012345678,012345678,012345678,012345678,012345678';
    store = setupStore();
    store.dispatch(setupGrid(elementString));
  });

  it('should render the correct value based on square index', () => {
    renderWithProvider(
      <SudokuSquare elementIndex={{ blockIndex: 0, squareIndex: 1 }} />,
      store
    );
    expect(screen.getByText('1')).toBeDefined();
  });

  it('should not render value when square element is 0', () => {
    renderWithProvider(
      <SudokuSquare elementIndex={{ blockIndex: 0, squareIndex: 0 }} />,
      store
    );
    expect(screen.queryByText('0')).toBeFalsy();
  });
});
