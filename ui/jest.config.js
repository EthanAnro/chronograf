module.exports = {
  projects: [
    {
      globals: {
        'ts-jest': {
          babelConfig: './.babelrc.jest',
          tsconfig: './tsconfig.test.json',
        },
      },
      displayName: 'test',
      testPathIgnorePatterns: [
        'build',
        '<rootDir>/cypress/',
        '<rootDir>/node_modules/(?!(jest-test))',
      ],
      modulePaths: ['<rootDir>', '<rootDir>/..'],
      moduleDirectories: ['src', 'node_modules'],
      setupFiles: ['<rootDir>/test/setup.js'],
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': ['babel-jest', {configFile: './.babelrc.jest'}],
      },
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'eslint',
      testMatch: ['<rootDir>/test/**/*.test.js'],
    },
  ],
}
