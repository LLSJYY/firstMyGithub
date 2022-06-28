const store = document.querySelector(".store");
const clearCompleted = document.querySelector(".clear-completed");
clearCompleted.style.display = "none";
const filltersBtn = document.querySelectorAll('.filters a');
/* input Box */
(function () {

    // const input = document.querySelector(".new-todo");
    const input = document.querySelector(".new-todo");
    const todoList = document.querySelector(".todo-list");


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
                const newCreateEl = createEl(`<li class=""data-value="${id}"><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
                input.value = ""; //value -> innerHTML.
                // store.innerHTML += `<li>${id}</li>`
                if (input.value == "" || input.value == false) { return false } //
                else {
                    const newItem = createEl(`<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
                    input.value = ""; //value -> innerHTML.
                    newItem.querySelector(".destroy").addEventListener('click', e => {
                        newItem.remove(); // newItem의 destroy를  어떻게 특정하나요 ..? newItem은 여러갠데.. e.target
                    })
                    todoList.appendChild(newItem); // newItem apeend child; 
                    newCreateEl.querySelector(".destroy").addEventListener('click', e => {
                        newCreateEl.remove()
                    }
                    );
                    newCreateEl.querySelector('.toggle').addEventListener('click', e => {
                        if (newCreateEl.classList.contains("completed")) {
                            newCreateEl.classList.remove("completed");
                        } else {
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
                }
                todoList.appendChild(newCreateEl)
                todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update
                if (todoCountStore > 0) {
                    return clearCompleted.style.display = "block";
                    console.log(todoCountStore);
                } clearCompleted.style.display = "none"; // completed 수정
            }
        }

    })

// const filterBtn = function () {
//     filltersBtn.forEach(function (el, index) {
//         el.addEventListener('click', function (e) {

//             switch (index) {
//                 case 0: // All 
//                     break;
//                 case 1: // ACTIVE
//                     break;
//                 case 2: // COMPLETED

//                     todoList.innerHTML = "";

//                     inputStore.filter(function (data) {
//                         return data.completed;
//                     }).forEach(function (data) {
//                         const { id, text, completed } = data;

//                         console.log(data);
//                         todoList.innerHTML += `<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox" checked><label>${text}</label><button class="destroy"></button></div></li>` // completed 버튼을 눌렀을때, Completed = true로 나오게 하고싶은데 방법이 없을까요. 제일 단순하게 그냥 co
//                         // restoreItem.querySelector(".completed").checked == true; 이렇게 하면 input 태그가 아니니까 안붙나여 ?



// inputStore.forEach(function (el) {
//         console.log(el)
//         if (el.completed == true) {
//             todoList.innerHTML += `<li class="c ompleted" data-value="${el.id}"><div><input class="toggle" type ="checkbox" checked><label>${el.text}</label><button class="destroy"></button></div></li>`
//             // ` <li data-value="${el.id}" class="${el.completed}">${el.te}</li>`
//             // `<input type="toggle" ${el.completed && "checked" }}  
//         }
//     })

    //                     })

    //                     document.querySelectorAll('.toggle').forEach((e) => {
    //                         e.checked == false;  // 이러면 li Dml zm
    //                     })
    //                     break;

    //             }
    //         })

    //     })
    // }
})()




/* */