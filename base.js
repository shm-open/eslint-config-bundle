const typescriptEslint = require('./lib/typescript');
const sharedRules = require('./lib/shared-rules');

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    rules: Object.assign({}, sharedRules.base, {}),

    settings: Object.assign({}, typescriptEslint.settings, {
        // additional settings
    }),

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./lib/typescript')],
        },
    ],
};
