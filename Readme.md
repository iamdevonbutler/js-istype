# js-istype [![Build Status](https://travis-ci.org/iamdevonbutler/js-istype.svg?branch=master)](https://travis-ci.org/iamdevonbutler/js-istype)

Simple type checking for JS.

**Requires: node >= 9**

## Installation
```
npm i --save js-istype
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
