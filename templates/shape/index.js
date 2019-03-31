import './index.css'
import {svg} from '../../js/helper.js'

var mainSvgBox = document.querySelector('#main-svg-box')

var svgEl = svg()
svgEl.setAttribute('class', 'svg-poly')
svgEl.setAttribute('viewBox', '0 0 200 200')
svgEl.setAttribute('width', '200')
svgEl.setAttribute('height', '200')

var polyNoneZero = svg('polygon')
polyNoneZero.setAttribute('class', 'fill-rule-nonezero')
polyNoneZero.setAttribute('points', '48 16,16 96,96 48, 0 48, 80 96')
polyNoneZero.setAttribute('fill-rule', 'none-zero')
svgEl.appendChild(polyNoneZero)

var polyEvenOdd = svg('polygon')
polyEvenOdd.setAttribute('class', 'fill-rule-evenodd')
polyEvenOdd.setAttribute('points', '148 16,116 96,196 48, 100 48, 180 96')
polyEvenOdd.setAttribute('fill-rule', 'evenodd')
svgEl.appendChild(polyEvenOdd)

mainSvgBox.appendChild(svgEl)
