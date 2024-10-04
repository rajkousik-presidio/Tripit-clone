export default {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Handle CSS imports
    "\\.(svg|jpg|png)$": "<rootDir>/__mocks__/fileMock.js", // Mock static assets
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup Testing Library
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transform JavaScript using Babel
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"], // Match test files
};
