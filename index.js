module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['off'],
    'class-methods-use-this': ['off'],
    'no-param-reassign': ['off'],
    'object-curly-newline': ['off'],
    'lines-between-class-members': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/button-has-type': ['off'],
    'react/destructuring-assignment': ['off'],
    'no-underscore-dangle': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight'],
        apects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/prefer-stateless-function': ['off'],
    'react/prop-types': [2, { ignore: ['children'] }],
  },
  plugins: ['react', 'prettier', 'flowtype'],
};
