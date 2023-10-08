import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import sudokuReducer from './sudokuSlice';

export const setupStore = (): EnhancedStore =>
  configureStore({
    reducer: { sudoku: sudokuReducer },
  });

export const store = setupStore();

// Types required for typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
