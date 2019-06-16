# js-istype [![Build Status](https://travis-ci.org/iamdevonbutler/js-istype.svg?branch=master)](https://travis-ci.org/iamdevonbutler/js-istype-checking)

Simple type-checking for JS.

**engines: node >= 9.x**

## Installation
```
npm i --save iamdevonbutler/js-istype#1.0
```

## Supported types
- string
- number
- boolean
- array
- object
- null
- undefined
- function
- error
- symbol
- NaN
- date

*API uses lowercase type names (but NaN is NaN)*

## Example
```javascript
const isType = require('js-istype');
isType({}, 'object'); // true
```

## License
MIT
