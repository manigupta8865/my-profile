import { getCookie, setCookie, deleteCookie } from './cookies';

describe('cookies methods', () => {
  describe('getCookie Method', () => {
    beforeEach(() => {
      Object.defineProperty(document, 'cookie', {
        writable: true,
        value: 'a=1; b=2; c=3',
      });
    });

    it('should retrieve the cookie value based on a given cookie name', () => {
      const cookieValue = getCookie('b');
      const expectedOutput = '2';
      expect(cookieValue).toEqual(expectedOutput);
    });

    it('should return undefined if cookie value is not found for the given cookie name', () => {
      const cookieValue = getCookie('d');
      expect(cookieValue).toEqual(undefined);
    });

    it('should return undefined if there are no cookies', () => {
      Object.defineProperty(document, 'cookie', {
        writable: true,
        value: undefined,
      });
      const cookieValue = getCookie('a');
      expect(cookieValue).toEqual(undefined);
    });
  });

  describe('setCookie Method', () => {
    beforeEach(() => {
      Object.defineProperty(document, 'cookie', {
        writable: true,
      });
    });

    it('should set a new cookie with provided parameters, that does not expire', () => {
      const testName = 'booking_cookie';
      const testValue = 'AWU123123123';
      const testTime = 0;
      setCookie(testName, testValue, testTime, true);
      const expectedOutput =
        'booking_cookie=AWU123123123;;path=/en-gb;domain=localhost;secure=true';
      expect(document.cookie).toEqual(expectedOutput);
    });

    it('should set a new cookie with provided parameters, that expires in 1 minute', () => {
      const testName = 'booking_cookie';
      const testValue = 'AWU123123123';
      const testTime = 1;
      const expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + testTime * 60 * 1000);

      setCookie(testName, testValue, testTime, true);
      const expectedOutput = `booking_cookie=AWU123123123;expires=${expiryDate.toUTCString()};path=/en-gb;domain=localhost;secure=true`;
      expect(document.cookie).toEqual(expectedOutput);
    });
  });

  describe('deleteCookie Method', () => {
    beforeEach(() => {
      Object.defineProperty(document, 'cookie', {
        writable: true,
        value: 'a=1; b=2; c=3',
      });
    });

    it('should set expiry date to 1970 for a given cookie name', () => {
      deleteCookie('a');
      expect(document.cookie).toEqual(
        'a=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=localhost'
      );
    });
  });
});
