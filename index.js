var seedrandom = require('seedrandom')

function many (n, gen) {
  var buf = Buffer.alloc(n)
  for (var i = 0; i < n; i++) buf[i] = gen()
  return buf
}

function seed (init, algo) {
  return (function next (rng, n) {
    return n ? many(n, next.bind(null, rng, null)) : (rng() * 256 | 0)
  }).bind(null, seedrandom[(algo || 'alea')](init))
}

module.exports = seed
