document.addEventListener('DOMContentLoaded', () => {

  const navItems = [{
    name: 'index',
    title: '首页'
  }, {
    name: 'coord',
    title: '坐标系统'
  }, {
    name: 'shape',
    title: '基本形状'
  }, {
    name: 'docStructure',
    title: '文档结构'
  }, {
    name: 'coordTransform',
    title: '坐标系统变换'
  }]
  let navBarEl = document.querySelector('#nav-bar')
  navItems.forEach(navItem => {
    var li = document.createElement('li')
    li.className = 'nav-item'
    var a = document.createElement('a')
    a.setAttribute('href', `/dist/${navItem.name}.html`)
    a.setAttribute('title', navItem.title)
    a.innerHTML = navItem.title
    li.appendChild(a)
    navBarEl.appendChild(li)
  })
})
