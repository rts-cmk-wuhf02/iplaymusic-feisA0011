const clientId = "c35706ff80f749c1b51a1ee385ca2f9b";
const clientSecret = "18a64a36b7f34c5a8660bf463e2dd509";
const key = btoa(clientId + ":" + clientSecret);
console.log(key)
let accessToken;

async function apiLink(url) {
    accessToken = await getToken();
    data = await pageData(url);
    generatePage()


}

function pageData(url) {
    return fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(retrieve => retrieve.json())
}

function getToken() {
    return fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": 'Basic YzM1NzA2ZmY4MGY3NDljMWI1MWExZWUzODVjYTJmOWI6MThhNjRhMzZiN2YzNGM1YTg2NjBiZjQ2M2UyZGQ1MDk='
            },
            body: "grant_type=client_credentials"
        })
        .then(response => response.json()).then(data => data.access_token)

}
//apiLink('https://api.spotify.com/v1/browse/featured-playlists')
















// clone.querySelector('.featured__img').href = image.url

// fetch('https://accounts.spotify.com/api/token', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             "Authorization": 'Basic YzM1NzA2ZmY4MGY3NDljMWI1MWExZWUzODVjYTJmOWI6MThhNjRhMzZiN2YzNGM1YTg2NjBiZjQ2M2UyZGQ1MDk='
//         },
//         body: "grant_type=client_credentials"
//     })
//     .then(response => response.json())
//     .then(result => {
//         let accessToken = result.access_token;
//         console.log(accessToken)
//         fetch('https://api.spotify.com/v1/browse/featured-playlists', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': 'Bearer ' + accessToken
//                 }
//             })
//             .then(retrieve => retrieve.json())
//             .then(answer => {
//                 console.log(answer)
//             })
//     })