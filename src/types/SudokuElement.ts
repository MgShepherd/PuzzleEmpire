export default interface SudokuElement {
  value: string;
}

export const convertStringToElements = (
  inputStr: string
): SudokuElement[][] => {
  const elements: SudokuElement[][] = [];
  const blocks = inputStr.split(',');
  for (const block of blocks) {
    const values = block.split('');
    elements.push(
      values.map((value) => {
        return {
          value,
        };
      })
    );
  }
  return elements;
};
