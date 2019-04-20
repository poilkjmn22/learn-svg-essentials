import './index.css'
import {svg} from '../../js/helper.js'

var mainSvgBox = document.querySelector('#main-svg-box')

var svgEl = svg()
svgEl.setAttribute('width', 200)
svgEl.setAttribute('height', 200)
svgEl.setAttribute('viewBox', '0, 0, 200, 200')
mainSvgBox.appendChild(svgEl)

var title = svg('title')
title.innerHTML = 'Symbols vs. groups'
svgEl.appendChild(title)

var desc = svg('desc')
desc.textContent = 'Use'
svgEl.appendChild(desc)

var defs = svg('defs')
svgEl.appendChild(defs)

var defG = svg('g')
defG.setAttribute('id', 'octagon')
defG.setAttribute('stroke', 'black')
defs.appendChild(defG)
var gdesc = svg('desc')
gdesc.innerHTML = 'Octagon as group'
defG.appendChild(gdesc)

var gPoly = svg('polygon')
gPoly.setAttribute('points', '36 25,25 36,11 36, 0 25,0 11,11 0,25 0,36 11')
defG.appendChild(gPoly)

var sym = svg('symbol')
sym.setAttribute('id', 'sym-octagon')
sym.setAttribute('stroke', 'red')
sym.setAttribute('preserveAspectRatio', 'xMidYMid slice')
sym.setAttribute('viewBox', '0 0 40 40')
defs.appendChild(sym)

var symDesc = svg('desc')
symDesc.innerHTML = 'Octagon as symbol'
sym.appendChild(symDesc)
var symPoly = svg('polygon')
symPoly.setAttribute('points', '36 25,25 36,11 36, 0 25,0 11,11 0,25 0,36 11')
sym.appendChild(symPoly)

var gRects = svg('g')
gRects.setAttribute('style', 'fill: none;stroke: gray')
svgEl.appendChild(gRects)

var rect1 = svg('rect')
rect1.setAttribute('x', '40')
rect1.setAttribute('y', '40')
rect1.setAttribute('width', '30')
rect1.setAttribute('height', '30')
gRects.appendChild(rect1)

var rect2 = svg('rect')
rect2.setAttribute('x', '80')
rect2.setAttribute('y', '40')
rect2.setAttribute('width', '40')
rect2.setAttribute('height', '60')
gRects.appendChild(rect2)

var rect3 = svg('rect')
rect3.setAttribute('x', '40')
rect3.setAttribute('y', '110')
rect3.setAttribute('width', '30')
rect3.setAttribute('height', '30')
gRects.appendChild(rect3)

var rect4 = svg('rect')
rect4.setAttribute('x', '80')
rect4.setAttribute('y', '110')
rect4.setAttribute('width', '40')
rect4.setAttribute('height', '60')
gRects.appendChild(rect4)

var use1 = svg('use')
use1.setAttribute('xlink:href', '#octagon')
use1.setAttribute('href', '#octagon')
use1.setAttribute('fill', '#c00')
use1.setAttribute('x', '40')
use1.setAttribute('y', '40')
use1.setAttribute('width', '30')
use1.setAttribute('height', '30')
svgEl.appendChild(use1)

var use2 = svg('use')
use2.setAttribute('xlink:href', '#octagon')
use2.setAttribute('href', '#octagon')
use2.setAttribute('fill', '#cc0')
use2.setAttribute('x', '80')
use2.setAttribute('y', '40')
use2.setAttribute('width', '40')
use2.setAttribute('height', '60')
svgEl.appendChild(use2)

var use3 = svg('use')
use3.setAttribute('xlink:href', '#sym-octagon')
use3.setAttribute('href', '#sym-octagon')
use3.setAttribute('fill', '#cfc')
use3.setAttribute('x', '40')
use3.setAttribute('y', '110')
use3.setAttribute('width', '30')
use3.setAttribute('height', '30')
svgEl.appendChild(use3)

var use4 = svg('use')
use4.setAttribute('xlink:href', '#sym-octagon')
use4.setAttribute('href', '#sym-octagon')
use4.setAttribute('fill', '#699')
use4.setAttribute('x', '80')
use4.setAttribute('y', '110')
use4.setAttribute('width', '40')
use4.setAttribute('height', '60')
svgEl.appendChild(use4)
