const companys = document.querySelector(".companys")
const active_company = document.querySelector(".active_company")
const logout_btn = document.querySelector(".logout_btn")

logout_btn.onclick = (e) => {
    localStorage.removeItem('token')
    window.location = '/login.html'
}

companys.onchange = (e) => {
    const value = +(companys.value)
    localStorage.setItem('company', value)
}

console.log(+(localStorage.getItem('company')));

(async () => {
    const res = await fetch('http://localhost:4000/companys', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token: localStorage.getItem('token'),
        company_id: +(localStorage.getItem('company'))
    })})
    
    const data = await res.json()
    
    let counter = 0 
    for (const i of data.data) {
        ++counter
        const option = document.createElement('option')
        option.value = counter
        option.dataset.id = counter
        option.textContent = i.company_fullname
        option.classList.add('company_option')
        companys.appendChild(option)
    }

    const option = document.querySelectorAll('option')
    const a = []
    for (const i of option) {
        a.push(i)
    }
    
    const tes = a.find(el => el.dataset.id == (+(localStorage.getItem('company')) ? +(localStorage.getItem('company')) : 1))

    active_company.textContent = 'Aktiv companiya: ' + tes.innerHTML

    companys.value = (+(localStorage.getItem('company')) ? +(localStorage.getItem('company')) : 1)  
    
})()