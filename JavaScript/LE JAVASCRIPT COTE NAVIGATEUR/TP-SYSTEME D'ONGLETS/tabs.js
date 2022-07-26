(function () {

    /*
    LORSQUE l'on clique sur un onglet
        * ON retire la class active de l'onglet actif
        j'ajoute la class active à l'onglet actuel

        * ON retire la class active sur le contenu actif
        * j'ajoute la class active sur le contenu correspondant
    */
    let afficherOnglet = function (a, animations) {
        if (animations === undefined) {
            animations = true
        }
        let li = a.parentNode
        let div = a.parentNode.parentNode.parentNode // Permet de remonter au premier div
        let activeTab = div.querySelector('.tab-content.active') // contenue actif
        let aAfficher = div.querySelector(a.getAttribute('href')) // contenue afficher

        if (li.classList.contains('active')) { // est-ce-que li a deja le class active ?
            return false
        }

        // ON RETIRE la class active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active')
        // j'ajoute la class active à l'onglet actuel
        li.classList.add('active')

        //ON retire la class active sur le contenu actif
        //div.querySelector('.tab-content.active').classList.remove('active')
        //j'ajoute la class active sur le contenu correspondant
        //div.querySelector(a.getAttribute('href')).classList.add('active')

        //NOUVEAU SYSTEME AVEC LES CLASS CSS .FADE/.FADE.IN
        /*
        On ajoute la classe fade sur l'élément actif
        A la fin de l'animation :
            On retire la class fade et active
            On ajoute la class active et fade a l'élément à afficher
            On ajoute la classe in
        */
        if (animations) {
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            let transitionend = function () {
                this.classList.remove('fade')
                this.classList.remove('active')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                activeTab.removeEventListener('transitionend', transitionend)
            }
            activeTab.addEventListener('transitionend', transitionend)
            activeTab.addEventListener('webkitTransitionEnd', transitionend)

        } else {
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }
    }

    let tabs = document.querySelectorAll('.tabs a')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (e) {
            afficherOnglet(this)
        })
    }

    /*
    JE RECUPERER le hash
    AJOUTER LA CLASS active sur le lien href="hash"
    RETIRER LA CLASS active sur les autres onglets
    AFFICHER / Masquer les contenus 
    */
    let hashChange = function (e) {
        let hash = window.location.hash
        let a = document.querySelector(`a[href="${hash}"]`)

        if (a !== null && !a.parentNode.classList.contains('active')) {
            afficherOnglet(a, e !== undefined)
        }
    }

    window.addEventListener('hashchange', hashChange)
    hashChange()

})()

