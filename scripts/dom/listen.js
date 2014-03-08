module.exports = function(element, type, listener){
  if(element == null) return
  if(element.addEventListener) {
    element.addEventListener(type, listener, false)
    return
  }
  element.attachEvent("on" + type, listener)
}
