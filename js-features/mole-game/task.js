function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = checkHole(getHole(i).className)
}

function checkHole(className) {
    const dead = document.getElementById('dead')
    const lost = document.getElementById('lost')
    if(className.includes('hole_has-mole')) {
        if (dead.textContent == 10) {
            alert('Победа!')
            dead.textContent = 0
            lost.textContent = 0
        } else {
            dead.textContent++
        }
    } else {
        if(lost.textContent == 5) {
            alert('Вы проиграли!')
            dead.textContent = 0
            lost.textContent = 0
        } else {
            lost.textContent++
        }
    }
}