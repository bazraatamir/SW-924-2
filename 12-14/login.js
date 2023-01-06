
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const login = document.querySelector('#login')

let user

login.addEventListener('click',log)
  function  log(){
    let users = JSON.parse(localStorage.getItem('students'));
     user = users.findIndex(element => {
           if(username.value==element.username && password.value==element.password){
           
               window.location.href='/home.html';
            return element
           }else{
               alert('faild');
           }
          
       });
       console.log(user)
    users[user].vaild=true
       localStorage.setItem('students',JSON.stringify(users))
    
   };



 