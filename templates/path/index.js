import './index.scss'

import {svg, attr} from '../../js/helper'
var mainBox = document.querySelector('#main-svg-box')

var svgEl = svg()
attr(svgEl, {
  width: '150px',
  height: '150px',
  viewBox: '0 0 150 150'
})
mainBox.appendChild(svgEl)

var group = svg('g')
attr(group, {
  class: 'path-group'
})
svgEl.appendChild(group)

var line1 = svg('path')
attr(line1, {
  d: 'M 10,10 L 100,10'
})
group.appendChild(line1)

var cornor = svg('path')
attr(cornor, {
  'd': 'M 10,20 L 100,20 L 100,50'
})
group.appendChild(cornor)

var degree30Angles = svg('path')
attr(degree30Angles, {
  d: 'M40 60L10 60L40 42.68M60 60L90 60L60 42.69'
})
group.appendChild(degree30Angles)

//椭圆弧
var svgEl2 = svg()
attr(svgEl2, {
  width: '400px',
  height: '300px',
  viewBox: '0 0 400 300'
})
mainBox.appendChild(svgEl2)

var elli1 = svg('ellipse')
attr(elli1, {
  cx: '154px',
  cy: '154px',
  rx: '150px',
  ry: '120px',
  style: 'fill: #999;'
})
svgEl2.appendChild(elli1)

var elli2 = svg('ellipse')
attr(elli2, {
  cx: '152px',
  cy: '152px',
  rx: '150px',
  ry: '120px',
  style: 'fill: #cef;'
})
svgEl2.appendChild(elli2)

var arc1 = svg('path')
attr(arc1, {
  d: 'M 302,152 A 150,120,0,1,0,2,152 A 75,60,0,1,0,152,152',
  style: 'fill: #fcc;'
})
svgEl2.appendChild(arc1)

var arc2 = svg('path')
attr(arc2, {
  d: 'M 152,152 A 75,60,0,1,1,302,152',
  style: 'fill: #cef;'
})
svgEl2.appendChild(arc2)

var q = svg('path')
attr(q, {
  d: 'M 30,100 Q 80,30 100,100 130,65 200,80',
  style: 'stroke: #000;fill: none;',
  transform: 'rotate(-90, 270, -10)'
})
svgEl2.appendChild(q)

//marker
var svgEl3 = svg()
attr(svgEl3, {
  width: '200px',
  height: '200px',
  viewBox: '0 0 200 200'
})
mainBox.appendChild(svgEl3)
var defs = svg('defs')
svgEl3.appendChild(defs)

var mCircle = svg('marker')
attr(mCircle, {
  id: 'mCircle',
  markerWidth: 10,
  markerHeight: 10,
  refX: 5,
  refY: 5
})
defs.appendChild(mCircle)
var cir = svg('circle')
attr(cir, {
  cx: 5,
  cy: 5,
  r: 4,
  style: 'fill: none;stroke: black'
})
mCircle.appendChild(cir)

var mArrow = svg('marker')
attr(mArrow, {
  id: 'mArrow',
  markerWidth: '4',
  markerHeight: '8',
  refX: 0,
  refY: 4,
  orient: 'auto'
})
defs.appendChild(mArrow)
var arrow = svg('path')
attr(arrow, {
  d: 'M 0 0 4 4 0 8',
  style: 'fill: none;stroke: black'
})
mArrow.appendChild(arrow)

var mTriangle = svg('marker')
attr(mTriangle, {
  id: 'mTriangle',
  markerWidth: '5',
  markerHeight: '10',
  refX: 5,
  refY: 5,
  orient: 'auto'
})
defs.appendChild(mTriangle)
var triangle = svg('path')
attr(triangle, {
  d: 'M 0 0 5 5 0 10',
  style: 'fill: black;stroke: none'
})
mTriangle.appendChild(triangle)

var markerLine = svg('path')
attr(markerLine, {
  d: 'M 10,20,100,20 A 20,30,0,0,1,120,50 L 120,110',
  // style: 'marker-start: url(#mCircle);marker-mid: url(#mArrow);marker-end: url(#mTriangle);fill: none; stroke: black'
  style: 'marker: url(#mCircle);fill: none; stroke: black'
})
svgEl3.appendChild(markerLine)
