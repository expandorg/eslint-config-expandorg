module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'function-paren-newline': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: [ 'hrefLeft', 'hrefRight' ],
        apects: [ 'noHref', 'invalidHref', 'preferButton' ],
      },
    ],
  },
};
