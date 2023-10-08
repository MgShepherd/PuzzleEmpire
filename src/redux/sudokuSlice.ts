import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SudokuElement, {
  createEmptyGrid,
  SudokuIndex,
} from '../types/SudokuElement';

export interface SudokuState {
  elements: SudokuElement[][];
}

const initialState: SudokuState = {
  elements: createEmptyGrid(),
};

const clearAllSelections = (elements: SudokuElement[][]): void => {
  elements.forEach((block: SudokuElement[]) => {
    block.forEach((element: SudokuElement) => {
      element.selected = false;
    });
  });
};

export const sudokuSlice = createSlice({
  name: 'Sudoku',
  initialState,
  reducers: {
    selectSquare: (state, action: PayloadAction<SudokuIndex>) => {
      clearAllSelections(state.elements);
      state.elements[action.payload.blockIndex][
        action.payload.squareIndex
      ].selected = true;
    },
  },
});

export const { selectSquare } = sudokuSlice.actions;

export default sudokuSlice.reducer;
