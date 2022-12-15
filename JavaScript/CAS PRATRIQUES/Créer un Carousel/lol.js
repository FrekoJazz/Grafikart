/* console.log(fetch("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port"))

fetch("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port")
    .then((res) => {
        return res.json()
    })
    .then(res => {
        return console.log(res)
    })
 */

const getAddress = async (url) => {
    const res = await fetch(url)
    const resToJson = await res.json

    console.log(resToJson)
}

getAddress("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port")


console.log(getAddress("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port"));