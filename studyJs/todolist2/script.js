
const store = document.querySelector(".store");

/* input Box */
(function () {
    // const input = document.querySelector(".new-todo");
    const input = document.querySelector(".new-todo");
    const todoList = document.querySelector(".todo-list");
    const filltersBtn = document.querySelectorAll('.filters a');

    const inputStore = [];
    const btnDestroy = document.querySelector('.destroy')

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
            console.log(inputStore)
            const newCreateEl = createEl(`<li class=""data-value="${id}"><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
            input.value = ""; //value -> innerHTML.
            // store.innerHTML += `<li>${id}</li>`



            newCreateEl.querySelector(".destroy").addEventListener('click', e => {
                newCreateEl.remove()
            }

            );



            newCreateEl.querySelector('.toggle').addEventListener('click', e => {
                
                if(newCreateEl.classList.contains("completed")){
                    newCreateEl.classList.remove("completed");
                    
                }else {
                    newCreateEl.classList.add("completed")
                }// completed 가 없다면 붙여주기

                const idValue = parseInt(e.target.closest("li").dataset.value) // 체크박스 에 체크된 id값
                

                inputStore.forEach(function (el) {
                    if (el.id === idValue) {
                        el.completed = !el.completed;  //  falsy /truthy !
                    }
                })

                console.log(inputStore)
            }
            )


            store.innerHTML += id;
            todoList.appendChild(newCreateEl)

        }







    })





    filltersBtn.forEach(function (el, index) {
        el.addEventListener('click', function (e) {
            // const newCreateEl = createEl(`<li class=""data-value="${id}"><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
            switch (index) {
                case 0: // All 
                    break;
                case 1: // ACTIVE
                    break;
                case 2: // COMPLETED

                    todoList.innerHTML = "";

                    inputStore.forEach(function (el) {
                        if (el.completed == true) {
                            todoList.innerHTML += `<li class="c ompleted" data-value="${el.id}"><div><input class="toggle" type ="checkbox" checked><label>${el.text}</label><button class="destroy"></button></div></li>`
                            // ` <li data-value="${el.id}" class="${el.completed}">${el.te}</li>`
                            // `<input type="toggle" ${el.completed && "checked" }}  
                        }
                    })

                    break;

            }
        })

    })
})()
