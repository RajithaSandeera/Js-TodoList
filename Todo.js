

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
                <input id="${todo.id}" type="checkbox"/>
                </div>
                <div class="col-6">
                <label for="${todo.id}" class="js-tick"></label>
                <span>${todo.text}</span>
                </div>
                <div class="col">
                <button class="btn"><i class="fa fa-close"></i></button>
                </div>
            </div>
            </div>
                
        `;
    


        const Ticklist = document.querySelector('#myList');
    
            
            x.addEventListener('click', event => {
             
            
                if(x.style.textDecoration != "line-through"){

                    x.style.textDecoration = "line-through"
                    todo.checked = true;
                }
                else{

                    x.style.textDecoration = "none" 
                }
               
          
                

         
        })

            
        x.addEventListener('dblclick', event => {
            console.log("prevoius trick works");

        
            if(todo.checked == true){

                addList.removeChild(x)
            }
            
                
    })





}