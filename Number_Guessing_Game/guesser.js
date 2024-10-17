let start = false;
let tries=0;
let ans;   



document.getElementById(`StartGame`).onclick = function r(){
        
    let min = document.getElementById(`min`).value;
    min = Number(min);
    console.log(min);
    let max = document.getElementById(`max`).value;
    max = Number(max);

    ans = Math.floor(Math.random()*(max-min)+min);
    if(min!='' && max!=''){

    
    start = true;
    tries = 1;}
    else{
        document.getElementById(`ans`).textContent=`Enter both the numbers to start the game!!`;
        document.getElementById(`StartGame`).onclick = function(){
        r();
    }
}

    if(start){
        document.getElementById(`ans`).textContent=`Awaiting your answer!`;
    
    document.getElementById(`guessSubmit`).onclick = function(){
        console.log('this runs')
        

    
        if(!start){

            document.getElementById(`ans`).textContent = `Check if the game has been started!`;

        };
            let guess = document.getElementById(`guessNumber`).value;
    
            if(guess>ans){
                document.getElementById(`ans`).textContent= `Your answer is too big!` ;
                tries++;
            }
                
            else if(guess<ans){
                document.getElementById(`ans`).textContent= `Your answer is too small!`;
                tries++;
            }
            else{
                start = false;
                document.getElementById(`ans`).textContent = `You guessed it right! The answer is ${ans}!\nNumber of tries: ${tries}!`;
            }
    }
    document.getElementById(`reset`).onclick = function(){
        document.getElementById(`min`).value = ``;
        document.getElementById(`max`).value = ``;
        document.getElementById(`ans`).textContent=`Awaiting start!`;
        document.getElementById(`guessNumber`).value = "";
        r();
    ;
    }
}




}
    
    
        

    




