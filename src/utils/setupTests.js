import { randomBytes } from 'crypto';
/* eslint-disable @typescript-eslint/no-empty-function */
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr) => randomBytes(arr.length),
  },
});
