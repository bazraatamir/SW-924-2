const lastName  = document.querySelector("#name");
const firstName  = document.querySelector("#firstName");
const age  = document.querySelector("#age");
const email  = document.querySelector("#email");


let arr = []

function changeText(){
    const lastName  = document.querySelector("#name");
    const firstName  = document.querySelector("#firstName");
    const age  = document.querySelector("#age");
    const email  = document.querySelector("#email");
    let student = {
        firstName:firstName.value,
        lastName:lastName.value,
        age:age.value,
        email:email.value
    }
    arr.push(student)
    return student
}
