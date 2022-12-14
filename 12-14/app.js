const lastName  = document.querySelector("#name");
const firstName  = document.querySelector("#firstName");
const age  = document.querySelector("#age");
const email  = document.querySelector("#email");
const info = document.querySelector(".info");


class user{
    constructor(username,lastName,age,email){
        this.username=username,
        this.lastName=lastName,
        this.age= age,
        this.email=email
    }
   
}
let arr = [];

function changeText(){
    const lastName  = document.querySelector("#name");
    const firstName  = document.querySelector("#firstName");
    const age  = document.querySelector("#age");
    const email  = document.querySelector("#email");
    
  let Students = new user(firstName.value,lastName.value,age.value,email.value);
    arr.push(Students);
    localStorage.setItem('students',JSON.stringify(arr));
   
}

let i =0;

function show(){
    
    for(i;i<arr.length; i++){
        let student = arr[i];
        for(let x in student){
           const text = document.createElement('p');
           text.innerHTML = x+":"+student[x]
           info.appendChild(text)
        }
    }
}


const findInp = document.querySelector('#inputSearch');
const findbtn = document.querySelector('#search');
const UserInfo = document.querySelector('#user')

function findUser(){
   let User =  arr.find((element)=>{
        return element.email==findInp.value;
    })
    for(let x in User){
        const text = document.createElement('p');
       text.innerHTML = x+":"+User[x]
        UserInfo.appendChild(text)
     }
}