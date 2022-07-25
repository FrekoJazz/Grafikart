/*À propos de ce tutoriel
Dans ce chapitre nous allons voir comment capturer les erreurs de nos scripts en JavaScript.*/

//TRY CATCH
/*Parfois un code peut renvoyer une erreur (souvent appellée exception).*/

var o = {}
o.maMethode() // Uncaught TypeError: o.maMethode is not a function

/*Ces erreurs bloquent l'éxécution de notre script et empèche l'éxécution de la suite de notre code. Aussi il est important de les capturer afin de pouvoir gérer les éventuels problèmes et informer l'utilisateur sur ce qu'il se passe.*/

try {
    var o = {}
    o.maMethode()
} catch (e) {
    // Le code ici ne s'éxécutera qu'en cas d'erreur
    console.log('Une erreur à eu lieu : ' + e);
} finally {
    // Ici le code s'éxécutera qu'il y ai eu une erreur ou non
}


//THROW
/*Il est aussi possible d'utiliser ce mécanisme d'erreur pour renvoyer une erreur si on obtient quelque chose d'inattendu.*/

function double(nombre) {
    if (!Number.isInteger(nombre)) {
        throw new Error('Impossible de doubler un nombre qui ne soit pas un entier');
    }
}

double('aze') // ERROR : Impossible de doubler un nombre qui ne soit pas un entier

/*Ce système s'avère particulièrement utile lorsque l'on partagera notre code. Il permet à l'utilisateur final de la fonction de comprendre plus clairement les problèmes.*/

//Pour plus d' information : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/try...catch