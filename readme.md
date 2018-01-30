# seed-bytes

[![build status](http://img.shields.io/travis/chiefbiiko/seed-bytes.svg?style=flat)](http://travis-ci.org/chiefbiiko/seed-bytes) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/seed-bytes?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/seed-bytes)

***

A seedable random byte generator.

***

## Get it!

```
npm install --save seed-bytes
```

## Usage

``` js
var seed = require('seed-bytes')
var next = seed('sesame open')

next()  // a single byte
next(419) // n bytes at once, as a buffer
```

## API

### `var next = seed(init[, algo])`

Create a new byte generator seeded with `init`, using the algorithm indicated by `algo`, which defaults to `alea`. You can use any algorithm supported by [`seedrandom`](https://github.com/davidbau/seedrandom#other-fast-prng-algorithms). `init` can be of any type.

### `next([n])`

Get the next byte or the next `n` bytes in a buffer.

## License

[MIT](./license.md)
