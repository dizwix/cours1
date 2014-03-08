var $ = require('../dom/selector')
  , listen = require('../dom/listen')
  , zoom = $('zoom')

listen(document.body, 'mouseover', showPicture)

function showPicture(eventObject){
  var target = eventObject.target
  if(target.tagName != 'IMG') return
  if(!target.hasAttribute('data-src')) return
  zoom.src = target.getAttribute('data-src')
}
