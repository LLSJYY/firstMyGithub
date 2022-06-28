const store = document.querySelector(".store");
const clearCompleted = document.querySelector(".clear-completed");
clearCompleted.style.display = "none";
/* input Box */
(function () {
   
    // const input = document.querySelector(".new-todo");
    const input = document.querySelector(".new-todo");
    const todoList = document.querySelector(".todo-list");
    const filltersBtn = document.querySelectorAll('.filters a');

    const inputStore = [];

    function createEl(html) {
        const div = document.createElement('div');
        div.innerHTML = html
        return div.firstChild;
    }


    input.addEventListener('keypress', function (e) {

        if (e.keyCode === 13) {

            console.log(input.value);

            var id = Math.floor(Math.random() * 99999999);

            inputStore.push({
                id,
                text: input.value,
                completed: false,

            })


            if (input.value == "" || input.value == false) { return false } //
            else {
                const newItem = createEl(`<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
                input.value = ""; //value -> innerHTML.


                newItem.querySelector(".destroy").addEventListener('click', e => {
                    newItem.remove(); // newItem의 destroy를  어떻게 특정하나요 ..? newItem은 여러갠데.. e.target


                })



                newItem.querySelector('.toggle').addEventListener('click', e => {

                    if (newItem.classList.contains("completed")) {
                        newItem.classList.remove("completed");

                    } else {
                        newItem.classList.add("completed")
                    }// completed 가 없다면 붙여주기

                    const idValue = parseInt(e.target.closest("li").dataset.value); // 체크박스 에 체크된 id값
                    const todoCount = document.querySelector(".todo-count");


                    inputStore.forEach(function (el) {
                        if (el.id === idValue) {
                            el.completed = !el.completed;  //  falsy /truthy !

                        }

                    })
                    let todoCountStore = inputStore.filter(function (data) {
                        return data.completed;
                    }).length; // 

                    todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update


                    console.log(todoCountStore);
                    console.log(inputStore)
                    if(todoCountStore > 0){
                      return clearCompleted.style.display = "block";
                        console.log(todoCountStore);
                    } clearCompleted.style.display = "none"; // completed 수정

                 
                })
                todoList.appendChild(newItem); // newItem apeend child; 

            }






        }
    })
    // 




    filltersBtn.forEach(function (el, index) {
        el.addEventListener('click', function (e) {
            switch (index) {
                case 0: // All 
                    break;
                case 1: // ACTIVE
                    break;
                case 2: // COMPLETED

                    todoList.innerHTML = "";

                    inputStore.filter(function (data) {
                        return data.completed;
                    }).forEach(function (data) {
                        const { id, text } = data;

                        console.log(data);
                        todoList.innerHTML = `<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox"><label>${text}</label><button class="destroy"></button></div></li>`
                    })

                    todoList.appendChild(newItem);
                    break;

            }
        })

    })
})()

/* */