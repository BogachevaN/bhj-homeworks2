document.addEventListener('scroll', () => {
    let blocks = Array.from(document.querySelectorAll('.reveal'))
    blocks.forEach((block) => {
        isVisible(block) ? block.classList.add('reveal_active') : block.classList.remove('reveal_active') 
    })
})

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect()
    if (bottom < 0) return false
    if (top > window.innerHeight) return false
    return true
}