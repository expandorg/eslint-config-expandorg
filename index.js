module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype'
  ],
  env: {
    es6: true,
    jest: true
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['off'],
    'class-methods-use-this': ['off'],
    'no-param-reassign': ['off'],
    'object-curly-newline': ['off'],
    'lines-between-class-members': ['off'],
    'no-underscore-dangle': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },
  plugins: [
    'prettier', 
    'flowtype'
  ]
};
