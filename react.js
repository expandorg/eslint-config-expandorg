module.exports = {
  extends: [
    '@expandorg/eslint-config', 
    'prettier/react'
  ],
  env: { 
    browser: true 
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/button-has-type': ['off'],
    'react/destructuring-assignment': ['off'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight'],
        apects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'react/prefer-stateless-function': ['off'],
    'react/prop-types': [2, { ignore: ['children'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/static-property-placement': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/state-in-constructor': ['off'],
  },
  plugins: [
    'react',
    'react-hooks'
  ]
};
