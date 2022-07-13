const content = document.querySelector('#content');
const quantity = document.querySelector('.quantity');
const submit = document.querySelector(".submit");
const reset = document.querySelector('#reset');

const arrayNum = Array.from(Array(46).keys());

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  
  var chooser = randomNoRepeats(arrayNum);
  


function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}





function stringToElement(htmlStr) {
    const newEl = document.createElement('div');
    newEl.innerHTML = htmlStr;
    return newEl.firstChild;
}

const juggleNum = document.querySelector('.juggle').addEventListener('click', function () {
    document.querySelectorAll('.number').forEach(function (e) {
        e.innerHTML = chooser();
    })
});


//  randomNumber li 생성
submit.addEventListener('click', function (e) {
    for (let i = 0; i < parseInt(quantity.value); i++) {
        const newItemElement = stringToElement(`<li class="number"></li>`)
        content.appendChild(newItemElement);
    }
    quantity.value = "0";
    content.querySelectorAll('.number').forEach(function (e) {
        e.innerHTML ="";
    })
    
    reset.addEventListener('click', function (e) {
       
        content.querySelectorAll('.number').forEach(function (e) {
            e.remove();
        })
    
})
})
quantity.addEventListener('keypress', function (e) {

    if (e.keyCode == 13) {
        for (let i = 0; i < parseInt(quantity.value); i++) {
            const newItemElement = stringToElement(`<li class="number"></li>`)
            content.appendChild(newItemElement);
        }
        quantity.value = "0";

        reset.addEventListener('click', function (e) {
            content.querySelectorAll('.number').forEach(function (e) {
                e.remove();
            })


        }
        )
    }
}) //두개를 합치고 싶은데 어떻게 하는지 모르겠어요 ㅋㅋㅋ + remove누르면 한번에 다 지우고 싶습니다.

//


//1~45 --- 하는방법. array

