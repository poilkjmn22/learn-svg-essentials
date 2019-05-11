document.addEventListener('DOMContentLoaded', () => {

  const navItems = require('../json/nav-item.json')
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
