const divEl = document.querySelector(".rectangle");
const divEls = document.querySelectorAll(".rectangle")
const loseSet = document.querySelector(".loseSet");
const numBox = document.getElementById("numBox");
const win = "당첨!";
const lose = "꽝!";
let arr = [];
// divEl.forEach(function(e){
//     addEventListener('click',function(e){

//     })
// })

divEl.addEventListener('click', function (e) {
    console.log("aa");
})

document.getElementById("minus").addEventListener('click', function (e) {
    console.log('c')
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
   
    document.querySelectorAll(".resultVal").forEach(function (e) {
        e.remove()
    }); //초기화
    const loserNum =  parseInt(numBox.value);

    const randomNum = function () { return Math.floor(Math.random() * 5) + 1 };

    //const newNum = randomNum(); 여기다가 걸리면 무한루프걸림 왜냐면 게속 인클루드 되니까.

    while (arr.length < parseInt(numBox.value)) {
        const newNum = randomNum();

        if (arr.includes(newNum)) {

        } else {
            arr.push(newNum);
        }
    }
 
/*
0 4 
1 1 
2 5 
3 
4 

0 꽝 1
1    2  
2    3
3 꽝 4
4 꽝 5

arr = [4,1,5]; ...


*/


    for (let i = 0; i < 5; i++) {
        if (arr.includes(i+1)) { //값이 존재하면 꽝이다. 배열에 그값이 있으면 include
            document.querySelector('.rectangles').children[i].innerHTML = `<p class="resultVal">${lose}</p>`;
            console.log("꽝");
        } else {
            document.querySelector('.rectangles').children[i].innerHTML = `<p class="resultVal">${win}</p>`;
            console.log("당첨")
        }

    }
    arr = [];

// 

});

document.getElementById('resultBtn').addEventListener('click', function (e) {
    document.querySelectorAll(".resultVal").forEach(function (e) {
        e.classList.add("display")
    });
})

function stringToElement(htmlStr) {
    const divCreate = document.createElement('div');
    innerHtml = ``

    return htmlStr.firstChild()
}


// document.querySelectorAll(".rectangle").forEach(function (e) {
//     e.addEventListener('click', function () { //click 
//         e.querySelector('.resultVal').classList.add("display");
//     })
// })

// })        click div resultVal -> css 속성을 넣고 classList 


document.querySelectorAll(".rectangle").forEach(function (e) {
    e.addEventListener('click', function () { //click 
        e.classList.add("display");
    })
}) //gd
