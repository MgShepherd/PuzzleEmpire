import {
  handleKeyPress,
  isCommandKeyPressed,
  handleKeyUp,
} from './KeyboardManager';
import { AppDispatch } from '../redux/store';
import { updateSelectedValue } from '../redux/sudokuSlice';

const mockedDispatch: AppDispatch = jest.fn();

describe('Keyboard manager tests', () => {
  it('should call the updateSelectedValue dispatch function when key press is a number', () => {
    const mockKeyboardEvent: KeyboardEvent = new KeyboardEvent('keydown', {
      key: '1',
    });
    handleKeyPress(mockKeyboardEvent, mockedDispatch);
    expect(mockedDispatch).toHaveBeenCalledWith(updateSelectedValue('1'));
  });

  it('should not call the updateSelectedValue dispatch function when an non-number key pressed', () => {
    const mockKeyboardEvent: KeyboardEvent = new KeyboardEvent('keydown', {
      key: 'a',
    });
    handleKeyPress(mockKeyboardEvent, mockedDispatch);
    expect(mockedDispatch).not.toHaveBeenCalled();
  });

  it('should not update the cmdKeyPressed value when key other than Control is pressed', () => {
    const mockKeyboardEvent: KeyboardEvent = new KeyboardEvent('keydown', {
      key: 'a',
    });
    expect(isCommandKeyPressed()).toBeFalsy();
    handleKeyPress(mockKeyboardEvent, mockedDispatch);
    expect(isCommandKeyPressed()).toBeFalsy();
  });

  it('should update the cmdKeyPressed value when Control key is pressed', () => {
    const mockKeyboardEvent: KeyboardEvent = new KeyboardEvent('keydown', {
      key: 'Control',
    });
    expect(isCommandKeyPressed()).toBeFalsy();
    handleKeyPress(mockKeyboardEvent, mockedDispatch);
    expect(isCommandKeyPressed()).toBeTruthy();
  });

  it('should not reset cmdKeyPressed to false when key other than Control released', () => {
    const mockKeyboardEvent: KeyboardEvent = new KeyboardEvent('keyup', {
      key: 'a',
    });
    expect(isCommandKeyPressed()).toBeTruthy();
    handleKeyUp(mockKeyboardEvent);
    expect(isCommandKeyPressed()).toBeTruthy();
  });

  it('should reset cmdKeyPressed to false when Control key released', () => {
    const mockKeyboardEvent: KeyboardEvent = new KeyboardEvent('keyup', {
      key: 'Control',
    });
    expect(isCommandKeyPressed()).toBeTruthy();
    handleKeyUp(mockKeyboardEvent);
    expect(isCommandKeyPressed()).toBeFalsy();
  });
});
