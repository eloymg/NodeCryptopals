var functions = require('./functions')

a = functions.kv_parser("foo=bar&baz=qux&zap=zazzle")

console.log(a)