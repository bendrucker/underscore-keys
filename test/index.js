'use strict'

var test = require('tape')
var underscoreKeys = require('../')

test(function (t) {
  t.deepEqual(underscoreKeys({
    foo: 'bar'
  }),
  {
    _foo: 'bar'
  })
  t.end()
})
