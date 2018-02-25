# js-type-checking [![Build Status](https://travis-ci.org/iamdevonbutler/js-type-checking.svg?branch=master)](https://travis-ci.org/iamdevonbutler/js-type-checking)

Simple type-checking for JS.

**Requires: node >= 9**

## Installation
```
npm i --save js-type-checking
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
const isType = require('js-type-checking');
isType({}, 'object'); // true
```

## License
MIT
