# ESLint Config Bundle

ESLint + config bundle based on Airbnb's config, with TypeScript and Prettier support

## Install

### Install the bundle package as dev dependency

```
$ npm install @shm-open/eslint-config-bundle --save-dev
```

### Create .eslintrc.js, .prettierrc.js under project root

```
/** .eslintrc.js */

// basic js/ts projects
module.exports = {
    extends: ['@shm-open/eslint-config-bundle']
}

// for react project
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react']
}

// for react-native project
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react-native']
}


/** .prettierrc.js */
module.exports = require('@shm-open/eslint-config-bundle/prettier');

```
