import { renderWithProvider } from '../../redux/testUtils';
import App from './App';
import { screen } from '@testing-library/dom';

test('renders sudoku grid', () => {
  renderWithProvider(<App />);
  expect(screen.getByTestId('sudokuGrid')).toBeInTheDocument();
});
