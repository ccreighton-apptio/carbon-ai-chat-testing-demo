module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": ["babel-jest"],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "^@carbon/ai-chat$": "<rootDir>/node_modules/@carbon/ai-chat/dist/es/aiChatEntry.js",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  transformIgnorePatterns: ["node_modules/(?!(@carbon|lit-html|lit-element|lit|@lit|@lit-labs|lodash-es)/)"],
  moduleDirectories: ["node_modules", "src"],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
