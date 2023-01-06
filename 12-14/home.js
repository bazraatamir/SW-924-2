
window.addEventListener('load',()=>{
    let users = JSON.parse(localStorage.getItem('students'));
    let user = users.find((element)=>{
      return  element.vaild == true
    });
    console.log(user)
    const username = document.querySelector('#user')
    username.innerText =`${user.username}` 
});

