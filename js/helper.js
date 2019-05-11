const SVG_NS = 'http://www.w3.org/2000/svg'
import * as _ from 'lodash-es'

function svg(tagName){
  var svgEl = document.createElementNS(SVG_NS, tagName || 'svg')
  if(!tagName) {
    svgEl.setAttribute('xmlns', SVG_NS)
  }
  return svgEl
}

function attr(elm, values){
  _.each(values, (v,k) => {
    elm.setAttribute(_.kebabCase(k), v)
  })
}
export {
  svg,
  attr
}
