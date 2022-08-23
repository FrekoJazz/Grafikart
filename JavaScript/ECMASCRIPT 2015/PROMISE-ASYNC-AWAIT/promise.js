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


const getPosts = () => {
    return get('https://jsonplaceholder.typicode.com/users').then(response => {
        let users = JSON.parse(response)
        return get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id).then(response => {
            let posts = JSON.parse(response)
            return (posts)

        })
    })
}

getPosts().then(posts => {
    console.log(posts[0])
}).catch(error => {
    console.log(error)
}).then(() => {
    console.log('Fin des requetes AJAX')
})

/**
 * promesse
 * let p = new promise (function (resolve, reject) {
 * .....
 * .....
 * resolve(...)
 * })
 * 
 * p.then(response => { ... })
 * .then( () => { ... })
 * .then( ()=> { ... })
 * p.catch(response => { ... })
 */
