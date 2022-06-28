const store = document.querySelector(".store");
const clearCompleted = document.querySelector(".clear-completed");
clearCompleted.style.display = "none";
/* input Box */
(function () {

  // const input = document.querySelector(".new-todo");
  const input = document.querySelector(".new-todo");
  const todoList = document.querySelector(".todo-list");
  const filltersBtn = document.querySelectorAll('.filters a');

  let inputStore = [];

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

          // completed 가 없다면 붙여주기

          const idValue = parseInt(e.target.closest("li").dataset.value); // 체크박스 에 체크된 id값
          const todoCount = document.querySelector(".todo-count");


          inputStore.forEach(function (el) {
            if (el.id === idValue) {
              el.completed = !el.completed;  //  falsy /truthy !
              if (newItem.classList.contains("completed")) {
                newItem.classList.remove("completed");


              } else {
                newItem.classList.add("completed")


              }
            }

          })
          let todoCountStore = inputStore.filter(function (data) {
            return !data.completed;
          }).length; // 

          todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update


          console.log(todoCountStore);
          console.log(inputStore)
          if (todoCountStore > 0) {
            return clearCompleted.style.display = "block";
            console.log(todoCountStore);
          } clearCompleted.style.display = "none"; // completed 수정


        })
        todoList.appendChild(newItem); // newItem apeend child; 




      }

      filltersBtn.forEach(function (el, index) {
        el.addEventListener('click', function (e) {
          switch (index) {
            case 0: // All 이게 제일어려워요;

              todoList.innerHTML = ""; // todolist 초기화..




              inputStore.forEach(function (data) {
                const { id, text ,completed } = data
                const completedBtn = createEl(`<li data-value="${id}" class="${completed ? "completed" : ""}"><div><input class="toggle" type ="checkbox" ${completed ? "checked" : ""} ><label>${text}</label><button class="destroy"></button></div></li>`)

                completedBtn.querySelector('.toggle').addEventListener('click', e => {

                  // completed 가 없다면 붙여주기

                  const idValue = parseInt(e.target.closest("li").dataset.value); // 체크박스 에 체크된 id값
                  const todoCount = document.querySelector(".todo-count");


                  inputStore.forEach(function (el) {
                    if (el.id === idValue) {
                      el.completed = !el.completed;  //  falsy /truthy !
                      if (completedBtn.classList.contains("completed")) {
                        completedBtn.classList.remove("completed");


                      } else {
                        completedBtn.classList.add("completed")


                      }
                    }

                  })
                  let todoCountStore = inputStore.filter(function (data) {
                    return !data.completed;
                  }).length; // 

                  todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update


                  console.log(todoCountStore);
                  console.log(inputStore)
                  if (todoCountStore > 0) {
                    return clearCompleted.style.display = "block";
                    console.log(todoCountStore);
                  } clearCompleted.style.display = "none"; // completed 수정


                })
                todoList.appendChild(completedBtn);

              })
              /*
              todoList.querySelectorAll('.toggle').forEach(function (e, key) { //4개 inputstore = todolist
                if (inputStore[key].completed) { //toggle index 이랑 1:1
                  e.checked = true
                }else{
                  e.checked = false; //들여쓰기..
                } // 리팩토링  
                e.checked = inputStore[key].completed;
                 
              })
              */
              break;
            case 1: // ACTIVE
              todoList.innerHTML = ""; // todolist 초기화..

              let activeInputStore = inputStore.filter(function (data) {

                return !data.completed;



              });

              console.log(activeInputStore)
              activeInputStore.forEach(function (data) {
                const { id, text } = data
                const activeBtn = createEl(`<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox"><label>${text}</label><button class="destroy"></button></div></li>`)


                activeBtn.querySelector('.toggle').addEventListener('click', e => {

                  // completed 가 없다면 붙여주기

                  const idValue = parseInt(e.target.closest("li").dataset.value); // 체크박스 에 체크된 id값
                  const todoCount = document.querySelector(".todo-count");


                  activeInputStore.forEach(function (el) {
                    if (el.id === idValue) {
                      el.completed = !el.completed;  //  falsy /truthy !
                      if (activeBtn.classList.contains("completed")) {
                        activeBtn.classList.remove("completed");


                      } else {
                        activeBtn.classList.add("completed")


                      }
                    }

                  })
                  let todoCountStore = activeInputStore.filter(function (data) {
                    return !data.completed;
                  }).length; // 

                  todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update


                  console.log(todoCountStore);
                  console.log(activeInputStore)
                  if (todoCountStore > 0) {
                    return clearCompleted.style.display = "block";
                    console.log(todoCountStore);
                  } clearCompleted.style.display = "none"; // completed 수정


                })
                todoList.appendChild(activeBtn);

              })

              todoList.querySelectorAll('.toggle').forEach(function (e) {
                e.checked = false;
              })

              break;
            case 2: // COMPLETED


              todoList.innerHTML = ""; // todolist 초기화..

              let completedInputStore = inputStore.filter(function (data) {

                return data.completed;



              });

              console.log(completedInputStore)
              completedInputStore.forEach(function (data) {
                const { id, text } = data
                const completedBtn = createEl(`<li data-value="${id}" class="completed"><div><input class="toggle" type ="checkbox"><label>${text}</label><button class="destroy"></button></div></li>`)


                completedBtn.querySelector('.toggle').addEventListener('click', e => {

                  // completed 가 없다면 붙여주기

                  const idValue = parseInt(e.target.closest("li").dataset.value); // 체크박스 에 체크된 id값
                  const todoCount = document.querySelector(".todo-count");


                  completedInputStore.forEach(function (el) {
                    if (el.id === idValue) {
                      el.completed = !el.completed;  //  falsy /truthy !
                      if (completedBtn.classList.contains("completed")) {
                        completedBtn.classList.remove("completed");


                      } else {
                        completedBtn.classList.add("completed")


                      }
                    }

                  })
                  let todoCountStore = completedInputStore.filter(function (data) {
                    return !data.completed;
                  }).length; // 

                  todoCount.innerHTML = `<strong>${todoCountStore}</strong> items left` // todoCount update


                  console.log(todoCountStore);
                  console.log(completedInputStore)
                  if (todoCountStore > 0) {
                    return clearCompleted.style.display = "block";
                    console.log(todoCountStore);
                  } clearCompleted.style.display = "none"; // completed 수정


                })
                todoList.appendChild(completedBtn);

              })

              todoList.querySelectorAll('.toggle').forEach(function (e) {
                e.checked = true;
              }) //선생님 저이렇게 하기싫어요.





              //itemStore 을 여기서 한번 초기화 했는데, 그다음부터 toggle,이런게 안먹혀요..


              break;

          }
        })

      })






    }
  })
  // 


  clearCompleted.addEventListener('click', function (e) {
    todoList.innerHTML = ""
  })

})()

/* */
