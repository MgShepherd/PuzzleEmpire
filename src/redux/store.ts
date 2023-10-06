import { configureStore } from '@reduxjs/toolkit';
import sudokuReducer from './sudokuSlice';

export const store = configureStore({
  reducer: { sudoku: sudokuReducer },
});

// Types required for typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
