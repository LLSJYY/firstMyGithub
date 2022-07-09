
/* 엔터 눌렀을때 delegation 이용 */
(function () {

  /* header class */
  const newTodo = document.querySelector(".new-todo");
  const todoStore = [];
  const innerTodo = function(e){
    todoList.innerHTML += `<li data-id="${e.id}" class="${e.completed ? "completed" : ""}"><div><input class="toggle" type="checkbox" ${e.completed ? "checked" : ""}><label>${e.text}</label><button class="destroy"></button></div></li>`
   } 
  const storage = function () { 
    localStorage.setItem('todos-vanillajs', JSON.stringify(todoStore)); 
  }
 
    const countItem = function () {
    const todoCount = document.querySelector(".todo-count");
    let count = 0;
    let a = "";
    document.querySelectorAll(".todo-list li:not(.completed)").forEach(e => { //not selector
      count++;
    })

    todoCount.innerHTML = `${count} ${count > 1 ? "items" : "item"} left`;
  }

  newTodo.addEventListener("keypress", e => {
    const id = Math.floor(Math.random() * 100000);

    if (e.keyCode === 13) { //선생님 여기에 공백( "" )을 치면 안넣고싶은데, if문 밖에 없나요 ??
     
      todoList.innerHTML += `<li data-id="${id}" class=""><div><input class="toggle" type="checkbox"><label>${newTodo.value}</label><button class="destroy"></button></div></li>`
      console.log(newTodo.value);

      todoStore.push({
        id,//왜 id : id 값이 바로 들어가나여..? // key ,value 동일한 이름
        text: newTodo.value,
        completed: false,
      })
      storage();
      // todoStore.push({id,}})
      newTodo.value = "";
      /** footer todo-count */
      
      countItem();
    } // 즉시 바뀌는거.. 제가 생각했을때, keypress/ toggle,destroy 이 3가지에 관련한 이벤트가 일어났을때 todoCount 가 수정되는데,관련 이벤트에 다 todoCount 함수를 만들어 줘야하나요 ? 이러면 좀 답답할거같습니다.



    // setItemwindow.localStorage.setItem('name', 'anna');
    // window.localStorage.setItem('age', '20');

    // 결과 출력document.write(name); // annadocument.write('<br/>');document.write(age);  // 20

  })


  /* todoList 에 이벤트 걸기 */
  const todoList = document.querySelector(".todo-list");
  const toggle = document.querySelector(".toggle");

  todoList.addEventListener("click", e => {
    if (e.target.tagName == "INPUT") { //TOGGLE을 눌렀을 때, li의 class + todoStore.completed 상태 변경
      const data = parseInt(e.target.closest("li").dataset.id);
      todoStore.forEach(e => {

        if (e.id == data) {
          e.completed = !e.completed;
        }

      })
      storage();
      e.target.closest("li").classList.contains("completed") ? e.target.closest("li").classList.remove("completed") : e.target.closest("li").classList.add("completed")

      // inputBox인데 왜 value. .?값이 아닌가여 ?
    } else if (e.target.tagName == "BUTTON") {
      e.target.closest("li").remove();
      console.dir(e.target);

    }

    countItem();
  })
  /** footer class */

  /** localstorage */
  const todoCount = document.querySelector(".todo-count");
  const filtersBtn = document.querySelectorAll(".filters a");
  const btnClear = document.querySelector(".clear-completed");

  btnClear.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
      todoList.querySelectorAll(".completed").forEach(e => {
        e.remove()
      });
    }
    countItem();
    todoStore();
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

      btnStore.forEach(e => {
        innerTodo(e);
        todoStore();
      })
    })
  })

  JSON.parse(localStorage.getItem("todos-vanillajs")).forEach(e =>{
    innerTodo(e);
    todoStore.push(e);
  })
  
  console.log(JSON.parse(localStorage.getItem("todos-vanillajs")));
  console.log(todoStore);
})()