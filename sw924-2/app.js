//selectors
const body = document.getElementById('body')
const test = document.getElementById('demo');
// const test = document.querySelectorAll('.demo');
// test[1].innerText ="hello"


// style
//innerHTMl
//innerText
//node createElement
// const p = document.createElement('p')
// test[2].appendChild(p);
//onclick

// test[0].onclick = function(){
//     test[0].remove()
// }


test.addEventListener('mouseover',(event)=>{
    test.style.color="red"
    console.log(event.target);
    console.log(event.path[1]);
})






