module.exports = function(element, property){
  return function(value){
    // closures the [property, value] to create
    // a listener
    return function(){
      element[property] = value
    }
  }
}
