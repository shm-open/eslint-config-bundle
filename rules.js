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
        // why?:
        // named export is more friendly when you want to search for
        // all usages of a class or a function, it works better when
        // we want to refactor code with a large project
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',

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
