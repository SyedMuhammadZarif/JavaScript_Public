let equation = ``;
let symbols = [`+`,`-`,`*`,`/`];

const displaybar = document.getElementById(`displaybar`);

const clear = document.getElementById(`clear`);
const Del = document.getElementById(`Del`);
const bracket_open = document.getElementById(`bracket_open`);
const bracket_closed = document.getElementById(`bracket_closed`)
const divide = document.getElementById(`/`);
const multiply = document.getElementById(`x`);
const add = document.getElementById(`+`);
const subtract = document.getElementById(`-`);
const solve = document.getElementById(`=`);

const Zero = document.getElementById(`0`);
const One = document.getElementById(`1`);
const Two = document.getElementById(`2`);
const Three = document.getElementById(`3`);
const Four = document.getElementById(`4`);
const Five = document.getElementById(`5`);
const Six = document.getElementById(`6`);
const Seven = document.getElementById(`7`);
const Eight = document.getElementById(`8`);
const Nine = document.getElementById(`9`);

function clearscreen(){
    displaybar.textContent=`0`;
    equation = ``;

}

function write(value){
    last = equation.charAt(equation.length-1);
    if(value == `+`||value == `-`||value == `*`||value == `/`)
        {
        
        if(equation.length==0 && value==`-`){
            equation += `-`;
            }
        
        else if(last == `+`||last == `-`||last == `*`||last == `/`){
            equation = equation.replace(/.$/, value);
        }
        else {
            equation += value;
        }
    }
    else if(value==`(`){
        if(equation!=``&&symbols.includes(value)==false&&last!=`(`){
            equation+=`*`;
            equation+=`(`;
        }
        else{
            equation+=`(`;
        }
    }
    else{
        equation+=value;
    }
    console.log(equation)
    displaybar.textContent = equation;
}

function Solve(){
    const sanitizedExpr = equation.replace(/\b0+(?=\d)/g, "")
    let final = eval(sanitizedExpr);
    console.log(final);
    displaybar.textContent= final;
}
function del(){
    last = equation.charAt(equation.length-1);
    equation = equation.slice(0,-1);
    console.log(equation)
    if(equation==``){
        equation = '0';
    }
    displaybar.textContent = equation;
}


console.log(equation)

Zero.addEventListener('click', () => write('0'));
One.addEventListener('click', () => write('1'));
Two.addEventListener('click', () => write('2'));
Three.addEventListener('click', () => write('3'));
Four.addEventListener('click', () => write('4'));
Five.addEventListener('click', () => write('5'));
Six.addEventListener('click', () => write('6'));
Seven.addEventListener('click', () => write('7'));
Eight.addEventListener('click', () => write('8'));
Nine.addEventListener('click', () => write('9'));
add.addEventListener('click', () => write('+'));
subtract.addEventListener('click', () => write('-'));
multiply.addEventListener('click', () => write('*'));
divide.addEventListener('click', () => write('/'));
solve.addEventListener(`click`,()=> Solve());
Del.addEventListener(`click`, () => del());
bracket_open.addEventListener(`click`, () => write(`(`));
bracket_closed.addEventListener(`click`, () => write(`)`));
