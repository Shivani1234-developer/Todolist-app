let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
function Add()
{
    if(inputs.value=="")
    {
        alert("Please Enter a Task");
    }
    else{
        let newele=document.createElement("ul");
        newele.innerHTML = `${inputs.value}  <i class="fa fa-trash" aria-hidden="true"></i>`;

        text.appendChild(newele);
        inputs.value="";
        newele.querySelector("i").addEventListener("click",remove);
        function remove()
        {
            newele.remove();
        }
    }
}