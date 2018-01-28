var tape = require('tape')
var keys = require('./index')

function isByte (x) {
  return x && Object.getPrototypeOf(x) === Number.prototype &&
    x >= 0 && x <= 255
}

tape('never ending keys', function (t) {
  var next = keys('sesame open')
  var keyz = []
  for (var i = 0; i < 100; i++) keyz.push(next())
  // console.log(keyz)
  t.true(keyz.every(isByte), 'all bytes')
  t.end()
})

tape('getting n bytes at once', function (t) {
  var next = keys('secret')
  var bytes = next(1000)
  // console.log(bytes)
  t.true(Buffer.isBuffer(bytes), 'getting a byte array of spec length')
  t.end()
})

tape('same key same keystream', function (t) {
  var anext = keys('shared secret')
  var a = anext(1000)
  var bnext = keys('shared secret')
  var b = bnext(1000)
  t.true(a.equals(b), 'equal keystreams')
  t.end()
})
