module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
        require.resolve('./base'),
        'prettier',
    ],
    parser: 'babel-eslint',
    plugins: ['react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // jsx may reference to styles which defined later (react-native pattern)
        'no-use-before-define': ['error', { variables: false }],

        // allow non-dom to use autoFocus prop
        'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

        // display-name Prevent missing displayName in a React component definition
        // enforce displayName in React components makes debugging Production issues easier
        'react/display-name': ['error', { ignoreTranspilerName: true }],

        // prefer syntax (shorthand) mode for fragments
        'react/jsx-fragments': ['error', 'syntax'],

        // enforce self closed tags
        'react/self-closing-comp': 'error',

        // react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./typescript'), 'prettier'],
            rules: {
                // prop-types checked by tsc in compile time
                'react/prop-types': 'off',

                // use ts version no-use-before-define
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
            },
        },
    ],
};
