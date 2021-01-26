module.exports = {
    // base rules
    rules: {
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
};
