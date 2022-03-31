async function checktoken() {
    const res = await fetch('http://localhost:4000/checktoken',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('token')
        })
    })
    const data = await res.json()
    if (data.status != 200) {
        window.location = '/login.html'
    }
}

checktoken()