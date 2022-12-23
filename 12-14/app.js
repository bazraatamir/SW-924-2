const info = document.querySelector(".info");
let User = class {
    constructor(id,username,lastName,age,email){
        this.id = id
        this.username = username,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }
   
}

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

window.addEventListener('load',show);




let arr = [];

function changeText(){
  
    const lastName  = document.querySelector("#name");
    const firstName  = document.querySelector("#firstName");
    const age  = document.querySelector("#age");
    const email  = document.querySelector("#email");
    let id = getId();
  let Students = new User(id,firstName.value,lastName.value,age.value,email.value);
  const studentInfo = document.createElement('div');
  studentInfo.setAttribute('data-id',`${Students.id}`)
  for(let x in Students){
    
    studentInfo.classList.add('student');
    const text = document.createElement('p');
    text.innerHTML = x+":"+Students[x];
    studentInfo.appendChild(text);
  
  }
  const Dlt = document.createElement('button');
  Dlt.classList.add('DltBnt')
  Dlt.innerText="delete";
  studentInfo.appendChild(Dlt)
   info.appendChild(studentInfo);
   saveLocalStorage(Students)
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

info.addEventListener('click',Delete)
let studentsInfo = JSON.parse(localStorage.getItem('students'))
function Delete(e){
    let TargetElement = e.target;
    if(TargetElement.className =='DltBnt'){
        let deleteElement = e.path[1];
        let id = deleteElement.dataset.id;
        console.log(id)
        newarr =  studentsInfo.filter((el)=>{
            return el.id != id
        });
        localStorage.setItem('students',JSON.stringify(newarr))
        deleteElement.remove()
    }
    
    console.log(e)
}



function show(){
    let i =0;
    let  newarr = JSON.parse(localStorage.getItem('students'))
    for(i;i<newarr.length; i++){
        let student = newarr[i];
        const studentInfo = document.createElement('div');
        studentInfo.setAttribute('data-id',`${student.id}`)
        for(let x in student){
        
           studentInfo.classList.add('student')
           const text = document.createElement('p');
           text.innerHTML = x+":"+student[x]
           studentInfo.appendChild(text);
         
        }
        const Dlt = document.createElement('button');
        Dlt.classList.add('DltBnt')
        Dlt.innerText="delete"
        studentInfo.appendChild(Dlt)
        info.appendChild(studentInfo)
    }
}








// <-------------------find----------------------->

// const findInp = document.querySelector('#inputSearch');
// const findbtn = document.querySelector('#search');
// const UserInfo = document.querySelector('#user')

// function findUser(){
//     let  newarr = JSON.parse(localStorage.getItem('students'))
//    let User =  newarr.find((element)=>{
//         return element.email==findInp.value;
//     })
//     for(let x in User){
//         const text = document.createElement('p');
//        text.innerHTML = x+":"+User[x]
//         UserInfo.appendChild(text)
//      }
// }