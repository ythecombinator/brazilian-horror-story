'use strict';
var rand, quotes;
rand = require('unique-random-array');
quotes = require('./quotes.json');
module.exports = function(){
  var candidate;
  candidate = rand(quotes);
  return candidate();
};