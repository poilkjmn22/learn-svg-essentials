const SVG_NS = 'http://www.w3.org/2000/svg'
function svg(tagName){
  return document.createElementNS(SVG_NS, tagName || 'svg')
}
export {
  svg
}
