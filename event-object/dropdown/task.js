const list = document.querySelector('.dropdown__list')

list.closest('div').addEventListener('click', (event) => {
    event.preventDefault()
    if(!list.className.includes('dropdown__list_active')) {
        list.classList.add('dropdown__list_active') 
    } else {
        list.classList.remove('dropdown__list_active')
    }
})

const items = Array.from(document.querySelectorAll('.dropdown__link'))
items.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('.dropdown__value').textContent = item.textContent
        list.classList.remove('dropdown__list_active')
        event.stopPropagation()
    })
})