const form = document.querySelector(".login_form")
const inputEmail = document.querySelector(".input_email")
const inputPassword = document.querySelector(".input_password")
const rememberme = document.querySelector(".login_remember_check")

// console.log(localStorage.getItem('newpass') === );
if (localStorage.getItem('newpass') === '1') {
    function myFunction() {
        var x = document.getElementById("snackbar");
        
        x.className = "show";
        
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        localStorage.removeItem('newpass')
    }
    myFunction()
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const res = await fetch('http://localhost:4000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login: inputEmail.value,password: parseInt(inputPassword.value)})
    })

    const data = await res.json()
    console.log(data);
    if (data.status === 200) {
        localStorage.setItem('token', data.key)
        window.location = '/main.html'
    }
})