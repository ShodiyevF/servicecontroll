const form = document.querySelector('.login_form')
const input = document.querySelector('.login_input')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log('asd');

    const res = await fetch('http://localhost:4000/recoverpass',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: input.value 
        })
    })
    console.log(res);
    const data = await res.json()

    console.log(data);

    if (data.status === 200) {
        await (window.location = '/login.html')
        localStorage.setItem('newpass', 1)
    } else {
        console.log('asd');
        input.classList.add('error_border_color')
    }
    
})