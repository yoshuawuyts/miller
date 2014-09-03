# miller
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Schema validator for objects. Best used as a sanity check for devs, and not to
validate user input (e.g. we're using `throw`).

## Installation
```bash
$ npm i --save miller
```
## Overview
```js
var miller = require('miller');

var schema = miller({
  code: 'number',
  message: 'string'
});

schema({
  code: 302,
  message 'foo-bar'
});
// => {code: 302, message: 'foo-bar'}
```

## API
#### miller(schema)
Create a validator based on a provided schema object. Input types can be
JavaScript primitives only.
```js
var schema = miller({
  foo: 'string',
  bar: 'number'
});
```

#### miller()(input)
Check an object against the provided schema. If the schema doesn't match the
input throws a `TypeError`.
```js
schema({
  foo: 'bin',
  bar: 123
});
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/miller.svg?style=flat-square
[npm-url]: https://npmjs.org/package/miller
[travis-image]: https://img.shields.io/travis/yoshuawuyts/miller.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/miller
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/miller.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/miller?branch=master
