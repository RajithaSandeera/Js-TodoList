

// todo =()=>{

//     console.log("saving");
// }
// document.getElementById("saveBtn").addEventListener('click',todo)


let todoItems = [];

addTodoList =(text)=>{

        const todo={

            text,
            checked:false,
            id: Date.now()
        }

        todoItems.push(todo);
        console.log(todoItems);

}

let btn = document.getElementById("saveBtn")
 btn.addEventListener('click', show=>{

    console.log("working")
    show.preventDefault();

    const todoText = document.getElementById("todoId");

    const text = todoText.value.trim();

    if(text !== ''){

        addTodoList(text);
        todoText.value = ''
        todoText.focus();
    }
 })