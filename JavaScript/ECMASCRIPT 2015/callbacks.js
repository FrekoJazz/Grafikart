// Je veux une fonction getPosts qui
// Récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
// Récupère les articles du premier utilisateur  https://jsonplaceholder.typicode.com/comments?userId={ID}
// Renvois les articles au format JSON

let get = function (url, succes, error) {
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                succes(xhr.responseText)
            } else {
                error(xhr)
            }
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}


let getPosts = function (success, error) {
    get('https://jsonplaceholder.typicode.com/users', function (response) {
        let users = JSON.parse(response)
        get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function (response) {
            let posts = JSON.parse(response)
            success(posts)
        }, function (e) {
            error('Erreur ajax', e)
        })
    }, function (e) {
        error('Erreur ajax', e)
    })
}

getPosts(function (posts) {
    console.log('le premier article', posts[0])
}, function (error) {
    console.error(error)
})