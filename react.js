module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        require.resolve('./base'),
        'prettier/react',
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
        'react/display-name': ['warn', { ignoreTranspilerName: true }],

        // react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./typescript'), 'prettier/react'],
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
