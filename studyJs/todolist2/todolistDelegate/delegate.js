
/* 엔터 눌렀을때 delegation 이용 */
(function () {

  /* keyPress */
  const newTodo = document.querySelector(".new-todo");
  newTodo.addEventListener("keypress", e => {

    if (e.keyCode === 13) { //선생님 여기에 공백( "" )을 치면 안넣고싶은데, if문 밖에 없나요 ??
      todoList.innerHTML += `<li data-id="" class=""><div><input class="toggle" type="checkbox"><label>${newTodo.value}</label><button class="destroy"></button></div></li>`
      console.log(newTodo.value);
      newTodo.value = "";
      /** footer todo-count */
      
      if (e.target.tagName == "INPUT") {
        document.querySelector(".todo-count").innerHTML = `${todoList.childElementCount} ${function () { if (todoList.childElementCount > 1){
        return "items left" }
      else if(todoList.childElementCount == 1){
        return "item left"
      }}()}`;

      }
    }



  })

  /* todoList 에 이벤트 걸기 */
  const todoList = document.querySelector(".todo-list");
  const toggle = document.querySelector(".toggle");

  todoList.addEventListener("click", e => {
    if (e.target.tagName == "INPUT") { //e는 clickenvent

      e.target.closest("li").classList.contains("completed") ? e.target.closest("li").classList.remove("completed") : e.target.closest("li").classList.add("completed");
    } else if (e.target.tagName == "BUTTON") {
      e.target.closest("li").remove();
      console.dir(e.target);

    }
  })

  /** footerClass */
  const todoCount = document.querySelector(".todo-count");
  const filters = document.querySelector(".filters");
  const btnClear = document.querySelector(".clear-completed");

  btnClear.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
      todoList.querySelectorAll(".completed").forEach(e => {
        e.remove()
      });
    }
  })

  const todoCountEl = function () {

  }




})()