const user_info_fullname = document.querySelector('.user_info_fullname');
const user_info_item_value_id = document.querySelector('.user_info_item_value_id');
const user_info_item_value_tel = document.querySelector('.user_info_item_value_tel');
const user_info_item_value_tell = document.querySelector('.user_info_item_value_tell');
const user_info_item_value_address = document.querySelector('.user_info_item_value_address');
const user_info_item_value_info = document.querySelector('.user_info_item_value_info');
const user_statuts = document.querySelector('.user_statuts');
const user_info_status = document.querySelector('.user_info_status');

const user_order_list = document.querySelector('.user_order_list');
const order_count = document.querySelector('.order_count');
const order_count_span = document.querySelector('.order_count_span');
const null_orders = document.querySelector('.null_orders');

const user_status = document.querySelectorAll('.user_status');
const user_status_heart = document.querySelector('.user_status_heart');
const user_status_blackdocument = document.querySelector('.user_status_blackdocument');
const user_status_star = document.querySelector('.user_status_star');



user_info_status.onclick = (e) => {
    if (user_statuts.classList[1] === 'display_none') {
        user_statuts.classList.remove('display_none')
    } else {
        user_statuts.classList.add('display_none')
    }
}

for (const i of user_status) {
    i.onclick = async (e) => {
        const status_id = +(e.target.dataset.status)
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
    if (data.status == 404) {
        alert(`Siz da mijozning statusini o'zgartirishga huquq yoq !`)
    } else {
        user_info_status.style.backgroundImage = `url('../img/users/${status_id === 1 ? 'tanish.svg' : status_id === 2 ? 'muammo.svg' : status_id === 3 ? 'yaxshi.svg' : 'sinalmagan.svg'}')`
    }
}}

async function userInfo () {
    const res = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token: localStorage.getItem('token'),
        company_id: localStorage.getItem('company') ? localStorage.getItem('company') : 1
    })})
    
    const data = await res.json()
    
    const client = data.data.find(el => el.client_id == +(localStorage.getItem('client_id')))
    
    document.title = client.client_fullname
    
    const client_id = client.client_id.toString().length === 1 ? '@ 00000' + client.client_id : client.client_id.toString().length === 2 ? '@ 0000' + client.client_id : client.client_id.toString().length === 3 ? '@ 000' + client.client_id : client.client_id.toString().length === 4 ? '@ 00' + client.client_id : client.client_id.toString().length === 5 ? '@ 0' + client.client_id : client.client_id.toString().length === 6 ? client.client_id : client.client_id
    user_info_fullname.textContent = client.client_fullname
    user_info_item_value_id.textContent = client_id
    user_info_item_value_tel.textContent = '+' + client.client_phone_number_first
    user_info_item_value_tell.textContent = '+' + client.client_phone_number_second
    user_info_item_value_address.textContent = client.client_address
    user_info_item_value_info.textContent = client.client_about
    
    user_info_status.style.backgroundImage = `url('../img/users/${client.client_status === 1 ? 'tanish.svg' : client.client_status === 2 ? 'muammo.svg' : client.client_status === 3 ? 'yaxshi.svg' : 'sinalmagan.svg'}')`
}


async function userOrders () {
    
    const res = await fetch('http://localhost:4000/order', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token: localStorage.getItem('token'),
        client_id: +(localStorage.getItem('client_id')),
        company_id: localStorage.getItem('company') ? localStorage.getItem('company') : 1
    })})
    
    const data = await res.json()
    
    if (data.status === 404) {
        order_count.innerHTML = `Sizda buyurtmanlarni ko'rish huquqi yoq !!!`
        order_count.style.color = 'red'
    } else {
        order_count_span.textContent = data.data.length ? data.data.length : 0
        
        if (!data.data.length) {
            null_orders.classList.remove('visually-hidden')
        }
        
        for (const i of data.data) {
            
            const order_id = i.order_id.toString().length === 1 ? '#00000' + i.order_id : i.order_id.toString().length === 2 ? '#0000' + i.order_id : i.order_id.toString().length === 3 ? '#000' + i.order_id : i.order_id.toString().length === 4 ? '#00' + i.order_id : i.order_id.toString().length === 5 ? '#0' + i.order_id : i.order_id.toString().length === 6 ? i.order_id : i.order_id
            
            const li = document.createElement('li')
            
            const divId = document.createElement('div')
            const h1Id = document.createElement('h1')
            const pId = document.createElement('p')
            const divSpanId = document.createElement('div')
            const spanId = document.createElement('span')
            const btnSpanId1 = document.createElement('button')
            const btnSpanId2 = document.createElement('button')
            const btnSpanId3 = document.createElement('button')
            const btnSpanId4 = document.createElement('button')
            const btnSpanId5 = document.createElement('button')
            const btnSpanId6 = document.createElement('button')
            const btnSpanId7 = document.createElement('button')
            const btnSpanId8 = document.createElement('button')
            
            const divModel = document.createElement('div')
            const h1Model = document.createElement('h1')
            const pModel = document.createElement('p')
            
            const divBug = document.createElement('div')
            const h1Bug = document.createElement('h1')
            const pBug = document.createElement('p')
            
            const divGetTime = document.createElement('div')
            const h1GetTime = document.createElement('h1')
            const pGetTime = document.createElement('p')
            
            const divEndTime = document.createElement('div')
            const h1EndTime = document.createElement('h1')
            const pEndTime = document.createElement('p')
            
            const divPrice = document.createElement('div')
            const h1Price = document.createElement('h1')
            const pPrice = document.createElement('p')
            
            
            li.classList.add('user_order_item')
            
            divId.classList.add('user_order_item_wrapper', 'user_order_item_id_wrapper')
            h1Id.classList.add('user_order_item_title', 'user_order_item_title_id')
            pId.classList.add('user_order_item_body', 'user_order_item_body_id')
            divSpanId.classList.add('user_order_item_status_wrapper')
            // divbtnId.classList.add('user_order_item_status_wrapper')
            spanId.classList.add('user_order_item_status')
            btnSpanId1.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId2.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId3.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId4.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId5.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId6.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId7.classList.add('user_order_item_status_btn', 'display_none')
            btnSpanId8.classList.add('user_order_item_status_btn', 'display_none')
            
            divModel.classList.add('user_order_item_wrapper', 'user_order_item_model_wrapper')
            h1Model.classList.add('user_order_item_title', 'user_order_item_title_model')
            pModel.classList.add('user_order_item_body', 'user_order_item_body_model')
            
            divBug.classList.add('user_order_item_wrapper', 'user_order_item_bug_wrapper')
            h1Bug.classList.add('user_order_item_title', 'user_order_item_title_model')
            pBug.classList.add('user_order_item_body', 'user_order_item_body_model')
            
            divGetTime.classList.add('user_order_item_wrapper', 'user_order_item_gettime_wrapper')
            h1GetTime.classList.add('user_order_item_title', 'user_order_item_title_gettime')
            pGetTime.classList.add('user_order_item_body', 'user_order_item_body_gettime')
            
            divEndTime.classList.add('user_order_item_wrapper', 'user_order_item_endtime_wrapper')
            h1EndTime.classList.add('user_order_item_title', 'user_order_item_title_endtime')
            pEndTime.classList.add('user_order_item_body', 'user_order_item_body_endtime')
            
            divPrice.classList.add('user_order_item_wrapper', 'user_order_item_id_wrapper')
            h1Price.classList.add('user_order_item_title', 'user_order_item_title_id')
            pPrice.classList.add('user_order_item_body', 'user_order_item_body_id', 'user_order_item_body_price')
            
            if (i.order_status == 1) {
                spanId.style.color = 'black'
                spanId.style.backgroundColor = '#F5F5F5'
            } else if (i.order_status == 2) {
                
                spanId.style.color = '#2980D6'
                spanId.style.backgroundColor = '#BBDEFB'
            } else if (i.order_status == 3) {
                
                spanId.style.color = '#7B1FA2'
                spanId.style.backgroundColor = '#E1BEE7'
            } else if (i.order_status == 4) {
                
                spanId.style.color = '#DC5052'
                spanId.style.backgroundColor = '#FFCDD2'
            } else if (i.order_status == 5) {
                
                spanId.style.color = '#455A64'
                spanId.style.backgroundColor = '#CFD8DC'
            } else if (i.order_status == 6) {
                
                spanId.style.color = '#6EAF70'
                spanId.style.backgroundColor = '#C8E6C9'
            } else if (i.order_status == 7) {
                
                spanId.style.color = '#FFA102'
                spanId.style.backgroundColor = '#FFECB3'
            } else if (i.order_status == 8) {
                
                spanId.style.color = '#71B174'
                spanId.style.backgroundColor = 'transparent'
                spanId.style.border = '2px solid #388E3C'
            }
            
            spanId.dataset.status = i.order_status
            spanId.dataset.order_id = i.order_id
            
            btnSpanId1.dataset.order_id = i.order_id
            btnSpanId2.dataset.order_id = i.order_id
            btnSpanId3.dataset.order_id = i.order_id
            btnSpanId4.dataset.order_id = i.order_id
            btnSpanId5.dataset.order_id = i.order_id
            btnSpanId6.dataset.order_id = i.order_id
            btnSpanId7.dataset.order_id = i.order_id
            btnSpanId8.dataset.order_id = i.order_id
            
            btnSpanId1.dataset.status = 1
            btnSpanId2.dataset.status = 2
            btnSpanId3.dataset.status = 3
            btnSpanId4.dataset.status = 4
            btnSpanId5.dataset.status = 5
            btnSpanId6.dataset.status = 6
            btnSpanId7.dataset.status = 7
            btnSpanId8.dataset.status = 8
            
            h1Id.textContent = 'Buyurtma ID:'
            pId.textContent = order_id
            spanId.textContent = i.order_status === 1 ? 'Kutilayotgan' : i.order_status === 2 ? 'Izlashda' : i.order_status === 3 ? 'Jarayonda' : i.order_status === 4 ? 'Buzildi' : i.order_status === 5 ? 'Tuzalmadi' : i.order_status === 6 ? 'Tuzaldi' : i.order_status === 7 ? 'Qaytdi' : 'Yetkazildi'  
            
            pId.dataset.order_idd= i.order_id
            
            h1Model.textContent = 'Qurulma rusumi:'
            pModel.textContent = i.order_device_name
            
            h1Bug.textContent = 'Qurulma aybi:'
            pBug.textContent = i.order_device_bug
            
            const asd = i.order_get_time.split('T')[1].split('.')[0].split(':')
            const fasd = i.order_get_time.split('T')[0].split('-')
            
            h1GetTime.textContent = 'Qabul vaqti:'
            pGetTime.textContent = `${asd[0]}:${asd[1]} ${fasd[2]}.${fasd[1]}.${fasd[0]}`
            
            h1EndTime.textContent = 'Tugash vaqti:'
            pEndTime.textContent = i.order_over_time.split('|')[1] + ' ' + i.order_over_time.split('|')[0]
            
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            h1Price.textContent = 'Narx:'
            pPrice.textContent = numberWithCommas(i.order_price) + ' So`m'
            
            btnSpanId1.textContent = 'Kutilayotgan'
            btnSpanId2.textContent = 'Izlashda'
            btnSpanId3.textContent = 'Jarayonda'
            btnSpanId4.textContent = 'Buzildi'
            btnSpanId5.textContent = 'Tuzalmadi'
            btnSpanId6.textContent = 'Tuzaldi'
            btnSpanId7.textContent = 'Qaytdi'
            btnSpanId8.textContent = 'Yetkazildi'
            
            divId.appendChild(h1Id)
            divId.appendChild(pId)
            divId.appendChild(divSpanId)
            divId.appendChild(spanId)
            divSpanId.appendChild(btnSpanId1)
            divSpanId.appendChild(btnSpanId2)
            divSpanId.appendChild(btnSpanId3)
            divSpanId.appendChild(btnSpanId4)
            divSpanId.appendChild(btnSpanId5)
            divSpanId.appendChild(btnSpanId6)
            divSpanId.appendChild(btnSpanId7)
            divSpanId.appendChild(btnSpanId8)
            
            divModel.appendChild(h1Model)
            divModel.appendChild(pModel)
            
            divBug.appendChild(h1Bug)
            divBug.appendChild(pBug)
            
            divGetTime.appendChild(h1GetTime)
            divGetTime.appendChild(pGetTime)
            
            divEndTime.appendChild(h1EndTime)
            divEndTime.appendChild(pEndTime)
            
            divPrice.appendChild(h1Price)
            divPrice.appendChild(pPrice)
            
            li.appendChild(divId)
            li.appendChild(divModel)
            li.appendChild(divBug)
            li.appendChild(divGetTime)
            li.appendChild(divEndTime)
            li.appendChild(divPrice)
            
            user_order_list.appendChild(li)
            
        }
        
        const span = document.querySelectorAll('.user_order_item_status')
        
        const btnSpanId = document.querySelectorAll('.user_order_item_status_btn')
        const user_order_item_status_wrapper = document.querySelector('.user_order_item_status_wrapper')
        
        const arrOrderIDSPAN = []
        for (const i of span) {
            arrOrderIDSPAN.push(i)
        }
        
        const arrOrderID = []
        for (const i of btnSpanId) {
            arrOrderID.push(i)
        }
        
        for (const i of span) {
            i.onclick = async (e) => {
                const spanBtn = arrOrderID.filter(el => +(el.dataset.order_id) == e.target.dataset.order_id)
                for (const i of spanBtn) {
                    if (i.classList[1] == 'display_none') {
                        i.classList.remove('display_none')
                    } else {
                        i.classList.add('display_none')
                    }
                }
            }
        }
        
        
        if (localStorage.getItem('order_id')) {
            const findedOrder = document.querySelectorAll(`[data-order_idd~="${+(localStorage.getItem('order_id'))}"]`)[0]

            if (findedOrder) {
                findedOrder.parentNode.parentNode.scrollIntoView()
                // user_order_list.scrollTo({ top: findedOrder.offsetTop+350, behavior: 'smooth'});
                // findedOrder.;
            }
        }
        
        for (const i of arrOrderID) {
            i.onclick = async (e) => {
                
                const res = await fetch('http://localhost:4000/order', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: localStorage.getItem('token'),
                    status: +(e.target.dataset.status),
                    order_id: +(e.target.dataset.order_id),
                    company_id: +(localStorage.getItem('company'))
                })
            })
            console.log(res);
            
            const spanBtn = arrOrderID.filter(el => +(el.dataset.order_id) == e.target.dataset.order_id)
            if ((await res.json()).status == 200) {
                const asd = arrOrderIDSPAN.find(el => +(el.dataset.order_id) == e.target.dataset.order_id)
                for (const i of spanBtn) {
                    i.classList.add('display_none')
                }
                asd.textContent = e.target.textContent
                asd.style.border = 'none'
                if (+(e.target.dataset.status) == 1) {
                    asd.style.color = 'black'
                    asd.style.backgroundColor = '#F5F5F5'
                } else if (+(e.target.dataset.status) == 2) {
                    asd.style.color = '#2980D6'
                    asd.style.backgroundColor = '#BBDEFB'
                } else if (+(e.target.dataset.status) == 3) {
                    asd.style.color = '#7B1FA2'
                    asd.style.backgroundColor = '#E1BEE7'
                } else if (+(e.target.dataset.status) == 4) {
                    asd.style.color = '#DC5052'
                    asd.style.backgroundColor = '#FFCDD2'
                } else if (+(e.target.dataset.status) == 5) {
                    asd.style.color = '#455A64'
                    asd.style.backgroundColor = '#CFD8DC'
                } else if (+(e.target.dataset.status) == 6) {
                    asd.style.color = '#6EAF70'
                    asd.style.backgroundColor = '#C8E6C9'
                } else if (+(e.target.dataset.status) == 7) {
                    asd.style.color = '#FFA102'
                    asd.style.backgroundColor = '#FFECB3'
                } else if (+(e.target.dataset.status) == 8) {
                    asd.style.color = '#71B174'
                    asd.style.backgroundColor = 'transparent'
                    asd.style.border = '2px solid #388E3C'
                }
            } else {
                await alert(`Sizda buyurtmani o'zgartirishga huquqingiz yoq`)
                for (const i of spanBtn) {
                    i.classList.add('display_none')
                }
            }
            
        }
    }
}

}

userOrders()

userInfo()


// test = async (status, ism, sana) => {
//     const res = await fetch('http://localhost:4000/e')

//     const data = (await res.json()).data

//     var regExpInputName = new RegExp(ism, 'gi');


//     const filtered = data.filter(el => {

//         // const sana_fixed = el.client_add_date.split('T')[0]

//         const sta = status ? el.client_status == status : ''
//         const name = ism ? el.client_fullname.match(regExpInputName) : ''
//         // const date = sana ? sana_fixed > sana : ''
//         // console.log(date);

//         const data = {
//             status: sta ? sta : '',
//             ism: name ? name : ''
//         }
//         return data
//     })

//     console.log(filtered);

// }

// test('fayzulloh', )
