import user from './User.js';
const btn = document.querySelector('#submit');
const password  = document.querySelector("#name");
const username = document.querySelector("#firstName");
const age  = document.querySelector("#age");
const email  = document.querySelector("#email");

function getId(){
    let id
    if(localStorage.getItem('students')==null){
        id=1;
    }else{
        let studentsID = JSON.parse(localStorage.getItem('students'));
        id=studentsID.length
    }
    return id;
}

let arr = [];
btn.addEventListener('click',register)
function register(){
let id = getId();
let Students = new                                user(id,username.value,password.value,age.value,email.value);
saveLocalStorage(Students);
window.location.href='/login.html';
}

function saveLocalStorage(arg){
    arr.push(arg);
    if(localStorage.getItem('students') == null){
        localStorage.setItem('students',JSON.stringify(arr));
   }else{
       let  newarr = JSON.parse(localStorage.getItem('students'))
       newarr.push(arg)
       localStorage.setItem('students',JSON.stringify(newarr));
   }
}


