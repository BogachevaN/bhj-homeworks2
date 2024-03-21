let cases = Array.from(document.querySelectorAll('.rotator__case'))
let index = 0

function changeCase() {
    let length = cases.length
    if(index === length -1) {
        index = 0;
    }
    cases[index].classList.remove('rotator__case_active')
    cases[index + 1].classList.add('rotator__case_active')
    index++
}

setInterval(changeCase, 1000)