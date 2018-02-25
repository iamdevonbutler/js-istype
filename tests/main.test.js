const isType = require('../lib');

const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

var values = [
  ['', 'string'],
  [1, 1.11, .9],
  [true, false],
  [[], [1,2]],
  [{}, {a: 1}],
  [null],
  [undefined],
  [() => {}, function() {}, async function() {}, function* () {}, new Proxy(() => {}, {apply() {}})],
  [Symbol()],
  [NaN],
  [new Date()],
  [new Error()],
];

var types = [
  'string',
  'number',
  'boolean',
  'array',
  'object',
  'null',
  'undefined',
  'function',
  'symbol',
  'NaN',
  'date',
  'error',
];

// @todo possiblities.
describe('js-type-checking tests', () => {
  it ('should properly type-check values', () => {
    values.forEach((values1, i) => {
      values1.forEach(value => {
        types.forEach((type, ii) => {
          if (i === ii) {
            expect(isType(value, type)).to.be.true;
          }
          else {
            expect(isType(value, type)).to.be.false;
          }
        });
      });
    });
  });
  it ('should throw an error given an unspported type', () => {
    try {
      isType(1, 'str');
      throw 'Test should throw';
    }
    catch (e) {
      expect(e).to.be.an('error');
    }
  });
});
