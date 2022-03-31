let user_id

const user_info_fullname = document.querySelector('.user_info_fullname');
const user_info_item_value_id = document.querySelector('.user_info_item_value_id');
const user_info_item_value_tel = document.querySelector('.user_info_item_value_tel');
const user_info_item_value_tell = document.querySelector('.user_info_item_value_tell');
const user_info_item_value_address = document.querySelector('.user_info_item_value_address');
const user_info_item_value_info = document.querySelector('.user_info_item_value_info');
const user_statuts = document.querySelector('.user_statuts');
const user_info_status = document.querySelector('.user_info_status');

const user_status = document.querySelectorAll('.user_status');
const user_status_heart = document.querySelector('.user_status_heart');
const user_status_blackdocument = document.querySelector('.user_status_blackdocument');
const user_status_star = document.querySelector('.user_status_star');



user_info_status.onclick = (e) => {
    // console.log(e);
    // console.log(user_statuts.classList[1]);
    if (user_statuts.classList[1] === 'display_none') {
        user_statuts.classList.remove('display_none')
    } else {
        user_statuts.classList.add('display_none')
    }
}

for (const i of user_status) {
    i.onclick = async (e) => {
        const status_id = +(e.target.dataset.status)
        console.log(user_info_status.style);
        user_info_status.style.backgroundImage = `url('../img/users/${status_id === 1 ? 'tanish.svg' : status_id === 2 ? 'muammo.svg' : status_id === 3 ? 'yaxshi.svg' : 'sinalmagan.svg'}')`
        user_statuts.classList.add('display_none')
        const res = await fetch('http://localhost:4000/userstatus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('token'),
                client_status: +(e.target.dataset.status),
                client_id: localStorage.getItem('client_id')
            })
        })        

        const data = await res.json()
    }
}

(async () => {
    const res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('token')
        })
    })

    const data = await res.json()
    const client = data.data.find(el => el.client_id === +(localStorage.getItem('client_id')))
    
    const client_id = client.client_id.toString().length === 1 ? '@ 00000' + client.client_id : client.client_id.toString().length === 2 ? '@ 0000' + client.client_id : client.client_id.toString().length === 3 ? '@ 000' + client.client_id : client.client_id.toString().length === 4 ? '@ 00' + client.client_id : client.client_id.toString().length === 5 ? '@ 0' + client.client_id : client.client_id.toString().length === 6 ? client.client_id : client.client_id
    user_info_fullname.textContent = client.client_fullname
    user_info_item_value_id.textContent = client_id
    user_info_item_value_tel.textContent = '+' + client.client_phone_number_first
    user_info_item_value_tell.textContent = '+' + client.client_phone_number_second
    user_info_item_value_address.textContent = client.client_address
    user_info_item_value_info.textContent = client.client_about
    
})()