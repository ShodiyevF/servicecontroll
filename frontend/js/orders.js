const orderList = document.querySelector('.orders_list')

async function getOrders() {
    const res = await fetch('http://localhost:4000/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token: localStorage.getItem('token'),
        company_id: localStorage.getItem('company')
    })})
    
    const data = await res.json()
    if (data.status === 404) {
        
    } else {
        for (const i of data.data) {
            const li = document.createElement('li')
            const div = document.createElement('div')
            const pId = document.createElement('p')
            const aOwner = document.createElement('a')
            const pDevice = document.createElement('p')
            const pAbout = document.createElement('p')
            const pStartDate = document.createElement('p')
            const spanStartDate = document.createElement('span')
            const divDateWrapper = document.createElement('div')
            const spanDate = document.createElement('span')
            const divTimeWrapper = document.createElement('div')
            const spanStartTime = document.createElement('span')
            const spanEndTime = document.createElement('span')
            const pStatus = document.createElement('p')
            
            aOwner.href = "user.html"
            
            li.classList.add('orders_item')
            div.classList.add('orders_container', 'orders_item')
            pId.classList.add('order_item_text', 'order_item_id')
            aOwner.classList.add('order_item_text', 'order_item_owner')
            pDevice.classList.add('order_item_text', 'order_item_device')
            pAbout.classList.add('order_item_text', 'order_item_about')
            pStartDate.classList.add('order_item_text', 'order_item_start_date')
            spanStartDate.classList.add('order_start_time_item')
            divDateWrapper.classList.add('order_item_text', 'order_item_date_wrapper')
            spanDate.classList.add('order_item_text', 'order_item_date')
            divTimeWrapper.classList.add('order_item_text', 'order_item_time_wrapper')
            spanStartTime.classList.add('order_item_text', 'order_start_time_item')
            spanEndTime.classList.add('order_item_text', 'order_end_time_item')
            pStatus.classList.add('order_item_text', 'order_item_status')

            aOwner.dataset.client_id = i.client_id
            
            const order_id = i.order_id.toString().length === 1 ? '# 0000000' + i.order_id : i.order_id.toString().length === 2 ? '# 000000' + i.order_id : i.order_id.toString().length === 3 ? '# 00000' + i.order_id : i.order_id.toString().length === 4 ? '# 0000' + i.order_id : i.order_id.toString().length === 5 ? '# 000' + i.order_id : i.order_id.toString().length === 6 ? '# 00' + i.order_id : i.order_id.toString().length === 7 ? i.order_id : i.order_id
            
            const getTime = i.order_get_time.split('T')[0].split('-')
            const getTimeFINISH = `${getTime[2]}.${getTime[1]}.${getTime[0]}`
            
            const startDate = i.order_get_time.split('T')
            const finishStart = startDate[1].split(':')[0] + ':' + startDate[1].split(':')[1]
            
            const startEndDate = i.order_over_time.split('|')
            
            
            // const endTIMEFINISH = parseInt(startEndDate[1].split(':')[0]) - (new Date()).getHours()
            // console.log(endTIMEFINISH);
            
            if (i.order_status == 1) {
                pStatus.style.color = 'black'
                pStatus.style.backgroundColor = '#F5F5F5'
            } else if (i.order_status == 2) {
                pStatus.style.color = '#2980D6'
                pStatus.style.backgroundColor = '#BBDEFB'
            } else if (i.order_status == 3) {
                pStatus.style.color = '#7B1FA2'
                pStatus.style.backgroundColor = '#E1BEE7'
            } else if (i.order_status == 4) {
                pStatus.style.color = '#DC5052'
                pStatus.style.backgroundColor = '#FFCDD2'
            } else if (i.order_status == 5) {
                pStatus.style.color = '#455A64'
                pStatus.style.backgroundColor = '#CFD8DC'
            } else if (i.order_status == 6) {
                pStatus.style.color = '#6EAF70'
                pStatus.style.backgroundColor = '#C8E6C9'
            } else if (i.order_status == 7) {
                pStatus.style.color = '#FFA102'
                pStatus.style.backgroundColor = '#FFECB3'
            } else if (i.order_status == 8) {
                pStatus.style.color = '#71B174'
                pStatus.style.backgroundColor = 'transparent'
                pStatus.style.border = '2px solid #388E3C'
            }
            
            pId.textContent = order_id
            aOwner.textContent = i.client_fullname
            pDevice.textContent = i.order_device_name
            pAbout.textContent = i.order_device_bug
            pStartDate.textContent = getTimeFINISH
            spanStartDate.textContent = finishStart
            spanDate.textContent = i.order_over_time.split('|')[0]
            spanStartTime.textContent = `${startEndDate[1]} / `
            spanEndTime.textContent = 'tefgst'
            pStatus.textContent = i.order_status == 1 ? 'Kutilayotganda' : i.order_status == 2 ? 'Izlashda' : i.order_status == 3 ? 'Jarayonda' : i.order_status == 4 ? 'Buzildi' : i.order_status == 5 ? 'Tuzalmadi' : i.order_status == 6 ? 'Tuzaldi	' : i.order_status == 7 ? 'Qaytdi' : 'Yetkazildi' 
            
            divDateWrapper.appendChild(spanDate)
            divDateWrapper.appendChild(divTimeWrapper)
            divTimeWrapper.appendChild(spanStartTime)
            divTimeWrapper.appendChild(spanEndTime)
            pStartDate.appendChild(spanStartDate)
            div.appendChild(pId)
            div.appendChild(aOwner)
            div.appendChild(pDevice)
            div.appendChild(pAbout)
            div.appendChild(pStartDate)
            div.appendChild(divDateWrapper)
            div.appendChild(pStatus)
            li.appendChild(div)
            
            orderList.appendChild(li)
            
            const user_fullname_linkAlla = document.querySelectorAll('.order_item_owner');
            
            for (const i of user_fullname_linkAlla) {
                i.onclick = (e) => {
                    localStorage.setItem('client_id', +(e.target.dataset.client_id))
                }
            }
            // <li class="orders_item">
            //     <div class="orders_container orders_item">
            //         <p class="order_item_text order_item_id"># 00122136</p>
            //         <a class="order_item_text order_item_owner" href="user.html">Abdusattorov Abdusattor</a>
            //         <p class="order_item_text order_item_device">Galaxaaaaaaaaaaaaaaaaaaaaiy A52</p>
            //         <p class="order_item_text order_item_about">aaaaaaaaaaaaaaaaaaaaaa</p>
            //         <p class="order_item_text order_item_start_date">01.10.2021 <span class="order_start_time_item">09:00</span></p>
            //         <div class="order_item_text order_item_date_wrapper">
            //             <span class="order_item_text order_item_date">02.10.2021</span>
            //             <div class="order_item_text order_item_time_wrapper">
            //                 <span class="order_item_text order_start_time_item">12:00 / </span>
            //                 <span class="order_item_text order_end_time_item">-11:42</span>
            //             </div>
            //         </div>
            //         <p class="order_item_text order_item_status">Tuzalmadi</p>
            //     </div>
            // </li>
        }
    }
}

getOrders()