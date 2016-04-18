'use strict'

require! {
  '../quotes.json'
  'chai': {expect}
  'prelude-ls': {each}
}

describe "Brazilian Horror Story Testing Specifications" ->

  checkObject = (element) ->
    expect element .to.be instanceof Object

  specify 'Used quotes should be in a valid array' ->
    expect quotes .to.be instanceof Array

  specify 'There should be at least 1 quote' ->
    expect quotes.length .to.be.above 1

  specify 'Each quote be a valid object' ->
    each (checkObject), quotes
