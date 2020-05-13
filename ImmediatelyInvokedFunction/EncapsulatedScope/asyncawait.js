(async() => {
    const url = 'https://api.github.com/users/deatiger'

    const json = await fetch(url)
        .then(res => {
            return res.json()
        }).catch(error => {
            return null
        });

    console.log(json.login)
})()
