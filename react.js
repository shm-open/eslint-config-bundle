const sharedRules = require('./lib/shared-rules');

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
    rules: sharedRules.react,

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./lib/typescript'), 'prettier/react'],
            rules: Object.assign({}, sharedRules.react, sharedRules.react_ts, {
                // additional rules
            }),
        },
    ],
};
