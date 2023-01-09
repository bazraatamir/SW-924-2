
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const login = document.querySelector('#login')

let user

login.addEventListener('click',log)
  function  log(){
    let users = JSON.parse(localStorage.getItem('students'));
     user = users.findIndex(element => {
          return (username.value==element.username && password.value==element.password)
        })

    if(user!==-1){
        users[user].vaild=true
        localStorage.setItem('students',JSON.stringify(users))
        window.location.href='/home.html';
    }else{
        alert('faild');
    }
   };



 