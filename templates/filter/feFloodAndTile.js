import {svg, attr, createSvgEl, createGFlower, setXLinkHref} from '../../js/helper'
import * as _ from 'lodash-es'
var mainBox = document.querySelector('#main-svg-box')

var svgEl = createSvgEl('', {
  width: 300,
  height: 150,
  viewBox: '0 0 400 300'
})
mainBox.appendChild(svgEl)

svgEl.suspendRedraw(1000)

var defs = svg('defs')
svgEl.appendChild(defs)

defs.appendChild(createGFlower())

var floodFilter = createSvgEl('filter', {
  id: 'flood-filter',
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
})
defs.appendChild(floodFilter)
floodFilter.appendChild(createSvgEl('feFlood', {
  'flood-color': '#930',
  'flood-opacity': '0.8',
  result: 'tint'
}))
floodFilter.appendChild(createSvgEl('feComposite', {
  in: 'tint',
  in2: 'SourceGraphic',
  operator: 'in'
}))

var tileFilter = createSvgEl('filter', {
  id: 'tile-filter',
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
})
defs.appendChild(tileFilter)
tileFilter.appendChild(createSvgEl('feImage', {
  'xlink:href': '/assets/images/cloth.jpg',
  'class': 'fe-image-cloth',
  width: '32px',
  height: '32px',
  result: 'cloth'
}))
tileFilter.appendChild(createSvgEl('feTile', {
  in: 'cloth',
  result: 'cloth'
}))
tileFilter.appendChild(createSvgEl('feComposite', {
  in: 'cloth',
  in2: 'SourceGraphic',
  operator: 'in'
}))
_.each(svgEl.querySelectorAll('.fe-image-cloth'), el => {
  setXLinkHref(el, '/assets/images/cloth.jpg')
})

svgEl.appendChild(createSvgEl('use', {
  'xlink:href': '#flower',
  'class': 'use-flower',
  transform: 'translate(0, 0)',
  style: 'filter: url(#flood-filter);'
}))

svgEl.appendChild(createSvgEl('use', {
  'xlink:href': '#flower',
  'class': 'use-flower',
  transform: 'translate(110, 0)',
  style: 'filter: url(#tile-filter);'
}))
_.each(svgEl.querySelectorAll('.use-flower'), useFlower => {
  useFlower.href.baseVal = '#flower'
})
svgEl.appendChild(createSvgEl('image', {
  'xlink:href': '/assets/images/cloth.jpg',
  'class': 'image-cloth',
  x: '220',
  y: 10,
  width: 300,
  height: 300
}))
_.each(svgEl.querySelectorAll('.image-cloth'), el => {
  setXLinkHref(el, '/assets/images/cloth.jpg')
})

svgEl.unsuspendRedrawAll()
