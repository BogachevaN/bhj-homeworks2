const img = document.getElementById('cookie')
img.onclick = function () {
    const clicker = document.getElementById('clicker__counter')
    if (clicker.textContent % 2 == 0) {
        clicker.textContent++
        img.width = 150
        img.height = 96
    } else {
        clicker.textContent++
        img.width = 200
        img.height = 128
    }
}