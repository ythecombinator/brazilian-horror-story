'use strict'

require! {
  'unique-random-array': rand
  './quotes.json'
}

module.exports = ->

  candidate = rand quotes
  candidate!
