let wordsWithTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

wordsWithTooltip.forEach((word) => {
    let tooltipText = word.getAttribute('title')
    let el = document.createElement('div')
    el.classList.add('tooltip')
    el.append(tooltipText)
    word.appendChild(el)
})

let tooltips = Array.from(document.querySelectorAll('.tooltip'))

wordsWithTooltip.forEach((word, index) => {
    word.addEventListener('click', (event) => {
        event.preventDefault()
        tooltips.forEach((tooltip, i) => {
            tooltip.style.left = word.getBoundingClientRect().left + 'px';
            tooltip.style.top = word.getBoundingClientRect().bottom + 'px';
            if (i === index){
                tooltip.classList.add('tooltip_active')
            } else {
                tooltip.classList.remove('tooltip_active')
            }
        })
    })
})