//L'OBJET WINDOWS

/*Sur le navigateur l'objet global est l'objet window. 
Cet objet contient un ensemble de méthode et de propriétés utiles comme par exemple window.innerWidth qui renvoie la largeur de la fenêtre.

var a = 0 // Toutes variables définies globalement sont stocké dans l'objet window
window.a // 0 

Ce détail peut sembler insignifiant mais il faudra faire attention lorsque vous déclarez des variables globalement. 
En effet, ces variables peuvent être écrasées par inadvertance dans un autre script inclu dans la page.
*/

//ALERT, PROMPT, CONFIRM :

/*window.alert('Ooops') // Affiche une alerte 
var a = window.confirm('Sûr de sûr ?') // Affiche une fenêtre de confirmation et renvoie un booleen
var nom = window.prompt('Entrez votre nom') // Affiche un champs qui permet de rentrer une valeur*/

EXEMPLE:

/*
ON choisit un chiffre RANDOM
DEMANDE a l'utilisateur de renter un chiffre
TANT QUE le chiffre n'est pas bon
    SI le chiffre est au dessus
        ALERT au dessus
    SINON
        ALERT en dessous
    DEMANDE a l'utilisateur de renter un chiffre
FIN TANT QUE
ALERT success
*/

(function () {

    let aDeviner = Math.round(Math.random() * 10)
    let essais = 3
    let essai = parseInt(window.prompt('Entrez votre chiffre'))
    while (essai != aDeviner && essais > 0) {
        essais--
        if (essai > aDeviner) {
            alert('Le chiffre est trop grand !')
        } else {
            alert('Le chiffre est trop petit !')
        }
        if (essais > 0)
            essai = window.prompt('Retentez votre chance !')
    }

    if (essai == aDeviner) {

        alert('Bravo !')
    } else {
        alert('Echec =(')
    }

    //AUTRE MANIERE DE FAIRE:

    /*let aDeviner = Math.round(Math.random() * 10)
    let essai
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            essai = prompt('Entrez votre chiffre')
        } else {
            essai = prompt('Retentez votre chance')
        }
        if (essai == aDeviner) {
            break
        } else if (essai > aDeviner) {
            alert('Trop haut')
        } else {
            alert('Trop bas')
        }
    }

    if (essai == aDeviner) {

        alert('Bravo !')
    } else {
        alert('Echec =(')
    }*/

})()


//TIMERS :

/*L'objet window contient aussi 2 méthodes qui seront très utiles pour créer des timers. 
Ces fonctions prennent en paramètre un callback (fonction) qui sera appellé au bout d'un certain temps (indiqué en ms).

window.setInterval(function () {
    // Ce code sera appellé toutes les secondes (1000ms)
}, 1000)

window.setTimeout(function () {
    // Ce code sera éxécuté une fois au bout de 3 secondes (3000ms)
}, 3000)*/

/*Ces 2 fonctions renvoient un ID qui peut ensuite être utilisé pour stopper le timer

var i = 0 
var timer = window.setInterval(function () {
    i++
    if (i == 10) {
        window.clearInterval(timer) // On utilise l'ID timer pour stopper le timer   
    }
}, 1000)*/

EXEMPLE:

(function () {

// Pour compter en continue:

    /*let i = 0
    window.setInterval(function () {
        i++
        console.log(i)
    }, 1000)*/

// Pour compter une seule fois:

    /*let i = 0
    window.setTimeout(function () {
        i++
        console.log(i)
    }, 1000)*/

// Pour compter jusqu'a 10

    let i = 0
    let timer = window.setInterval(() => {
        i++
        console.log(i)
        if (i == 10) {
            window.clearInterval(timer)
        }
    }, 1000)

})()
