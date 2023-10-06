import { createSlice } from '@reduxjs/toolkit';
import SudokuElement, { createEmptyGrid } from '../types/SudokuElement';

export interface SudokuState {
  elements: SudokuElement[][];
}

const initialState: SudokuState = {
  elements: createEmptyGrid(),
};

export const sudokuSlice = createSlice({
  name: 'Sudoku',
  initialState,
  reducers: {},
});

export default sudokuSlice.reducer;
