'use stirct'
//로또 , 45개 숫자를 가진 array 생성, 거기서 랜덤하게 하나 픽 한후 저장, 중복x
const item = document.querySelector('.item');

const btn = document.getElementById('btn');

const randomNum = Array.from(Array(45).keys());
let arr = [];

//Array.prototype.keys() 는 배열의 인덱스 값을 키값으로 변환,0~45; 그래서 나중에 1빼줘야할듯?

const randomItem = function () {
    return randomNum[Math.floor(Math.random() * randomNum.length)] + 1
}


const btnNew = btn.addEventListener('click', function (e) {


    while (arr.length < 6) {
        const newItem = randomItem();
        if (arr.includes(newItem)) {


        } else {
            arr.push(newItem)
        }
    }
    

    item.innerHTML = arr.map(function (e) { return `<li>${e}</li>` }).join("");


    arr = [];

    //  arr.push(randomItem())


})

//
const itemNew = [];

