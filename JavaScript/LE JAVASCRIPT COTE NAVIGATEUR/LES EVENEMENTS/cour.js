/*Jusqu'à maintenant nous avons créé des scripts qui se déroulent dès le chargement de la page.
La pluspart du temps on attendra un évènements pour effectuer une action.
Par exemple, nous allons déclencher une action lors d'un clic sur un élément particulier.
Pour faire cela on va avoir besoin d'utiliser un écouteur d'évènement gràce à la méthode addEventListener.*/

//CREER UN ECOUTEUR

element.addEventListener("Type d'évènement", callback)
// Par exemple pour détecter un clic sur un lien 
element.addEventListener('click', function () {
    window.alert('Vous avez cliqué sur le lien')
})

/*L'ensemble des évènements écoutables sont listés sur la documentation: https://developer.mozilla.org/en-US/docs/Web/Events */



//L'EVENEMENT

/*Le callback passé en second paramètre prend en paramètre l'évènement (le type de la variable dépendra de l'évènement écouté).*/

// Par exemple pour détecter un clic sur un lien 
element.addEventListener('click', function (e) {
    e.preventDefault() // Annule l'évènement
    e.stopPropagation() // Empèche l'évènement de remonter vers les éléments parents
    e.target // contient l'élément sur lequel on a cliqué
    e.currentTarget // contient l'élément sur lequel on a greffé l'écouteur 
})

/*Cet évènement peut aussi permettre d'obtenir plus d'informations suivant les cas (la touche sur laquelle on a appuyé, la position de la souris...)*/




//THIS

/*Lorsqu'un écouteur est appellé la variable this fera systématiquement référence à l'élément sur lequel on écoute l'évènement (équivalent à currentTarget).*/



//SUPPRIMER UN EVENEMENT

/*Il est aussi possible de supprimer un écouteur d'évènement à l'aide de la méthode removeEventListener. Cette méthode prendra les mêmes paramètres que la méthode addEventListener.*/

var next = function () {
    this.classList.add('red')
    this.removeEventListener('click', next)
}
element.addEventListener('click', next)