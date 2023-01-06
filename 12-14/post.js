
  


class post{
    constructor(postId,userId,titel,image){
        this.postId=postId,
        this.userId= userId,
        this.titel = titel,
        this.image = image
    }
}
const titel = document.querySelector('#titel');
const image = document.querySelector('#image')
const Post = document.querySelector('#post');

let posts = []
Post.addEventListener('click',()=>{
    let users = JSON.parse(localStorage.getItem('students'));
    user = users.find((element)=>{
     return  element.vaild == true
   });

    const newPost = new post(1,user.id,titel.value, image.value)
    posts.push(newPost)
    localStorage.setItem('posts',JSON.stringify(posts))
})