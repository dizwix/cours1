var tape = require('tape')
  , $ = require('../scripts/dom/selector')
  , listen = require('../scripts/dom/listen')
  , changeProperty = require('../scripts/dom/changeProperty')

tape('dom selector', function(test){
  var div = document.createElement('div')
  div.id = 'foo-bar'
  document.body.appendChild(div)
  test.equal($('foo-bar'), div, 'should find an element by its id')
  test.end()
})

tape('change property', function(test){
  var div = document.createElement('div')
    , changeInnerHTML = changeProperty(div, 'innerHTML')
    , fillFoo = changeInnerHTML('foo')
  test.equal(typeof changeInnerHTML, 'function', 'returns a function')
  test.equal(typeof fillFoo, 'function', 'created function returns a function')
  fillFoo()
  test.equal(div.innerHTML, 'foo', 'which sets the given property')
  test.end()
})

tape('listen', function(test){
  var div = document.createElement('div')
    , evt

  test.doesNotThrow(function(){
    listen(null, 'foo', function(){})
  })

  document.body.appendChild(div)
  listen(div, 'foo', function(){
    test.pass('event is attached')
    test.end()
  })
  
  evt = document.createEvent('Event');
  evt.initEvent('foo', true, true);
  div.dispatchEvent(evt)
})