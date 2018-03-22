# Javascript things

## Enabling blendid to build for Swiper 4+

in `task-config.js`

```
babelLoader: {
  // "test" is derived from TASK_CONFIG.javascripts.extensions
  // "options" is derived from TASK_CONFIG.javascripts.babel
  loader: "babel-loader",
  exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
},
```
