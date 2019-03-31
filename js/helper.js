const SVG_NS = 'http://www.w3.org/2000/svg'
function svg(tagName){
  var svgEl = document.createElementNS(SVG_NS, tagName || 'svg')
  if(!tagName) {
    svgEl.setAttribute('xmlns', SVG_NS)
  }
  return svgEl
}
export {
  svg
}
