const CLIENT_ID = ""
const CLIENT_SECRET = ""


async function getAccessToken() {
    let response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded", 
            "Authorization" : "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
        },
        body: "grant_type=client_credentials"
    })
    let result = await response.json()
    return result.access_token
}


async function request() {
    let response = await fetch("https://api.spotify.com/v1/tracks/2JOO9SzSalKixThDuSAtwY", {
        headers: {
            "Authorization": `Bearer ${await getAccessToken()}`,
            "Content-Type": "application/json"
        }
    })
    let result = await response.json()
    console.log(result)
    return result
}


// request()