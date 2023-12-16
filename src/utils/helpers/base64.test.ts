import { encodeToBase64, decodeFromBase64 } from './base64';

describe('encodeToBase64', () => {
  it('should return text to base64', () => {
    const value = encodeToBase64('some text');
    expect(value).toEqual('c29tZSB0ZXh0');
  });
  it('should return null to base64', () => {
    const value = encodeToBase64('');
    expect(value).toEqual(null);
  });
});

describe('decodeFromBase64', () => {
  it('should return base64 to text', () => {
    const value = decodeFromBase64('c29tZSB0ZXh0');
    expect(value).toEqual('some text');
  });
  it('should return base64 to null', () => {
    const value = decodeFromBase64('');
    expect(value).toEqual(null);
  });
});
