// Je veux une fonction getPosts qui
// Récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
// Récupère les articles du premier utilisateur  https://jsonplaceholder.typicode.com/comments?userId={ID}
// Renvois les articles au format JSON

const get = function (url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}


const getPosts = async () => {
    let response = await get('https://jsonplaceholder.typicode.com/users')
    let users = JSON.parse(response)
    response = await get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
    let posts = JSON.parse(response)
    return posts
}

let getFirstPost = async () => {
    let posts = await getPosts()
    return posts[0]
}

let demo = async () => {
    let arr = await Promise.all([getPosts(), getFirstPost()])
    console.log(arr)
}

demo()

/**
 * On definie une méthode en mettant async devant => la méthode retourne une promesse quoi qu'il arrive
 * 
 * a l'interrieur de cette méthode, si je dois attendre la résolution d'une autre promesse plus tot que de faire le .then et le .catch je peux simplement lui dire await. Dans ce cas la il vas attendre cette resésolution la.
 * Si je dois capturer l'erreur on peut soit laisser l'erreur se propager a l'élement parent ou sinon entourer l'erreur d'un try catch (l'avntage du try catch c'est que l'on peut englober tous notre code, mettre un catch(e) a la fin avec un console.log)
 * ce qui permet d'avoir d'eviter d'avoir des problémes qui sont propagés j'usqu'en haut et de renvoyer une exveption sur toute notre applications.
*/
