import './index.scss'
import * as _ from 'lodash-es'
import './feFloodAndTile'

import {svg, attr, createSvgEl} from '../../js/helper'
var mainBox = document.querySelector('#main-svg-box')

var svgEl = svg()
attr(svgEl, {
  width: 400,
  height: 300,
  viewBox: '0 0 400 300'
})
mainBox.appendChild(svgEl)

svgEl.suspendRedraw(1000)

var defs = svg('defs')
svgEl.appendChild(defs)

var fDropShadow = svg('filter')
attr(fDropShadow, {
  id: 'drop-shadow'
})
defs.appendChild(fDropShadow)

var feGB = svg('feGaussianBlur')
attr(feGB, {
  in: 'SourceAlpha',
  stdDeviation: '2',
  result: 'blur'
})
fDropShadow.appendChild(feGB)

var feOffset = svg('feOffset')
attr(feOffset, {
  in: 'blur',
  dx: '4',
  dy: '4',
  result: 'offsetBlur'
})
fDropShadow.appendChild(feOffset)

var feMerge = svg('feMerge')
var feMergeNode1 = svg('feMergeNode')
attr(feMergeNode1, {
  in: 'offsetBlur'
})
feMerge.appendChild(feMergeNode1)
var feMergeNode2 = svg('feMergeNode')
attr(feMergeNode2, {
  in: 'SourceGraphic'
})
feMerge.appendChild(feMergeNode2)
fDropShadow.appendChild(feMerge)

var gFlower = svg('g')
attr(gFlower, {
  id: 'flower'
})
defs.appendChild(gFlower)

var imageFlower = svg('image')
attr(imageFlower, {
  'xlink:href': '/assets/svgs/flower.svg'
})
imageFlower.href.baseVal = '/assets/svgs/flower.svg'
gFlower.appendChild(imageFlower)

var use1 = svg('use')
use1.href.baseVal = '#flower'
attr(use1, {
  filter: 'url(#drop-shadow)',
  transform: 'translate(4, 4)'
})
svgEl.appendChild(use1)


//发光滤镜
var fGlow = svg('filter')
attr(fGlow, {
  id: 'glow'
})
defs.appendChild(fGlow)
var feColorMatrix = svg('feColorMatrix')
attr(feColorMatrix, {
  type: 'matrix',
  values: '0 0 0 0 0,0 0 0 0.9 0,0 0 0 0.9 0,0 0 0 1 0'
})
fGlow.appendChild(feColorMatrix)
var coloredBlur = svg('feGaussianBlur')
attr(coloredBlur, {
  stdDeviation: '2.5',
  result: 'coloredBlur'
})
fGlow.appendChild(coloredBlur)
var coloredBlurOffset = svg('feOffset')
attr(coloredBlurOffset, {
  dx: 1,
  dy: 1,
  in: 'coloredBlur',
  result: 'coloredBlurOffset'
})
fGlow.appendChild(coloredBlurOffset)
var feMerge2 = svg('feMerge')
fGlow.appendChild(feMerge2)
var feMergeNode3 = svg('feMergeNode')
attr(feMergeNode3, {
  in: 'coloredBlurOffset'
})
feMerge2.appendChild(feMergeNode3)
var feMergeNode4 = svg('feMergeNode')
attr(feMergeNode4, {
  in: 'SourceGraphic'
})
feMerge2.appendChild(feMergeNode4)
//eof 发光滤镜

//发光文本
var text = svg('text')
attr(text, {
  x: 120,
  y: 50,
  style: 'filter: url(#glow);fill: #033;font-size: 18px'
})
text.textContent = 'Spring'
var tspan = svg('tspan')
attr(tspan, {
  x: 120,
  y: 70
})
tspan.textContent = 'Flower'
text.appendChild(tspan)
svgEl.appendChild(text)
//EOF 发光文本

var feCompositeIn = svg('filter')
attr(feCompositeIn, {
  id: 'sky-in',
  filterUnits: 'objectBoundingBox'
})
feCompositeIn.appendChild(createSvgEl('feImage', {
  'xlink:href': '/assets/images/sky.jpg',
  class: 'fe-image-sky',
  result: 'sky',
  x: 0,
  y: 0,
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'none'
}))
feCompositeIn.appendChild(createSvgEl('feComposite', {
  in: 'sky',
  in2: 'SourceGraphic',
  operator: 'in'
}))
defs.appendChild(feCompositeIn)

var feCompositeOut = svg('filter')
attr(feCompositeOut, {
  id: 'sky-out',
  filterUnits: 'objectBoundingBox'
})
feCompositeOut.appendChild(createSvgEl('feImage', {
  'xlink:href': '/assets/images/sky.jpg',
  class: 'fe-image-sky',
  result: 'sky',
  x: 0,
  y: 0,
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'none'
}))
feCompositeOut.appendChild(createSvgEl('feComposite', {
  in: 'sky',
  in2: 'SourceGraphic',
  operator: 'out'
}))
defs.appendChild(feCompositeOut)

_.each(defs.querySelectorAll('.fe-image-sky'), feImage => {
  feImage.href.baseVal = '/assets/images/sky.jpg'
})

svgEl.appendChild(createSvgEl('use', {
  'xlink:href': '#flower',
  'class': 'use-flower',
  transform: 'translate(4, 140)',
  style: 'filter: url(#sky-in);'
}))

svgEl.appendChild(createSvgEl('use', {
  'xlink:href': '#flower',
  'class': 'use-flower',
  transform: 'translate(200, 140)',
  style: 'filter: url(#sky-out);'
}))
_.each(svgEl.querySelectorAll('.use-flower'), useFlower => {
  useFlower.href.baseVal = '#flower'
})

svgEl.unsuspendRedrawAll()
