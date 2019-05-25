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
  width: '32px',
  height: '32px',
  result: 'cloth'
}))
tileFilter.appendChild(createSvgEl('feTile', {
  in: 'cloth',
  result: 'in'
}))
tileFilter.appendChild(createSvgEl('feComposite', {
  in: 'cloth',
  in2: 'SourceGraphic',
  operator: 'in'
}))
