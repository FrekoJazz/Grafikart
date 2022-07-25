// LE DOM

/*En plus de l'objet window on a aussi accès à un objet document qui permet de récupérer des éléments HTML et de les manipuler.

On partira systématiquement de cet objet afin de sélectionner nos éléments.*/

// Pour sélectionner un élément
document.body // Récupère l'élément body
document.getElementById('demo') // Sélectionne l'élément avec l'id demo
document.querySelector('.demo') // Sélectionne le premier élément correspondant au sélecteur CSS

// Pour sélectionner plusieurs éléments
document.getElementsByClassName('demo') // Sélectionne les éléments avec la class démo
document.getElementsByTagName('p') // Sélectionne les éléments <p>
var elements = document.querySelectorAll('.demo') // Sélectionne les éléments correspondant au sélecteur CSS 
// Ces méthodes renvoient un objet NodeList enumerable 
// On peut parcourir cette liste d'éléments comme un tableau
for (var i = 0; i < elements.length; ++i) {
    var element = elements[i] // objet de type Element
}

/*Une fois que l'on obtient un élément il est possible d'obtenir différentes informations.*/

element.getAttribute('attribut') // Permet de récupérer la valeur d'un attribut
element.style // Permet de récupérer les styles associés à l'élément
element.classList // Permet de récupérer la liste des classes associées à un élément 
element.offsetHeight // Donne la hauteur réel de l'élément

/*Mais on peut aussi modifier un élément*/

element.setAttribute('href', 'http://grafikart.fr')
element.style.fontSize = '24px'
element.classList.add('red') // Ajoute une class à l'élément

// TRAVERSER LE DOM

/*Un document HTML n'est au final qu'un arbre d'éléments HTML et texte qu'il est possible de parcourir de différentes manières.
Cet arbre est appellé le DOM.*/

//https://grafikart.fr/uploads/2016/05/dom.png

/*Quand on récupère un élément dans la page on récupère en fait un noeud dans le DOM.
Il est possible de naviguer dans l'arbre à partir d'un élément préalablement récupéré.*/

element.childNodes // Renvoie tous les noeuds enfant (même les noeuds textes)
element.children // Renvoie tous les noeuds éléments
element.firstChild // Récupère le premier enfant 
element.firstElementChild // Récupère le premier enfant de type element 
element.previousElementSibling
element.nextElementSibling

// MODIFIER LE DOM

/*On peut aussi créer et modifier des éléments gràce à différentes méthodes*/

element.appendChild(enfant) // ajoute un élément à un autre
element.removeChild(enfant) // supprime un enfant 
element.textContent = 'Salut' // Change la valeur du noeud texte 
element.innerHTML // Renvoie le contenu HTML de l'élément 
parentElement.insertBefore(nouvelElement, refElement)

//READ THE DOC

/*Encore une fois je ne vous ai présenté qu'un nombre limité de méthodes. 
Pour plus d'informations n'hésitez pas à vous rendre sur la documentation sur l'objet Node.
https://developer.mozilla.org/fr/docs/Web/API/Node*/