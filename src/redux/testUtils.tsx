import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import sudokuReducer from './sudokuSlice';
import { Provider } from 'react-redux';

export const renderWithProvider = (uiElement: JSX.Element): void => {
  const store = configureStore({ reducer: { sudoku: sudokuReducer } });
  render(<Provider store={store}>{uiElement}</Provider>);
};
