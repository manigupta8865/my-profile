import '@testing-library/jest-dom';

import { formatDataTestId, objectToArrayConverter, stringManipulation } from './formatters';

describe('formatDataTestId Method', () => {
  it('should display empty string when both params are null', function () {
    const prefix = null;
    const dataTestId = null;
    const expectedOutput = '';
    expect(formatDataTestId(prefix, dataTestId)).toEqual(expectedOutput);
  });
  it('should display only the dataTestId when prefix is null', function () {
    const prefix = null;
    const dataTestId = 'DataTestId';
    const expectedOutput = 'DataTestId';
    expect(formatDataTestId(prefix, dataTestId)).toEqual(expectedOutput);
  });
  it('should display both prefix and dataTestId when both are sent', function () {
    const prefix = 'Prefix';
    const dataTestId = 'DataTestId';
    const expectedOutput = 'Prefix-DataTestId';
    expect(formatDataTestId(prefix, dataTestId)).toEqual(expectedOutput);
  });
  it('should convert an object to an array of objects', () => {
    const inputObject = {
      item1: { linkLabel: 'Label 1', linkPath: '/path1' },
      item2: { linkLabel: 'Label 2', linkPath: '/path2' },
    };

    const expectedArray = [
      { id: 'item1', linkLabel: 'Label 1', linkPath: '/path1' },
      { id: 'item2', linkLabel: 'Label 2', linkPath: '/path2' },
      // Add more items as needed
    ];

    const result = objectToArrayConverter(inputObject);
    expect(result).toEqual(expectedArray);
  });

  it('should handle an empty object', () => {
    const inputObject = {};
    const expectedArray: any[] = [];

    const result = objectToArrayConverter(inputObject);
    expect(result).toEqual(expectedArray);
  });

  it('should capitalize the first letter of each word in a hyphen-separated string', () => {
    const input = 'hello-world';
    const expectedOutput = 'Hello World';

    const result = stringManipulation(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expectedOutput = '';

    const result = stringManipulation(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle undefined input', () => {
    const input = undefined;
    const expectedOutput = '';

    const result = stringManipulation(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle single-word input', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';

    const result = stringManipulation(input);
    expect(result).toEqual(expectedOutput);
  });
});
