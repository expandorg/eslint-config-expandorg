module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    Web3: true,
  },
  rules: {
    'function-paren-newline': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: [ 'hrefLeft', 'hrefRight' ],
        apects: [ 'noHref', 'invalidHref', 'preferButton' ],
      },
    ],
  },
};
