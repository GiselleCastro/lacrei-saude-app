import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jest-environment-jsdom",

  collectCoverage: true,

  clearMocks: true,

  collectCoverageFrom: [
    "src/components/**/*.tsx",
    "src/app/**/*.tsx",
    "!src/app/layout.tsx",
  ],

  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "logs"],
  coverageProvider: "babel",
  coverageReporters: ["json", "text", "lcov", "clover"],
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(config)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      "\\.svg$": "<rootDir>/mock/svgMock.tsx",
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

export default jestConfig;
