const sharedRules = require('./lib/shared-rules');
module.exports = {
    extends: [require.resolve('./react'), 'taro/react', 'prettier/react'],
    rules: sharedRules.react,
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./lib/typescript'), 'taro/react', 'prettier/react'],
            rules: Object.assign({}, sharedRules.react, sharedRules.react_ts, {
                // additional rules
            }),
        },
    ],
};
