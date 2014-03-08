var $ = require('../dom/selector')
  , listen = require('../dom/listen')
  , i18n = require('../i18n/fr')
  , fill = require('../dom/changeProperty')
  , elements = {
      home : $('accueil'),
      blog : $('blog'),
      gallery : $('galerie'),
      about : $('apropos'),
      contact : $('contact')
    }
  , fillHelp = fill($('aide'), 'innerHTML')
  , emptyHelp = fillHelp(' ')
  , key

for(key in elements) {
  if(!elements.hasOwnProperty(key)) continue
  listen(elements[key], 'mouseover', fillHelp(i18n[key]))
  listen(elements[key], 'mouseout', emptyHelp)
}
