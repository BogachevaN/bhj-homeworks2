 let tabs = Array.from(document.querySelectorAll('.tab'))
 let contents = Array.from(document.querySelectorAll('.tab__content'))

 tabs.forEach((tab, index) => {
    
    tab.addEventListener('click', () => {
        const inactiveTabs = tabs.filter((el, i) => i != index)
        const inactiveContents = contents.filter((el, i) => i != index)
        tab.classList.add('tab_active')
        contents[index].classList.add('tab__content_active')
        inactiveTabs.forEach((tab, index) => {
            tab.classList.remove('tab_active')
        })
        inactiveContents.forEach((content, index) => {
            content.classList.remove('tab__content_active')
        })
    })
 })