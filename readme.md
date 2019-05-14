# seed-bytes

[![build status](http://img.shields.io/travis/chiefbiiko/seed-bytes.svg?style=flat)](http://travis-ci.org/chiefbiiko/seed-bytes) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/seed-bytes?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/seed-bytes)

***

A seedable random byte generator. The algorithms available are **not cryptographically secure**!

***

## Get it!

```
npm install --save seed-bytes
```

***

## Usage

``` js
var seed = require('seed-bytes')
var next = seed('sesame open')

next() // a single byte
next(419) // n bytes at once, as a buffer
```

***

## API

### `var next = seed(init[, algo])`

Create a new random byte generator. `init` can be of any type. Set the algorithm for the internal random number generator with `algo`, defaults to `'alea'`. Check out  [`seedrandom`](https://github.com/davidbau/seedrandom#other-fast-prng-algorithms) for a list of supported algorithms. **None of those are cryptographically secure**.

### `next([n])`

Get the next byte or the next `n` bytes in a buffer.

***

## License

[MIT](./license.md)
