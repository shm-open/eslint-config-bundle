# ESLint Config Bundle ![Node.js CI](https://github.com/shm-open/eslint-config-bundle/workflows/Node.js%20CI/badge.svg)

[[Chinese version 中文版]](./README.cn.md)

ESLint + config bundle based on [Airbnb's config](https://airbnb.io/javascript/), with [TypeScript](https://www.typescriptlang.org/) and [Prettier](https://prettier.io/) support

## Why config bundle

It includes both ESLint + plugins and config files inside this bundle all together. We known that common practice is only ship the config files (like `eslint-config-airbnb`), but we found config and plugins are always tied to some ESLint version and the compatiliby between ESLint, plugins and config is hard to maintain in client projects, therefore we create this bundle to help - includes ESLint + plugins + config, all shipped with fixed version.

## Install

[EditorConfig](https://editorconfig.org/) is recommended to use together with this bundle, it helps with basic editor config that can work with Prettier such as the `indent_size` (which we didn't put into the Prettier config to leave it to EditorConfig)

### Install the bundle package as a dev dependency

```
$ npm install @shm-open/eslint-config-bundle --save-dev
```

### Create .eslintrc.js, .prettierrc.js under project root

Note: you may need change to `.cjs` ext if current project type is `module`

-   .prettierrc.js

```
module.exports = require('@shm-open/eslint-config-bundle/prettier');
```

-   .eslintrc.js - basic ts/js projects

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle']
}
```

-   .eslintrc.js - React projects

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react']
}
```

-   .eslintrc.js - React Native projects

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react-native']
}
```

-   .eslintrc.js - Taro projects

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/taro']
}
```
