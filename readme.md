# falcor-array [![Build Status](https://travis-ci.org/ajoslin/falcor-array.svg?branch=master)](https://travis-ci.org/ajoslin/falcor-array)

> Methods to mutate part of a falcor graph as if it was an array

**Status: WIP**

## Install

```
$ npm install --save falcor-array
```


## Usage

```js
var falcorArray = require('falcor-array')

falcorArray.insert(model, ['my', 'items'], {
  index: -1,
  value: {$type: 'ref', ref: ['itemsById', 2]}
})
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
