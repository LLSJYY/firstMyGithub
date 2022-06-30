
/* 엔터 눌렀을때 delegation 이용 */
(function () {

  /* header class */
  const newTodo = document.querySelector(".new-todo");
  const todoStore = [];

  newTodo.addEventListener("keypress", e => {
    const id = Math.floor(Math.random() * 100000);


    if (e.keyCode === 13) { //선생님 여기에 공백( "" )을 치면 안넣고싶은데, if문 밖에 없나요 ??

      todoList.innerHTML += `<li data-id="${id}" class=""><div><input class="toggle" type="checkbox"><label>${newTodo.value}</label><button class="destroy"></button></div></li>`
      console.log(newTodo.value);

      todoStore.push({
        id, //왜 id : id 값이 바로 들어가나여..?
        text: newTodo.value,
        completed: false,
      })
      console.log(todoStore);
      newTodo.value = "";
      /** footer todo-count */

      if (e.target.tagName == "INPUT") {
        document.querySelector(".todo-count").innerHTML = `${todoList.childElementCount} ${function () {
          if (todoList.childElementCount > 1) {
            return "items left"
          }
          else if (todoList.childElementCount == 1) {
            return "item left"
          }
        }()}`;
      }


    } // 즉시 바뀌는거.. 제가 생각했을때, keypress/ toggle,destroy 이 3가지에 관련한 이벤트가 일어났을때 todoCount 가 수정되는데,관련 이벤트에 다 todoCount 함수를 만들어 줘야하나요 ? 이러면 좀 답답할거같습니다.

  })





  /* todoList 에 이벤트 걸기 */
  const todoList = document.querySelector(".todo-list");
  const toggle = document.querySelector(".toggle");

  todoList.addEventListener("click", e => {

    if (e.target.tagName == "INPUT") {
      const data = parseInt(e.target.closest("li").dataset.id);
      todoStore.forEach(e => {
        
        if (e.id == data) {
          e.completed = !e.completed;
        }
      })

    




      e.target.closest("li").classList.contains("completed") ? e.target.closest("li").classList.remove("completed") : e.target.closest("li").classList.add("completed")



      // inputBox인데 왜 value. .?값이 아닌가여 ?
    } else if (e.target.tagName == "BUTTON") {
      e.target.closest("li").remove();
      console.dir(e.target);

    }
  })

  /** section class */








  /** footer class */

  const todoCount = document.querySelector(".todo-count");
  const filtersBtn = document.querySelectorAll(".filters a");
  const btnClear = document.querySelector(".clear-completed");

  btnClear.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
      todoList.querySelectorAll(".completed").forEach(e => {
        e.remove()
      });
    }
  })
  /** filterBtn (All,Active,Completed) */


  filtersBtn.forEach((el, index) => {
    el.addEventListener("click", function (e) {
      todoList.innerHTML = " ";
      let btnStore = [];

      switch (index) {
        case 0: //
          btnStore = todoStore;
          break;

        case 1:
          btnStore = todoStore.filter(el => {
            return !el.completed;
          })
          break;

        case 2:
          btnStore = todoStore.filter(el => {
            return el.completed;
          })
          break;
      }

      console.log(btnStore)

      btnStore.forEach(e =>{
        todoList.innerHTML +=  `<li data-id="${e.id}" class="${e.completed ? "completed" : ""}"><div><input class="toggle" type="checkbox" ${e.completed ? "checked" : ""}><label>${e.text}</label><button class="destroy"></button></div></li>`
      })
      

    })
  })



})()