# Javascript

## Setting Up for React

[Reference](https://github.com/maoueh/blendid-react-example)

CLI

```
yarn add react react-dom react-hot-loader // etc ...
yarn add -D babel-preset-react-app
```

`task-config.js` (Blendid)

```
javascripts: {
  entry: {
    // files paths are relative to
    // javascripts.dest in path-config.json
    app: ["./app.js"],
  },
  hot: {
    react: true,
  },
  babel: {
    presets: ["react-app"],
  },
}
```

## Important React Packages

- [classnames](https://github.com/JedWatson/classnames)
