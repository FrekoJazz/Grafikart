/* global */

// EXEMPLE SUR LES CHAINE DE CARATERES

// supprime les espace(dispo sur JSvanilla)
let demo = "    aze    "
console.log(_.trim(demo));

// supprime les 0 (dispo JSvanilla ?)
let demo2 = '000041000'
console.log(_.trim(demo2, '0'));

// permet de rajouter des éléments a une chaine (dispo JSvanilla, fonction padStart()/ padENd())
let demo3 = '01'
console.log(_.pad(demo3, 6));
console.log(_.pad(demo3, 6, '0'));
console.log(_.padStart(demo3, 6, '0'));
console.log(_.padEnd(demo3, 6, '0'));

// Capitaliser au niveau des mots initiaux (pas dispo JSvanilla)
let demo4 = 'john doe'
console.log(_.capitalize(demo4));

// convertir sous forme URL avec des "_" (pas dispo JSvanilla)
let demo5 = 'Je suis une URL intéréssante'
console.log(_.snakeCase(demo5));

// convertir sous forme URL avec des "-" (pas dispo JSvanilla)
let demo6 = 'Je suis une URL intéréssante'
console.log(_.kebabCase(demo6));




// EXEMPLE SUR LES TABLEAUX


// permet de fusionner plusieurs tableaux (dispo sur JSvanilla mais s'écrit d'une autre manière)
let tab = [1, 2, 3]
let tab2 = [4, 5]
console.log(_.concat(tab, tab2, 6, 7));

// permet de supprimer un élément du tableau (dispo sur JSvanilla mais plus difficile a mettre en place)
let tab3 = [1, 2, 3]
console.log(_.without(tab3, 2));

// permet de filtrer un tableau (dispo sur JSvanilla s'écrit de la même manière)
let tab4 = [1, 2, 3]
console.log(_.filter(tab4, e => {
    return e > 1
})); /*Lodash*/

console.log(tab4.filter(e => {
    return e > 1
}));

let users = [
    { 'user': 'fred', 'age': 40, 'active': false },

    { 'user': 'barney', 'age': 36, 'active': true },

    { 'user': 'pebbles', 'age': 1, 'active': true }
]

console.log(_.filter(users, (user) => {
    return user.active
}));

console.log(_.filter(users, { active: false })) /*on recupére seulement l'user demandé (même résultat que plus haut mais plus simple a écrire) */

console.log(_.find(users, { active: false })) /* récuper seulement le premier élemément qui correspond a notre critère sous forme d'objet et non plus d'array (trés utile dans des tableaux pour recuperer l'ID d'un tableau plus tôt que boucler) */

// pour réorganiser trés rapidement un tableau par ordre croissant ou décroissant (alphabet) (pas dispo JSvanilla)
console.log(_.orderBy(users, 'user', 'asc'))
// pour y passer plusieurs paramétre (si même nom utiliser age,...)
console.log(_.orderBy(users, ['user', 'age']['asc', 'desc']))

// map permet de pacourir chaque élement et d'effectuer une operation sur ces élements la et retourner un resultat
/*console.log(_.map(users, function (user) {
    return user.age
})) /*lodash*/

console.log(users.map(user => user.age)); /*JSvanilla*/

// si on veut multiplier l'age des utilisateur par 2
console.log(_.map(users, function (user) {
    user.age = user.age * 2
    return user
})) /*lodash*/

// ! commenter le log du dessus pour un resultat exact !
console.log(users.map(user => user.age * 2)); /*JSvanilla*/

// permet de parcourir chaque élement du tableau
_.forEach(users, (user, key) => {
    console.log(key, '=>', user.user);
})/*lodash*/

function e(user, key) {
    console.log(key, '=>', user.user)
}
users.forEach(e)/*JSvanilla*/

// EXEMPLE SUR LES OBJECTS

// pour l'utilisation sur des objets
_.forEach(users[0], (value, key) => {
    console.log(key, '=>', value);
}) //(dispo JSvanilla ?)

// pour recuper un utilisateur au hasard
console.log(_.sample(users));
// pour recuper 2 utilisateur au hasard
console.log(_.sampleSize(users, 2));

// permet d'organiser et de créer un nouvelle objet et de prendre une clef en particulier (ex: organiser mais user par la première lettre de leur nom)
console.log(_.groupBy(users, user => {
    return user.user.substr(0, 1)
}));

// si on veut connaitre la taille d'un object/ le nombre de clef qu'il a
let user = users[0]
console.log(_.size(user));/*lodash*/

console.log(Object.keys(user).length);/*JSvanilla*/

// quand on veut clonner un Object & changer un statut
user = users[0]
let user2 = _.clone(user)
user2.age = user2.age * 3
_.assign(user2, { active: true }) //remmplace active par n'importe qu'elle clef
console.log(user2);

// pour supprimer une clef d'un object
user = users[0]
user2 = _.assign({}, user, { user: { firstname: 'John', lastname: 'Doe' }, active: true, age: 2 })
_.unset(user2, 'user.lastname')
console.log(user2);

// pour ajouter une clef d'un object
user = users[0]
user2 = _.assign({}, user, { user: {}, active: true, age: 2 })
_.set(user2, 'user.firstname', 'Mino')
console.log(user2);

// pour tester une variable
user2 = { user: { firstname: 'demo' }, active: true, age: 2 }
if (_.get(user2, 'user.firstname', false) === 'demo') {
    console.log('ok');
}



// EXEMPLE SUR DEBOUNCE & THROTTLE  (POUR LIMITER LES APPELS SUCCESSIFS)

// pour debounce (appelle qu'une seule fois une méthode au début ou à la fin d'une succession de déclenchements d'un événement)
window.addEventListener('scroll', _.debounce(function () {
    console.log('Je scroll au debounce');
}, 200))
// pour throttle (appelle une méthode au début & la fin d'une succession de déclenchements d'un événement)
window.addEventListener('scroll', _.throttle(function () {
    console.log('Je scroll au throttle');
}, 200))

window.addEventListener('scroll', function () {
    console.log('Je scroll sans rien');
})



// Pour ne pas utiliser toute la librairie de Lodash on peut l'installer avec npm dans le terminal (voir la doc https://lodash.com/) et aller chercher apres dans notre JS la function en particulier :
// exp : let throttle = required('lodash/throttle)