const cookie = document.getElementById('cookie')
img.onclick = function () {
    const clicker = document.getElementById('clicker__counter')
    if (clicker.textContent % 2 == 0) {
        clicker.textContent++
        cookie.width = 150
        cookie.height = 96
    } else {
        clicker.textContent++
        cookie.width = 200
        cookie.height = 128
    }
    //cookie.width = ++clicker.textContent % 2 ? 150 : 200
    //cookie.height = ++clicker.textContent % 2 ? 96 : 128
}