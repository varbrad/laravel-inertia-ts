const [IGNORE, WARNING, ERROR] = [0, 1, 2]

const TS_CONFIG = {
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': IGNORE, // typescript-eslint enforces typed props already
    'no-void': IGNORE, // `void` is fine to use in TS for void-return functions
    'no-undef': IGNORE, // tsc will catch these errors, and it causes problems with optional chaining (3.7)
    // TS Specific overrides
    '@typescript-eslint/explicit-function-return-type': [
      ERROR,
      { allowExpressions: true },
    ],
  },

}

module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  overrides: [TS_CONFIG],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Plain Eslint
    'complexity': [ERROR, 10],
    // TypeScript
    // React rules
    'react/react-in-jsx-scope': IGNORE,
    'react/prop-types': IGNORE,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
