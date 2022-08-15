/* let links = document.querySelectorAll('.tabs a')
for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.style.color = "#FF0000"
} */

// Pour modifier la couleur d'un élement en css
$('.tabs a').css('color', "#FF0000")

// Si je veux récuperer le premier lien
console.log($('.tabs a:first').attr('href')) // En js vanilla on ferait un getAttribute

// si on veut définir un attribut on passe un second paramétre
/* console.log($('.tabs a:first').attr('href', 'AZEAZE')) */

// Lorsque l'on fait une sélection on obtient un tableau sur lequel on peut utiliser les méthode habituel. l'avantge c'est qu'on ne boucle pas dessus
console.log($('.tabs a:first'))
console.log($('.tabs a:first')[0].getAttribute('href'))

// Si on veut modifier les classe de nos éléments 
/* console.log($('.tabs li').addClass('active')) */

// Il est possible de partir d'un élément et de traverser notre DOM comme le "chillNode", "children", "firstChild"...
console.log($('.tabs a:first').parent())
// Mais l'avantge c'est qu'on a des sélecteur beaucoup plus simplifié tel que 'siblings' qui nous donne tous les élements du même niveau
console.log($('.tabs li:first').siblings())

// pour traverser le DOM on cherche traversing dans la doc et aprés on veut trouver un sous éléments
console.log($('.tabs li:first').find('a'))
// exemple débile car on peut faire 
console.log($('.tabs li:first a'))


// Pour aller plus loin sur l'ensemble des méthodes disponible voici la documentation : https://api.jquery.com/


// POUR LA SUITE DE L'EXERCICE, DECOCHE LE PARAGRAPHE VOULU

// Pour rajouter un nouveau onglet
/* let ul = $('ul:first')
let li = $('<li class = "active"></li>')
let a = $('<a href="#">Salut</a>')
li.append(a)
ul.append(li) */

// pour rajouter le nouveau li a la suite du premier
/* let first_li = $('li:first')
let li = $('<li class = "active"></li>')
let a = $('<a href="#">Salut</a>')
li.append(a)
first_li.after(li) */

// pour rajouter le nouveau li avant le premier
/* let first_li = $('li:first')
let li = $('<li class = "active"></li>')
let a = $('<a href="#">Salut</a>')
li.append(a)
first_li.before(li)  */

// pour manipuler le contenue
let a = $('a:first')
a.text('hi!') // méthode text pour modifier le contenue

let a2 = $('a:first')
a2.html('<strong>hi!</strong>') //méthode pour injecter de l'html

// si on ne précisse rien ça nous retourne le contenue demandé
console.log(a.html()) // retourne le contenue html
console.log(a.html()) // retourne le contenue text
console.log(a.attr('href')) // retourne l'attribut demandé
console.log(a.css('color')) // retourne la classe css demandé


// Si on veut greffer un évenement / comment detecter quand on clique sur un evenement

/* let links = document.querySelectorAll('.tabs a')
for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.addEventListener.(....) */ // Manière JS

/* $('.tabs a').on('click', function (e) {
    console.log(e) // on obtient du coup l'événemnt de façon jQuery que l'on peut traiter de la même manière qu'en JS
    console.log(this) // on obtient du coup 'this' de façon JS
    console.log($(this))  // on obtient du coup 'this' de façon jQuery que l'on peut traiter de la même manière qu'en JS
}) */ // Manière jQuery

// POUR EVITER TOUS PROBLEME D'INTERFERENCE AVEC UNE AUTRE LIBRAIRIE QUI POURRAIS UTILISER LE $, ON ISOLE CELUI-CI DANS UNE FONCTION
jQuery(function ($) {

    /* $('li').click(function () {
        console.log("J'ai cliqué sur un li");
    }) */ // POUR EXPLICATIONS PLUS BAS !!!!

    let afficherOnglet = function ($a, duration) {
        if (duration === undefined) {
            duration = 500
        }
        let $li = $a.parent()
        if ($li.hasClass('active')) {
            return false
        }
        let $target = $($a.attr('href'))
        $li.siblings('.active').removeClass('active')
        $li.addClass('active')

        /* $target.show(500)
        $target.siblings().hide(500) */

        /*  $target.slideDown(500)
         $target.siblings().slideUp(500) */

        $target.siblings(':visible').fadeOut(duration, function () {
            $target.fadeIn(duration)
        })
    }

    $('.tabs a').click(function (e) {
        let $a = afficherOnglet($(this)) // $a pour faire la différence entre les élements natif et jQuery
    })

    let hash = window.location.hash
    if (hash != "") {
        let $a = $(`.tabs a[href="${hash}"]`)
        if ($a.length > 0) {
            afficherOnglet($a, 0)
        }
    }

    // A PARTIR D'ICI ON EST SUR DE L'AJAX

    // CA C'EST POUR LA VERSION 1.0 DE jQuery

    /* let $ul = $('#users')
    $.get('https://jsonplaceholder.typicode.com/users', {}, function (data, textStatus, jqXHR) {
        data.forEach(function (user) {
            let $li = $('<li>')
            $li.text(user.name)
            $li.appendTo($ul)
            // $ul.append($li) // Methode si on veut le faire dans l'autre sens 
        })
    }) */

    // CA C'EST A PARTIR DE LA VERSION 1.5 DE jQuery

    let $ul = $('#users')
    let $loader = $('<div>Chargement</div>').appendTo($('body'))
    $.get('https://jsonplaceholder.typicode.com/users')
        .done(function (data, textStatus, jqXHR) {
            data.forEach(function (user) {
                let $li = $('<li>')
                $li.text(user.name)
                $li.appendTo($ul)
                /* $ul.append($li) */ // Methode si on veut le faire dans l'autre sens 
            })
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            //debugger // marche si on a une erreur de chargement de la page
            console.log('fail')
        })
        .always(function () {
            $loader.remove()
            console.log('alway')
        })
})

// MOMENTO

/*
FAUT IL UTILISER jQuery ?

Ca va dependre du projet:

    - Si le projet est cour: NON. Ca ira aussi vite pour de l'écrire en JS vanilla. On evite de charger une bibliotheque pour ça (30ko a 60ko).
    
    - Si le projet est plus ou moins long est qu'on ne veut pas s'embeter avec les soucis de compatibilité (coucou IE9): OUI. Code plus concis, plus facile a comprendre est il gére les différents problème de compatibilité.

PROBLEME DE jQuery :

jQuery a une mauvaise reputation auprés des dévelopeur qui on un coté élitiste :

    - Il masque la complexité du code qu'il y a derrière (on ne se soucis pas de ce qu'il ce passe derrière) ce qui peut amener a des problémes de performance (ex: des mauvais selecteurs). En JS natif quand on veut sélectionner un plusieurs
    élements on utilise "querySelector", "querySelectorAll". On fait belle et bien la différence ! 
    (ca pourrais amener a des oublis si on prend exemple sur notre code plus haut (l.90) les 'li' ajouter aprés avec le Json ne sont pas pris en compte)

    - Probleme avec l'alias "$" qui est repris dans beaucoup d'autre librairie. pour éviter tous problème de compatibiliter on l'isole dans une fonction (concepte des scops)
*/
