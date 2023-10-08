import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore, AppStore } from './store';

export const renderWithProvider = (
  uiElement: JSX.Element,
  store: AppStore = setupStore()
): void => {
  render(<Provider store={store}>{uiElement}</Provider>);
};
