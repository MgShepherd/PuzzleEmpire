import { AppDispatch } from '../redux/store';
import { updateSelectedValue } from '../redux/sudokuSlice';

let cmdKeyPressed = false;

export const handleKeyPress = (
  event: KeyboardEvent,
  dispatch: AppDispatch
): void => {
  if (!isNaN(parseInt(event.key))) {
    dispatch(updateSelectedValue(event.key));
  }
  if (event.key === 'Control' || event.key === 'Meta') {
    cmdKeyPressed = true;
  }
};

export const handleKeyUp = (event: KeyboardEvent): void => {
  if (event.key === 'Control' || event.key === 'Meta') {
    cmdKeyPressed = false;
  }
};

export const isCommandKeyPressed = (): boolean => {
  return cmdKeyPressed;
};
