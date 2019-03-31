document.addEventListener('DOMContentLoaded', () => {

  const navItems = [{
    name: 'index'
  }, {
    name: 'coord'
  }, {
    name: 'shape'
  }]
  let navBarEl = document.querySelector('#nav-bar')
  navItems.forEach(navItem => {
    var li = document.createElement('li')
    li.className = 'nav-item'
    var a = document.createElement('a')
    a.setAttribute('href', `/dist/${navItem.name}.html`)
    a.setAttribute('title', navItem.name)
    a.innerHTML = navItem.name
    li.appendChild(a)
    navBarEl.appendChild(li)
  })
})
