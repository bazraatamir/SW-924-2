
window.addEventListener('load',()=>{
    let users = JSON.parse(localStorage.getItem('students'));
    let user = users.find((element)=>{
      return  element.vaild == true
    });
    console.log(user)
    const username = document.querySelector('#user')
    username.innerText =`${user.username}` 
    let posts =JSON.parse(localStorage.getItem('posts'))
    posts.forEach(element => {
      const image = document.createElement('img');
      let url = user.image
    image.src =url ;
     const body = document.querySelector('body');
     body.appendChild(image)
    });
    
});

