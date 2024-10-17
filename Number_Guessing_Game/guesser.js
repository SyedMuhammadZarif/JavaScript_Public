let start = false;
let tries=0;
let ans;   

let startbutton = document.getElementById(`StartGame`);
let resetbutton = document.getElementById(`reset`);
let ansfield = document.getElementById(`ans`);
let minfield = document.getElementById(`min`);
let maxfield = document.getElementById(`max`);

startbutton.onclick = function r(){
        
    let min = minfield.value;
    min = Number(min);
    console.log(min);
    let max = maxfield.value;
    max = Number(max);

    ans = Math.floor(Math.random()*(max-min)+min);
    if(min!='' && max!=''){

    
    start = true;
    tries = 1;}
    else{
        ansfield.textContent=`Enter both the numbers to start the game!!`;
        startbutton.onclick = function(){
        r();
    }
}

    if(start){
        ansfield.textContent=`Awaiting your answer!`;
    
    document.getElementById(`guessSubmit`).onclick = function(){
        console.log('this runs')
        

    
        if(!start){

            ansfield.textContent = `Check if the game has been started!`;

        };
            let guess = document.getElementById(`guessNumber`).value;
    
            if(guess>ans){
                ansfield.textContent= `Your answer is too big!` ;
                tries++;
            }
                
            else if(guess<ans){
                ansfield.textContent= `Your answer is too small!`;
                tries++;
            }
            else{
                start = false;
                ansfield.textContent = `You guessed it right! The answer is ${ans}!\nNumber of tries: ${tries}!`;
            }
    }
    resetbutton.onclick = function(){
        minfield.value = ``;
        maxfield.value = ``;
        ansfield.textContent=`Awaiting start!`;
        document.getElementById(`guessNumber`).value = "";
        r();
    ;
    }
}




}
    
    
        

    




