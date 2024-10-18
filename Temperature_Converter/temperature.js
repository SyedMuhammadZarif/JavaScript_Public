let fbtn = document.getElementById(`F_button`);
let cbtn = document.getElementById(`C_button`);
let rstbtn = document.getElementById(`reset`);
let inputbox = document.getElementById(`tempinput`);
let outputbox = document.getElementById(`outputbox`);

fbtn.onclick = function(){
    if(inputbox.value!=''){
        outputbox.textContent = `${(inputbox.value *9/5)+(32)}°F`;
    }
    else{
        window.alert(`Enter temperature first!`)
    }
}

cbtn.onclick = function(){
    if(inputbox.value!=''){
        outputbox.textContent = `${(inputbox.value-32)*(5/9)}°C`;
    }
    else{
        window.alert(`Enter temperature first!`)
    }
}


rstbtn.onclick = function(){
    inputbox.value = ``;
    outputbox.textContent=`Awaiting Input!`;
}
