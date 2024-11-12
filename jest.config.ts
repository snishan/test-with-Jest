import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest', 
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'], 
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
  preset: 'ts-jest',
};

export default config;
