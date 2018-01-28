var crypto = require('crypto')
var { rolInt8, rorInt8 } = require('bitwise-rotation')

var IV = crypto.randomBytes(64)

function sha512 (buf) {
  return crypto.createHash('sha512').update(buf).digest()
}

function xor (a, b) {
  var len = Math.max(a.length, b.length)
  var buf = Buffer.alloc(len)
  for (var i = 0; i < len; i++) buf[i] = a[i] ^ b[i]
  return buf
}

function mapbuf (buf, func, that) {
  var map = Buffer.from(buf)
  for (var i = 0; i < map.length; i++) map[i] = func.call(that, buf[i], i)
  return map
}

function rolbuf (buf) {
  var rot = Buffer.alloc(buf.length)
  for (var i = 0; i < rot.length; i++) rot[i] = rolInt8(buf[i], 1)
  return rot
}

/*
  write another module that implements a bikeshed stream cipher
    use this module for the keystream
    simple xor-cipher: en/decryption are identical
    xor each byte of the plainstream against the neighbor byte of the keystream
*/

// at init: xor the sha512 of the buf of the pw against 64 digits of pi
// how random is this keystream?
function keys (pw) {
  var cur = xor(IV, sha512(Buffer.from(pw)))
  var mut = rolbuf(cur)
  var o = 0
  return function next (n) {
    if (n) return mapbuf(Buffer.alloc(n), next.bind(null, null))
    var b = cur[o++]
    if (b === undefined) {
      cur = mut
      mut = rolbuf(cur)
      o = 0
      b = cur[o++]
    }
    return b
  }
}

module.exports = keys
