
let f;

const closure = function(){
    const a = 1;
    f = function(){
        console.log(a * 2 )
    }
}


closure();
f()