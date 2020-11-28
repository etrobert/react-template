module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  moduleNameMapper: {
    '.css$': '<rootDir>/__mocks__/styleMock.ts',
  },
};
