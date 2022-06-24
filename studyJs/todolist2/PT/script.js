const store = document.querySelector(".store");

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
          

            if(input.value == "" || input.value == false)
            { return false} //
            else{
            const newItem = createEl(`<li data-value="${id}" class=""><div><input class="toggle" type ="checkbox"><label>${input.value}</label><button class="destroy"></button></div></li>`)
            input.value = ""; //value -> innerHTML.
            

            newItem.querySelector(".destroy").addEventListener('click',e=>{
                newItem.remove(); // newItem의 destroy를  어떻게 특정하나요 ..? newItem은 여러갠데.. e.target


            })

            newItem.querySelector(".toggle").addEventListener('click', e =>{
                e.target.closest
                
                newItem.classList.add("completed");

                
            

            })
            todoList.appendChild(newItem); // newItem apeend child;
            
        }

      



        
}})

    



    filltersBtn.forEach(function (el, index) {
        el.addEventListener('click', function (e) {
            switch (index) {
                case 0: // All 
                    break;
                case 1: // ACTIVE
                    break;
                case 2: // COMPLETED

                    todoList.innerHTML = "";
                    inputStore.forEach(function (data) {
                        const { id, text } = data;
                        console.log(data);

                        todoList.innerHTML = ` <li data-value="${id}"  class="completed">${input.value}</li>`
                    })
                    break;

            }
        })

    })
})()

/* */