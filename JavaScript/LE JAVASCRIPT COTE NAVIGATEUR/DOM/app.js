/*let p = document.querySelector('.paragraph')
window.setInterval(function () {
    p.classList.toggle('blue')
}, 1000)*/

let ps = document.querySelectorAll('p')
for (let i = 0; i < ps.length; i++) {
    (function (p) {
        window.setInterval(function () {
            p.classList.toggle('red')
        }, 1000)

    })(ps[i])
}

let li = document.querySelector('li')