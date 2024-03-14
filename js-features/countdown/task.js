function countdown() {
    let timer = document.getElementById('timer') 
    if (timer.textContent == 0 ) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!')
        return
    }
    timer.textContent--
}

let timerId = setInterval(countdown, 1000)