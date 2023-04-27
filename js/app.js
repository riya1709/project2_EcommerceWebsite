document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.getElementById('mb-menu-toggle').addEventListener('click', () =>
    document.getElementById('header-wrapper').classList.add('active'))

document.getElementById('mb-menu-close').addEventListener('click', () =>
    document.getElementById('header-wrapper').classList.remove('active'))