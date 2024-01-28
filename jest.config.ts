import type {Config} from 'jest';

const config: Config = {
  roots: [ '<rootDir>/src' ],
  moduleDirectories: [
    'node_modules', 'src'
  ],
  moduleFileExtensions: [
    'js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'
  ],

  verbose: true
};

export default config;
