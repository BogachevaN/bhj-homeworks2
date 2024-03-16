const list = document.querySelector('.dropdown__list')

function openMenu () {
    list.classList.add('dropdown__list_active')  
}

function closeMenu () {
    list.classList.remove('dropdown__list_active')  
}

const clickEl = document.querySelector('.dropdown')

list.className.includes('dropdown__list_active')
? clickEl.addEventListener('click', closeMenu)
: clickEl.addEventListener('click', openMenu)

const items = Array.from(document.querySelectorAll('dropdown__item'))
items.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.dropdown__value').textContent = item.querySelector('.dropdown__link').textContent
        closeMenu()
    })
})