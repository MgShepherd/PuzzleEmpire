import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  expect(screen.getByTestId('sudokuGrid')).toBeInTheDocument();
});