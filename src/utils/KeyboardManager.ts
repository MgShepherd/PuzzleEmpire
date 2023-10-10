import { AppDispatch } from '../redux/store';
import { updateSelectedValue } from '../redux/sudokuSlice';

const handleKeyPress = (event: KeyboardEvent, dispatch: AppDispatch): void => {
  if (!isNaN(parseInt(event.key))) {
    dispatch(updateSelectedValue(event.key));
  }
  console.log(event.key);
};

export default handleKeyPress;
