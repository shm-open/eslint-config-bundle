# ESLint Config Bundle ![Node.js CI](https://github.com/shm-open/eslint-config-bundle/workflows/Node.js%20CI/badge.svg)

基于 [Airbnb 配置](https://airbnb.io/javascript/)的 ESLint 配置捆绑包, 含 [Typescript](https://www.typescriptlang.org/)和[Prettier](https://prettier.io/) 支持

## 为什么要用捆绑包

捆绑包里包含了 ESLint + 插件和配置文件. 我们知道业界常见的做法是只发布配置文件, 但是我们注意到配置文件和插件往往会绑定到指定的 ESLint 版本, 而维护配置文件与 ESLint 和插件的版本兼容对于最终使用的工程项目来说是一件麻烦的事, 所以我们把固定版本的 ESLint, 插件以及配置文件放在一起发布, 保证它们之间的兼容性

## 安装

推荐考虑安装[EditorConfig](https://editorconfig.org/)与这个捆绑包一起使用, Prettier 也会尊重 EditorConfig 的一些基础设置, 所以我们在 Prettier 没有设 `indent_size`, 把它们留给 EditorConfig

### 作为 npm 开发依赖安装

```
$ npm install @shm-open/eslint-config-bundle --save-dev
```

### 在项目的根目录下创建 .eslintrc.js, .prettierrc.js 文件, 内容如下

注意: 如果项目的类型是`module`, 可能会需要把扩展名改成 `.cjs`

-   .prettierrc.js

```
module.exports = require('@shm-open/eslint-config-bundle/prettier');
```

-   .eslintrc.js - 基础的 ts/js 项目

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle']
}
```

-   .eslintrc.js - React 项目

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react']
}
```

-   .eslintrc.js - React Native 项目

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react-native']
}
```

-   .eslintrc.js - Taro 项目

```
module.exports = {
    extends: ['@shm-open/eslint-config-bundle/taro']
}
```
