/* fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    })
 */

// PRINCIPE DE BASES POUR ENVOYER DES REQUETES EN GET

const getUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        //let response = await fetch('https://jsonplaceholder.typicode.com/usssers') //ERROR
        //let response = await fetch('https://127.0.0.1:4747') //ERROR
        if (response.ok) {
            let data = await response.json()
            console.log(data)
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (e) {
        console.log(e) // Pour en savoir plus sur les types d'erreur : https://developer.mozilla.org/fr/docs/Web/API/fetch
    }
}

getUsers()

// PRINCIPE DE BASES POUR ENVOYER DES REQUETES EN POST

const insertPost = async (data) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let responseData = await response.json()
    console.log(responseData);
}

insertPost({
    name: 'Jean',
    age: 29
})