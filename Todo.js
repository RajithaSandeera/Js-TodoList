

let todoItems = [];

addTodoList =(text)=>{

        const todo={

            text,
            checked:false,
            id: Date.now()
        }

        todoItems.push(todo);
        renderTodo(todo);
        console.log(todoItems);

}

let btn = document.getElementById("saveBtn")
 btn.addEventListener('click', show=>{

  

    show.preventDefault();

    const inputField = document.getElementById("todoId");

    const text = inputField.value.trim();


    if(text !== ''){

        addTodoList(text);
        inputField.value = "";
        inputField.focus();
    }
    inputField.value = "";
 })


 renderTodo =(todo) =>{

        console.log("rendering")
        const list = document.getElementById('todoId')

        const isChecked = todo.checked ? 'done' : '';
        
        var x = document.createElement("LI");
        
       let addList= document.getElementById("myList");  
        addList.appendChild(x);
  

        x.innerHTML =
        `
        
       
        
      
            <div class="container">
            <div class="row">
                <div class="js-tick col" id="myList">
             
                </div>
                <div class="col-6">
                <label for="${todo.id}" class="js-tick"></label>
                <span>${todo.text}</span>
                </div>
                <div class="col">
                
                </div>
            </div>
            </div>
                
        `;
    


        const Ticklist = document.querySelector('#myList');
    
            
            x.addEventListener('click', event => {
             
                x.style.textDecoration = "line-through";
                

         
        })

            
        x.addEventListener('dblclick', event => {
            console.log("prevoius trick works");

            if(x.style.textDecoration="line-through"){

                addList.removeChild(x)
            }
            
                
    })


}