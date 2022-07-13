const content = document.querySelector('.content');
const arrayNum = Array.from(Array(45).keys());
const quantity = document.querySelector('.quantity');
const submit = document.querySelector(".submit");
const newItemElement = "<li></li>"    

const randomNum = function () {
    const x = Math.floor(Math.random() * arrayNum.length+1);
    return x;     
}

function stringToElement(htmlStr){
    const newEl = document.createElement('div');
    newEl.innerHTML = htmlstr;
    return newEl.firstChild;
}
//내가 왜 파스인트를 하려고 하느냐.. li 갯수를 만들으려고
submit.addEventListener('click',function(e){
    for(let i =0;i<parseInt(quantity.value);i++){
        content.appendChild(newItemElement);    
        console.log("li")
        }
    
})
quantity.addEventListener('keypress',function(e){
    if(e.keyCode==13){
        console.log(quantity.value)
        }    
}) //두개를 합치고 싶은데 어떻게 하는지 모르겠어요 ㅋㅋㅋ



//1~45