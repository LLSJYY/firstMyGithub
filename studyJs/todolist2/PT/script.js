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
                const newItem = createEl(`<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
                input.value = ""; //value -> innerHTML.


                newItem.querySelector(".destroy").addEventListener('click', e => {
                    newItem.remove(); // newItem의 destroy를  어떻게 특정하나요 ..? newItem은 여러갠데.. e.target


                })




                todoList.appendChild(newItem); // newItem apeend child; 

            }

            toggle();
            // filterBtn();
            //






        }



    })




    // 






    const toggle = function () {
        document.querySelectorAll('.toggle').forEach(function (

        ) {
            addEventListener('click', function (e) { //왜 label 도 클릭이벤트가 걸리나요 ?...........
                console.log(e.target);  
                // if (document.querySelector('li').classList.contains("completed")) {
                //     document.querySelector('li').classList.remove("completed");

                // } else {
                //     document.querySelector('li').classList.add("completed")


                // }// completed 가 없다면 붙여주기

                const idValue = parseInt(e.target.closest("li").dataset.value); // 체크박스 에 체크된 id값
                console.log(idValue) /
                const todoCount = document.querySelector(".todo-count");


                inputStore.forEach(function (el) {
                    if (el.id === idValue) {
                        if (e.target.closest("li").classList.contains("completed")) {
                            console.log(e.target.closest("li"))
                            e.target.closest("li").classList.remove("completed")
                        } else {
                            e.target.closest("li").classList.add("completed")
                        }

                    }

                })

                let todoCountStore = inputStore.filter(function (data) {
                    return data.completed;
                }).length; // 




                todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update




                if (todoCountStore > 0) {
                    return clearCompleted.style.display = "block";
                    console.log(todoCountStore);
                } clearCompleted.style.display = "none"; // completed 수정

            })
        }
        )
    }

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