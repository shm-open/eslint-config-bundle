// settings for both js and ts
const commonSettings = {
    'import/resolver': {
        node: {
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.ios.js',
                '.ios.jsx',
                '.ios.ts',
                '.ios.tsx',
                '.android.js',
                '.android.jsx',
                '.android.ts',
                '.android.tsx',
                '.native.js',
            ],
        },
    },
};

module.exports = {
    extends: [require.resolve('./react'), 'plugin:react-native/all'],
    env: {
        'react-native/react-native': true,
    },
    settings: Object.assign({}, commonSettings, {
        // additional additional settings
    }),
    rules: {
        // allow permissionAndroid being using without a .android.js
        'react-native/split-platform-components': 'off',

        // TODO: disable due to: https://github.com/Intellicode/eslint-plugin-react-native/issues/271
        'react-native/no-raw-text': 'off',
    },
};
