import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SudokuElement, {
  convertStringToElements,
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
    setupGrid: (state, action: PayloadAction<string>) => {
      state.elements = convertStringToElements(action.payload);
    },
    selectSquare: (state, action: PayloadAction<SudokuIndex>) => {
      clearAllSelections(state.elements);
      state.elements[action.payload.blockIndex][
        action.payload.squareIndex
      ].selected = true;
    },
    updateSelectedValue: (state, action: PayloadAction<string>) => {
      state.elements.forEach((block) => {
        block.forEach((element) => {
          if (element.selected) element.value = action.payload;
        });
      });
    },
  },
});

export const { selectSquare, setupGrid, updateSelectedValue } =
  sudokuSlice.actions;

export default sudokuSlice.reducer;
