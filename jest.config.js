// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~atoms': '<rootDir>/src/components/atoms/index.ts',
    '^~organisms': '<rootDir>/src/components/organisms/index.ts',
    '^~utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~pages/(.*)$': '<rootDir>/src/pages/$1',
    '^next/router$': '<rootDir>/__mocks__/next/router.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/shared/component/**/*.{js,jsx,ts,tsx}',
    'src/pages/**/*.{js,jsx,ts,tsx}',
    'src/utils/**/*.{js,jsx,ts,tsx}',
    '!src/**/types.{js,jsx,ts,tsx}',
    '!src/components/**/NavigationMenu.style.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/components/organisms/common/ScriptsEmbed/*.{js,jsx,ts,tsx}',
    '!src/components/organisms/TableBookingForm/*.ts',
    '!src/pages/queries/**/*.tsx',
    '!src/utils/constant/*.{js,jsx,ts,tsx}',
    '!src/utils/**/graphql.ts',
    '!src/utils/analytics/*.{js,jsx,ts,tsx}',
    '!src/utils/logger/logger.ts',
    '!src/utils/gql/client.ts',
    '!src/utils/test-utils.tsx',
    '!src/pages/api/getApis/**/*.{ts,tsx}',
    '!src/components/atoms/theme/**/*.{js,jsx,ts,tsx}',
  ],
  coverageProvider: 'v8',
  setupFiles: ['./src/utils/setupTests.js'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
