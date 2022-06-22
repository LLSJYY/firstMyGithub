
/* input Box */
(function () {
    // const input = document.querySelector(".new-todo");
    let input = document.querySelector(".new-todo");
    const todoList = document.querySelector(".todo-list")
    
    input.addEventListener('keypress', function (e) {
     
        if (e.keyCode === 13) {

            console.log(input.value);
        }
        todoList.innerHTML += `<li>${input.value}</li>`
        input = "";
    })

})()


/* */