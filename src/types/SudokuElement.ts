export default interface SudokuElement {
  value: string;
  selected: boolean;
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
          selected: false,
        };
      })
    );
  }
  return elements;
};

export const createEmptyGrid = (): SudokuElement[][] => {
  return convertStringToElements(
    '000000000,000000000,000000000,000000000,000000000,000000000,000000000,000000000,000000000'
  );
};
