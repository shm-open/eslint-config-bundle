module.exports = {
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        require.resolve('./rules'),
    ],
    // use a forked plugin due to https://github.com/gund/eslint-plugin-deprecation/pull/38
    plugins: ['@delagen/deprecation'],
    // parser @typescript-eslint/parser already set by extends from plugin:@typescript-eslint/recommended
    // however, it needs parserOptions `project: './tsconfig.json'` to work
    parserOptions: { sourceType: 'module', project: './tsconfig.json' },
    rules: {
        // additional ts rules

        // deprecation
        '@delagen/deprecation/deprecation': 'warn',

        // switch to typescript version rules
        // camelcase
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
                leadingUnderscore: 'allowSingleOrDouble',
                custom: {
                    // Id should be ID or id
                    regex: 'Id([A-Z0-9]|\\b)',
                    match: false,
                },
            },
            // SomeEnum.ENUM_VALUE
            {
                selector: 'enum',
                format: ['PascalCase'],
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
            },
            // variableLike
            {
                selector: 'variableLike',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
            // Type, Interface
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'objectLiteralProperty',
                format: ['camelCase', 'snake_case', 'UPPER_CASE'],
                // __html used in React is a sepcial case
                filter: {
                    regex: '__html',
                    match: false,
                },
            },
        ],

        // array type
        '@typescript-eslint/array-type': ['error'],

        // no-unused-vars
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],

        // no-unused-expressions
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],

        // no-useless-constructor
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],

        // no-shadow
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // TypeScript compilation already ensures that named imports exist in the referenced module
        'import/named': 'off',
    },

    settings: {
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.native.js'],
            },
            // for deprecation plugin
            typescript: {
                alwaysTryTypes: true,
            },
        },
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.native.js'],

        // use typescript parser for ts, tsx import
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};

try {
    // check if typescript installed
    require.resolve('typescript');
} catch (e) {
    // disable typescript related config if current project doesn't use typescript
    module.exports = {};
}
