const divEl = document.querySelector(".rectangle");
const loseSet = document.querySelector(".loseSet");
const numBox = document.getElementById("numBox");
const win = "당첨!";
const lose = "꽝!";

// divEl.forEach(function(e){
//     addEventListener('click',function(e){

//     })
// })

divEl.addEventListener('click', function (e) {
    console.log("aa");
})

document.getElementById("minus").addEventListener('click', function (e) {
    if (parseInt(numBox.value) <= 1) {

    } else {
        numBox.value = parseInt(numBox.value) - 1;
    }
})

document.getElementById("plus").addEventListener('click', function (e) {
    if (parseInt(numBox.value) >= document.querySelector(".rectangles").childElementCount) {

    }
    else {
        numBox.value = parseInt(numBox.value) + 1;
    }

})


document.getElementById("startBtn").addEventListener('click', function (e) {
    let count =parseInt(numBox.value);
    document.querySelectorAll(".rectangle").forEach(function (e) {
     
        if (count > 0) {
            e.innerText = lose;
           count--;
        }else{ 
        e.innerHTML = win;}
    })
});