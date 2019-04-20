import './index.css'
import {svg} from '../../js/helper.js'

var mainSvgBox = document.querySelector('#main-svg-box')

var svgEl = svg()
svgEl.setAttribute('class', 'svg')
svgEl.setAttribute('viewBox', '0 0 200 200')
svgEl.setAttribute('width', '200')
svgEl.setAttribute('height', '200')

var g = svg('g')
g.setAttribute('id', 'square')
svgEl.appendChild(g)

var rect = svg('rect')
rect.setAttribute('x', 10)
rect.setAttribute('y', 10)
rect.setAttribute('width', 20)
rect.setAttribute('height', 20)
rect.setAttribute('style', 'fill: none;stroke: red; stroke-width: 2')
g.appendChild(rect)

var use = svg('use')
use.setAttribute('xlink:href', '#square')
// use.setAttribute('href', '#square')
use.href.baseVal = '#square'
// use.setAttribute('transform', 'scale(2, 2)')
// use.setAttribute('transform', 'translate(50, 50)')
use.setAttribute('transform', 'translate(-20, -20) scale(2)')
svgEl.appendChild(use)

mainSvgBox.appendChild(svgEl)
