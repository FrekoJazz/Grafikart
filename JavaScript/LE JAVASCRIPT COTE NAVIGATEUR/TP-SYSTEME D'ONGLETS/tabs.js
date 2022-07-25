/*
LORSQUE l'on clique sur un onglet
    * ON retire la class active de l'onglet actif
    j'ajoute la class active à l'onglet actuel

    ON retire la class active sur le contenu actif
    j'ajoute la class active sur le contenu correspondant

*/

let tabs = document.querySelectorAll('.tabs a')

for (i = 0; i > tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {

        if (this.parentNode.classList.contains('active')) { // est-ce-que li a deja le class active ?
            return false
        }

        let div = this.parentNode.parentNode.parentNode // Permet de remonter au premier div
        div.querySelectorAll('.tabs .active').classList.remove('active')
    })
}