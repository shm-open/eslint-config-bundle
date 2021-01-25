// shared rules
module.exports = {
    // base rules
    base: {
        // class member, allow single line member don't have empty line between each other
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // import ignore resolving asset files
        'import/no-unresolved': [
            'error',
            {
                caseSensitive: true,
                ignore: ['.png$', '.jpe?g$', '.gif$', '.webp$', '.md$'],
            },
        ],

        // import js(x), ts(x) files without extension
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        // prefer named export
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'warn',

        // unused exports
        'import/no-unused-modules': [
            'warn',
            {
                unusedExports: true,
            },
        ],

        // max lines allowed
        'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['warn', { max: 80, skipBlankLines: true, skipComments: true }],

        // ignore use this check for class methods
        'class-methods-use-this': 'off',
    },

    // react rules
    react: {
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

    // react typescript file rules
    react_ts: {
        // prop-types checked by ts in compile time
        'react/prop-types': 'off',

        // use ts version no-use-before-define
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    },
};
