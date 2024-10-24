let watch = document.getElementById(`clock`);
let startbutton = document.getElementById(`start`)
let stopbutton = document.getElementById(`stop`)
let resetbutton = document.getElementById(`reset`)

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let running = false;


function start(){
    if(!running){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(update,10)
        running = true;
    }

}
function stop(){
    running = false;
    clearInterval(timer)
    
}
function reset(){
    watch.textContent = "00:00:00:00"
    startTime = Date.now()
}

function update(){
    
    const current_time = Date.now();
    elapsedTime = current_time-startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60)).toString().padStart(2,0);
    let minutes = Math.floor(elapsedTime/(1000*60)%60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime/(1000)%60).toString().padStart(2,0);
    let milliseconds = Math.floor(elapsedTime%1000 /10).toString().padStart(2,0);
    watch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
    if(!running){
        return(`x`);
    }

}

