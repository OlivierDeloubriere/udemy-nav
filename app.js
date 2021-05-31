const btn = document.querySelector('.btn-responsive')
const navList = document.querySelector('.nav-liste')
const navItems = Array.from(document.querySelectorAll('.nav-item'))

let navListIsVisible = false

btn.addEventListener('click', () => {
    if (navListIsVisible) {
        navList.classList.remove('nav-liste-visible')
    } else {
        navList.classList.add('nav-liste-visible')
    }
    navListIsVisible = !navListIsVisible
})

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(item => item.classList.remove('nav-active'))
        e.target.classList.add('nav-active')
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        navList.classList.remove('nav-liste-visible')
    }
})