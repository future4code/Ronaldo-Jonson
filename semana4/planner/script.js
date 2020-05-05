var checkbox = document.getElementsByClassName("box");
var lists = document.getElementsByClassName("items");
var button = document.getElementById("submit-button");

var input;

button.onclick = AddTask;


function AddTask(){
    input = document.getElementById("input-text").value;
    for(let i =0; i <checkbox.length; i++)
    {
        if(checkbox[i].checked){
            lists[i].innerHTML += `<p>${input}</p>`;
        }
    }
}


