//PARTIE 1 HTML

//let ps = document.querySelectorAll('p')

//Texte qui change au click

/*for (let i = 0; i < ps.length; i++) {
    let p = ps[i]
    let rougit = function () {
        this.classList.toggle('red')
    }
    p.addEventListener('click', rougit)
}*/


//Texte qui change au Click (comme un va-et-vient)

/*for (let i = 0; i < ps.length; i++) {
    let p = ps[i]
    p.addEventListener('mouseover', function () {
        this.classList.add('red')
    })
    p.addEventListener('mouseout', function () {
        this.classList.remove('red')
    })
}*/

//Lien pour changer et annuler le le changement de page

/*let liens = document.querySelectorAll('a.external')
for (let i = 0; i < liens.length; i++) {
    let lien = liens[i]
    lien.addEventListener('click', function (e) {
        console.log(e);
        let reponse = window.confirm('Voulez vous vraiment quitter le site ?')
        if (reponse === false) {
            e.preventDefault()
        }
    })
}*/

//PARTIE 2 HTML

//Gerer la propagation

/*let liens = document.querySelectorAll('a.external')
for (let i = 0; i < liens.length; i++) {
    let lien = liens[i]
    lien.addEventListener('click', function (e) {
        e.stopImmediatePropagation()
        console.log("J'ai cliqué sur le paragraph", e);
        let reponse = window.confirm('Voulez vous vraiment quitter le site ?')
        if (reponse === false) {
            e.preventDefault()
        }
    })
}

document.querySelector('p').addEventListener('click', function (e) {
    console.log("J'ai cliqué sur le paragraph", e);
})*/

//Les variable -target- & -currentTarget-
/*document.querySelector('p').addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e);
})*/

//Supprimer un -addEventListener- a la fin de son execution

/*let p = document.querySelector('p')
let onClick = function (e) {
    this.classList.add('red')
    console.log('Rouge')
    e.preventDefault()
    p.removeEventListener('click', onClick)
}

p.addEventListener('click', onClick)*/

//Les informations apparaise quand on sort du champ

/*document.querySelector('#a').addEventListener('change', function (e) {
    console.log(e);
})*/

//On recuperer et on affiche le keycode de la lettre q'on a taper

/*document.querySelector('#a').addEventListener('onkeyup', function (e) {
    let lettre = String.fromCharCode(e.keycode)
    if (lettre != "A") {
        e.preventDefault()
    }
})*/

//On empeche de tapper autre chose que la lettre choisis

/*document.querySelector('#a').addEventListener('keydown', function (e) {
    let lettre = String.fromCharCode(e.keycode)
    if (lettre != "A") {
        e.preventDefault()
    }
})*/

//PARTIE 3 HTML: LES FORMULAIRES

//Empecher la soumission d'un formulaire si le code postal n'est pas de 4 caractère

/*document.querySelector('#form').addEventListener('submit', function (e) {
    let cp = document.querySelector('#cp')
    let mentions = document.querySelector('#mentions')

    if (cp.value.length != 5 || !mentions.checked) {
        alert('Le code formulaire n\'est pas bon')
        e.preventDefault()
    }
})*/


document.querySelector('#formulaire').addEventListener('submit', function (e) {
    let age = parseInt(document.querySelector('#age').value, 10)

    if (age < 18) {
        alert('Vous ne pouvez pas rentrer')
        e.preventDefault()
    }
})
