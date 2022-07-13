
let f;

const closure = function(){
    const a = 1;
    f = function(){
        console.log(a * 2 )
    }
}

(function(){
 const header = document.querySelector('h1').style.color = "red"
 

 document.querySelector("body").addEventListener('click',function(e){
    header.style.color = "blue";
 })
})();




