let buttons = document.querySelectorAll("button");
let inputSpace = document.querySelector(".inputSpace")

var string = '';
var arr = Array.from(buttons);

arr.forEach(button => {
button.addEventListener('click', (e) => {
    if(e.target.innerHTML == "="){
        string = eval(string);
        inputSpace.value = string;
    }
    else if ( e.target.innerHTML == "AC"){
        string = '';
        inputSpace.value = string;
    }

    else if ( e.target.innerHTML == "DEL"){
        string = string.substring(0,string.length-1);
        inputSpace.value = string;
    }

    else{
       string += e.target.innerHTML;
       inputSpace.value = string; 
    }
})
})