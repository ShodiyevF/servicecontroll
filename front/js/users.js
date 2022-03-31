const messageModall = document.querySelector(".message_modall");
const messageModal = document.querySelector(".message_modal");
const rightMain = document.querySelector(".right_main");
const usersList = document.querySelector(".users_list");
const usersSection = document.querySelector(".users");



(async () => {
    const res = await fetch('http://localhost:4000/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        token: localStorage.getItem('token') ? localStorage.getItem('token') : 'asd'
    })})
    
    const data = await res.json()
    if (data.data) {
        if(!(data.data.length)){
            usersSection.style.display = 'none'
            messageModall.textContent = 'Mijozlar yoq !'
            messageModall.classList.remove('display_none')
        }
    }
    if (data.status != 200) {
        messageModal.textContent = `Siz da "Mijozlar" bo'limini ko'rish huquqi yoq`
        messageModal.classList.remove('display_none')
        rightMain.classList.add('display_none')
    } else {
        for (const i of data.data) {
            const asd = i.client_add_date.split('-')
            let tes = asd[2][0] + asd[2][1] + '.' + asd[1] + '.' + asd[0]
            
            const div_users_status_img_wrapper = document.createElement('div')
            const div_fullname = document.createElement('div')
            const div_phonenumber = document.createElement('div')
            
            const li = document.createElement('li')
            const p_user_id = document.createElement('p')
            const img_status = document.createElement('img')
            const a_fullname_link = document.createElement('a')
            const p_fullname = document.createElement('p')
            const a_phonenumber_first = document.createElement('a')
            const a_phonenumber_second = document.createElement('a')
            const p_date = document.createElement('p')
            const button_info = document.createElement('button')
            
            li.classList.add('users_item')
            
            p_user_id.classList.add('user_text', 'user_id')
            div_users_status_img_wrapper.classList.add('users_status_img_wrapper')
            img_status.classList.add('users_status_img')
            div_fullname.classList.add('user_fullname_wrapper')
            a_fullname_link.classList.add('user_fullname_link')
            p_fullname.classList.add('user_text', 'user_fullname')
            p_fullname.dataset.client_id = i.client_id
            div_phonenumber.classList.add('user_phonenumber_wrapper')
            a_phonenumber_first.classList.add('user_text', 'user_phonenumber_1')
            a_phonenumber_second.classList.add('user_text', 'user_phonenumber_2')
            p_date.classList.add('user_text', 'user_date')
            button_info.dataset.client_id = i.client_id
            button_info.classList.add('user_info', 'user_info_btn')
            
            
            const client_id = i.client_id.toString().length === 1 ? '@ 00000' + i.client_id : i.client_id.toString().length === 2 ? '@ 0000' + i.client_id : i.client_id.toString().length === 3 ? '@ 000' + i.client_id : i.client_id.toString().length === 4 ? '@ 00' + i.client_id : i.client_id.toString().length === 5 ? '@ 0' + i.client_id : i.client_id.toString().length === 6 ? i.client_id : i.client_id
            
            p_user_id.textContent = client_id
            img_status.src = i.client_status === 1 ? './../img/users/tanish.svg' : i.client_status === 2 ? './../img/users/muammo.svg' : i.client_status === 3 ? './../img/users/yaxshi.svg' : './../img/users/tanish.svg'
            p_fullname.textContent = i.client_fullname
            a_phonenumber_first.textContent = '+' +  i.client_phone_number_first
            a_phonenumber_second.textContent = '+' +  i.client_phone_number_second
            p_date.textContent = tes
            
            a_fullname_link.href = 'user.html'
            a_phonenumber_first.href = `tel:${i.client_phone_number_first}`
            a_phonenumber_second.href = `tel:${i.client_phone_number_second}`
            
            div_users_status_img_wrapper.appendChild(img_status)
            div_fullname.appendChild(a_fullname_link)
            a_fullname_link.appendChild(p_fullname)
            div_phonenumber.appendChild(a_phonenumber_first)
            div_phonenumber.appendChild(a_phonenumber_second)
            li.appendChild(p_user_id)
            li.appendChild(div_users_status_img_wrapper)
            li.appendChild(div_fullname)
            li.appendChild(div_phonenumber)
            li.appendChild(p_date)
            li.appendChild(button_info)
            usersList.appendChild(li)
            
        }
    }
    
    const btn = document.querySelectorAll('.user_info_btn');
    const modal_user_date = document.querySelector('.modal_user_date');
    const modal_user_id = document.querySelector('.modal_user_id');
    const modal_user_fullname = document.querySelector('.modal_user_fullname');
    const modal_user_info_text = document.querySelector('.modal_user_info_text');
    const user_fullname_linkAll = document.querySelectorAll('.user_fullname_link');
    const user_fullname_linkAlla = document.querySelectorAll('.user_fullname');

    for (const i of user_fullname_linkAlla) {
        i.onclick = (e) => {
            console.log(e.target.dataset.client_id);
            localStorage.setItem('client_id', +(e.target.dataset.client_id))
        }
    }
    
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    for (const i of btn) {
        i.onclick = (e) => {
            modal.style.display = "block";
            
            const about_user = data.data.find(el => el.client_id === +(e.target.dataset.client_id))
            
            const asd = about_user.client_add_date.split('-')
            let tes = asd[2][0] + asd[2][1] + '.' + asd[1] + '.' + asd[0];
            const client_dasdidd = about_user.client_id.toString().length === 1 ? '@ 00000' + about_user.client_id : about_user.client_id.toString().length === 2 ? '@ 0000' + about_user.client_id : about_user.client_id.toString().length === 3 ? '@ 000' + about_user.client_id : about_user.client_id.toString().length === 4 ? '@ 00' + about_user.client_id : about_user.client_id.toString().length === 5 ? '@ 0' + about_user.client_id : about_user.client_id.toString().length === 6 ? about_user.client_id : about_user.client_id
            
            modal_user_date.textContent = tes;
            modal_user_id.textContent = client_dasdidd;
            modal_user_fullname.textContent = about_user.client_fullname;
            modal_user_info_text.textContent = about_user.client_about;
            
        }
    }
    
})()

