# toolbox
All the goodies

## Frameworks
- https://github.com/inuitcss/inuitcss
- https://github.com/vigetlabs/blendid
- https://serverless.com

## Linting & Formatting
- https://github.com/airbnb/javascript
- https://www.npmjs.com/package/eslint-config-airbnb
- https://prettier.io/docs/en/ (https://prettier.io/docs/en/comparison.html)

## IDE: VS Code
- https://github.com/mrmlnc/vscode-postcss-sorting
- https://github.com/wesbos/cobalt2-vscode
- https://github.com/ronnidc/vscode-nunjucks
- https://github.com/GingerBear/vscode-liquid

## Packages

### ESLint

...

### Stylelint

[stylelint-scss](https://github.com/kristerkari/stylelint-scss)
[stylelint-order](https://github.com/hudochenkov/stylelint-order)
[stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
[stylelint-config-prettier](https://github.com/shannonmoeller/stylelint-config-prettier)

## Setting Up

```
// InuitCSS
yarn add inuitcss

// Linting - prettier with eslint + stylelint
yarn add -D prettier eslint eslint-config-prettier eslint-plugin-prettier

(export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest")

yarn add -D stylelint stylelint-scss stylelint-order stylelint-config-recommended stylelint-config-prettier
```
