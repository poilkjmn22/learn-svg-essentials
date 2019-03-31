import {svg} from '../../js/helper.js'
import './index.css'

var mainSvgBox = document.querySelector('#main-svg-box')

var svgEl = svg()
svgEl.setAttribute('viewBox', '0 0 200 200')
svgEl.setAttribute('width', '200px')
svgEl.setAttribute('height', '200px')
mainSvgBox.appendChild(svgEl)

var circle = svg('circle')
circle.setAttribute('cx', '25')
circle.setAttribute('cy', '25')
circle.setAttribute('r', '25')
svgEl.appendChild(circle)

var rect = svg('rect')
rect.setAttribute('x', '100')
rect.setAttribute('y', '5')
rect.setAttribute('width', '30')
rect.setAttribute('height', '80')
svgEl.appendChild(rect)

var embedSvg = svg()
embedSvg.setAttribute('viewBox', '0 0 50 50')
embedSvg.setAttribute('preserveAspectRatio', 'xMaxYMax meet')
embedSvg.setAttribute('x', '100')
embedSvg.setAttribute('y', '5')
embedSvg.setAttribute('width', '30')
embedSvg.setAttribute('height', '80')

var embedSvgCircle = svg('circle')
embedSvgCircle.setAttribute('cx', '25')
embedSvgCircle.setAttribute('cy', '25')
embedSvgCircle.setAttribute('r', '25')
embedSvgCircle.setAttribute('style', 'stroke: black; fill: none;')
embedSvg.appendChild(embedSvgCircle)
svgEl.appendChild(embedSvg)
