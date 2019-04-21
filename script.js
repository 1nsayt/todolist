let button = document.getElementById("btn");
let list = document.getElementById("list");
let taskText = document.getElementById("taskText");

button.onclick = function(){
   let el = document.createElement('li');
   let newText = taskText.value;
   let input = document.createElement("input");
    input.setAttribute("type","checkbox");
   let text = document.createTextNode(newText);
   
   input.onclick = function(){
       el.setAttribute("style", "text-decoration:line-through; opacity: 0.3");

       setTimeout(() => {
       el.remove();
    }, 1100);
   }

   el.appendChild(text);
   el.appendChild(input);
   list.appendChild(el);  
}
