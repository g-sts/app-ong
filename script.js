const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('nav a')

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active')
    })
}

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active')
    }
})

const smoothLinks = document.querySelectorAll('a[href^="#"]')
smoothLinks.forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'))
        if (target) {
            e.preventDefault()
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            })
        }
    })
})
