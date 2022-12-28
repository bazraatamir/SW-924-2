const info = document.querySelector(".info");
// user object
let User = class {
    constructor(id,username,lastName,age,email){
        this.id = id
        this.username = username,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }
}

//hereglechid id olgono
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
// create element
function createTodo(){
    const lastName  = document.querySelector("#name");
    const firstName  = document.querySelector("#firstName");
    const age  = document.querySelector("#age");
    const email  = document.querySelector("#email");
    let id = getId();
  let Students = new                                User(id,firstName.value,lastName.value,age.value,email.value);
info.innerHTML+=`
<div>
    <div>
        <input readonly value="${Students.username}">
        <input readonly value="${Students.lastName}">
        <input readonly value="${Students.email}">

    </div>
    <div>
        <button data-id="${Students.id}" class="DltBnt">delete
        </button>
        <button class="EditBtn" >edit</button> 
    </div>
</div>
        `;
saveLocalStorage(Students)
//   const studentInfo = document.createElement('div');
//   studentInfo.setAttribute('data-id',`${Students.id}`)
//   for(let x in Students){
    
//     studentInfo.classList.add('student');
//     const text = document.createElement('p');
//     text.innerHTML = x+":"+Students[x];
//     studentInfo.appendChild(text);
  
//   }
//   const Dlt = document.createElement('button');
//   Dlt.classList.add('DltBnt')
//   Dlt.innerText="delete";
//   studentInfo.appendChild(Dlt)
//    info.appendChild(studentInfo);
   
}


//localStorage hadgalna
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
// hereglechiin medeeleliig ustagna delgetsen deerees mon localstorage deeerees
info.addEventListener('click',Delete)

function Delete(e){
    let studentsInfo = JSON.parse(localStorage.getItem('students'))
    let TargetElement = e.target;
    if(TargetElement.className =='DltBnt'){
        let deleteElement = e.path[1];
        let id = TargetElement.dataset.id;
        newarr =  studentsInfo.filter((el)=>{
            return el.id != id
        });
        localStorage.setItem('students',JSON.stringify(newarr))
        deleteElement.remove()
    }
}

info.addEventListener('click',Edit);

function Edit(e){
    let studentsInfo = JSON.parse(localStorage.getItem('students'));
    let TargetElement = e.target;
    if(TargetElement.className =='EditBtn'){
        let ParentElement = e.path[2];
        let child = ParentElement.children[0];
        let editElements = child.children;
        let lastValue= editElements[0].value
        editElements[0].removeAttribute('readonly');
        editElements[0].onblur=function(){
            editElements[0].setAttribute('readonly',"readonly");
        newId =  studentsInfo.findIndex((el)=>{
            return el.username == lastValue
        });
        studentsInfo[newId].username = editElements[0].value
        localStorage.setItem('students',JSON.stringify(studentsInfo))
        }
        editElements[1].removeAttribute('readonly')

   
        // deleteElement.remove()
    }
}

//localstorage deereh medeeleliig delegtsent haruulah vvregtei
function show(){
    let i =0;
    let  newarr = JSON.parse(localStorage.getItem('students'))
    for(i;i<newarr.length; i++){
        let student = newarr[i];
        info.innerHTML+=`<div>
        <div>
            <input  value="${student.username}" readonly> </input
            <input  value="${student.lastName}" readonly>
            <input  value="${student.email}" readonly>
    
        </div>
        <div>
            <button data-id="${student.id}" class="DltBnt">delete
            </button>
            <button class="EditBtn">edit</button> 
        </div>
           </div> `
        // const studentInfo = document.createElement('div');
        // studentInfo.setAttribute('data-id',`${student.id}`)
        // for(let x in student){
        
        //    studentInfo.classList.add('student')
        //    const text = document.createElement('p');
        //    text.innerHTML = x+":"+student[x]
        //    studentInfo.appendChild(text);
         
        // }
        // const Dlt = document.createElement('button');
        // Dlt.classList.add('DltBnt')
        // Dlt.innerText="delete"
        // studentInfo.appendChild(Dlt)
        // info.appendChild(studentInfo)
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