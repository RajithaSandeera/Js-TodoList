

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

if (arrayIsEmpty(todoItems)){

    console.log("empty");
    

    // let popup =  document.getElementById("warningStyle");
    // popup.classList.add("warningStyle");

    const list = document.getElementById("idWarning").classList;
    list.add("warningStyleShow");
    
    

}else{

    popup.classList.remove("warningStyleShow");
    document.getElementById("idWarning").style.visibility = "hidden";
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
                
                </div>
            </div>
            </div>
                
        `;
    
            
            x.addEventListener('click', event => {
             
            
                if(x.style.textDecoration != "line-through"){

                    x.style.textDecoration = "line-through"
                    todo.checked = true;
                    $message.info("You Successfully completed that Task");
                }
                else{

                    x.style.textDecoration = "none" 
                    todo.checked = false;
                   
                }
               
          
                

         
        })

            let removeBtn = document.getElementById("cct")   
            removeBtn.addEventListener('click', event => {
                if(todo.checked == true){

                    addList.removeChild(x)
                  
                    $message.success('Selected Tasked Cleared');
                }
            
                
    })
    document.getElementById("idWarning").style.visibility = "hidden";

            let removeAllBtn = document.getElementById("cat")   
            const Ticklist = document.querySelector('#myList');
            removeAllBtn.addEventListener('click', event => {
            console.log("prevoius trick works");

                addList.removeChild(x)
                document.getElementById("idWarning").style.visibility = "visible";
                $message.success('All Tasks Cleared');
                  
                  
        
        
           
})
}


function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        return FALSE;
    }
    //If it is an array, check its length property
    if (array.length == 0) {
        //Return TRUE if the array is empty
        return true;
    }
    //Otherwise, return FALSE.
    return false;
}