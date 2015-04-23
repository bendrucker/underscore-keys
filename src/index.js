'use strict'

var mapObj = require('map-obj')

module.exports = function (obj) {
  return mapObj(obj, function (key, value) {
    return ['_' + key, value]
  })
}
