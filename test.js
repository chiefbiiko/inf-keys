var tape = require('tape')
var seed = require('./index')

function isByte (x) {
  return x && Object.getPrototypeOf(x) === Number.prototype &&
    x >= 0 && x <= 255
}

tape('gen bytes', function (t) {
  var next = seed('sesame open')
  var bytes = []
  for (var i = 0; i < 100; i++) bytes.push(next())
  t.true(bytes.every(isByte), 'all bytes')
  t.end()
})

tape('getting n bytes at once', function (t) {
  var next = seed(Buffer.from('secret'))
  var bytes = next(1000)
  t.true(Buffer.isBuffer(bytes), 'is buf')
  t.end()
})

tape('same seed same bytes', function (t) {
  var anext = seed('shared secret')
  var a = anext(10000)
  var bnext = seed('shared secret')
  var b = bnext(10000)
  t.true(a.equals(b), 'equal bytes')
  t.end()
})
