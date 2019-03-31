import {svg} from '../../js/helper.js'
import './index.css'
var mainSvgBox = document.querySelector('#main-svg-box')

var svgEl = svg()
svgEl.setAttribute('viewBox', '0 0 250 250')
mainSvgBox.appendChild(svgEl)

var title = svg('title')
title.innerHTML = 'SVG 圆'
svgEl.appendChild(title)

var circle = svg('circle')
circle.setAttribute('cx', '125px')
circle.setAttribute('cy', '125px')
circle.setAttribute('r', '100')
svgEl.appendChild(circle)
