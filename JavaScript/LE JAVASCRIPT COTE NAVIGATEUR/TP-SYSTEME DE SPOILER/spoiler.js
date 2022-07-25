/*
LORSQUE JE clique sur le bouton dans .spoiler
ALORS
    J'ajoute la classe .visible à l'élement suivant
*/

/*let button = document.querySelector('.spoiler button')


button.addEventListener('click', function () {
    this.nextElementSibling.classList.add('visible')
    this.parentNode.removeChild(this)
})*/

let elements = document.querySelectorAll('.spoiler')

let createSpoilerButton = function (e) {


    // On créer la span.spoiler-content
    let span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = e.innerHTML

    // On créer le bouton
    let button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'

    // On ajoute les élément au DOM
    e.innerHTML = ""
    e.appendChild(button)
    e.appendChild(span)

    // On met l'écoute au click
    button.addEventListener('click', function () {
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })
}

for (let i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i])
}