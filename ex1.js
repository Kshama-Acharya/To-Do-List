const btn1=document.getElementById("Add");
btn1.addEventListener("click",add);
let inputBox = document.getElementById("input");

inputBox.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        add();
    }

});
function add(){
    let input = inputBox.value;
    if(input.trim()){
    document.getElementById("error").textContent="";
    inputBox.classList.remove("inputError");  

    let div=document.createElement("div");
    div.classList.add("ele");

    let tick=document.createElement("p");
    tick.innerHTML="⭕";
    div.appendChild(tick);

    let p=document.createElement("p");
    p.innerHTML=input;
    div.appendChild(p);

         
    let btn2=document.createElement("button");
    btn2.innerHTML="Complete";
    btn2.classList.add("completeBtn");
    div.appendChild(btn2);

     btn2.addEventListener("click",comp);
    function comp(event){
        event.target.classList.toggle("Completed");
        let complete=event.target.classList.contains("Completed");
        if(complete){
            event.target.innerHTML="Completed";
            tick.innerHTML="✅";
             p.classList.add("done");
        }
        else{
             event.target.innerHTML="Complete";
             p.classList.remove("done");
              tick.innerHTML="⭕";
        }
        
        
    }
    let btn3=document.createElement("button");
    btn3.innerHTML="Edit";
    btn3.classList.add("EditBtn");
    div.appendChild(btn3);
    btn3.addEventListener("click",Edit);
    function Edit(event){
            let newTask = prompt("Enter new task",p.innerHTML);
            if(newTask !== null && newTask.trim() !== ""){
            p.innerHTML = newTask;
            }
    }

    let btn1=document.createElement("button");
    btn1.innerHTML="Delete";
    btn1.classList.add("deleteBtn");
    div.appendChild(btn1);
     btn1.addEventListener("click",del);
    function del(event){
        div.remove();
    }
    
    document.getElementById("card").appendChild(div);
    inputBox.value = "";
    
}else{
  
    document.getElementById("error").textContent="Please enter a task!";
    document.getElementById("input").classList.add("inputError");
}
inputBox.focus();
}