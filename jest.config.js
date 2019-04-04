module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    testEnvironment: "node",
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    }
};
