// BASICS OF JAVASCRIPT///EXERCISE 1
console.log(`Ya`);
console.log(`I like pizza`)
//window.alert(`This is an Alert!!!!`)
//window.alert(`I love pizza!!!!`)


//replaceing elements in the html
document.getElementById('myh1').textContent = 'Hello!';
document.getElementById('myp').textContent = 'This is the first replace exercise using JavaScript!';

// This is a comment
/* this is a multi
line comment*/

//////////////////EXERCISE 2///////////// VARIABLES

///1) declaration: let x;
///2) assignment x=100;

let x;
x=100;

console.log(x);

let age = 23;
let price = 10.99
console.log(age);
console.log(`The Price is \$${price}`);
console.log(age*2)
let name = `Syed Muhammad Zarif`
// bools = true/false
// replaceing elements with variables:
//document.getElementById(`myp`).textContent= name;
//document.getElementById(`myp2`).textContent= `Age: ${age}`;

//Arithmatic Operators///
//operands( values, variables)
// operators +-*/, ex, 11=x+5







///////////////////EXERCISE 3 taking user input
//way 1
let username;
//username = window.prompt("What's your user name?")
//console.log(username)
///////////////////EXERCISE 4 Button Clicks
/*
document.getElementById(`Submit_Button`).onclick=function(){
    username = document.getElementById(`Username_Input`).value; //you need to use .value to get the value
    window.alert(username);
    console.log(username);
}

document.getElementById(`Submit_Button2`).onclick=function(){
    let num;
    num= document.getElementById(`numinput`).value; //you need to use .value to get the value
    window.alert(`The answer is 2x${num} = ${num*2}`);
    console.log(num)
}
*/











///////////////////EXERCISE 5 type conversion 
//string to int:
/*
let age2 = window.prompt("How old are you?");
age2 = Number(age2);
age2+=1;
window.alert(`You are ${age2} years old!`);
typeof x will show the type of the variable x
*/ 










///////////////////EXERCISE 6 constants
// constants: they are varabiles that cannot be changed
//to assign:
/*
const PI = 3.14149;
let radius;
let circumference;
radius = window.prompt(`enter radius!`);
radius = Number(radius);
circumference = 2*PI*radius;
console.log(`${circumference} cm`)
*/










///////////////////EXERCISE 7 Counter Program
/*
let num = 0;

num = Number(num);
document.getElementById(`counternum`).textContent = num;
num = 0;
num = Number(num);

document.getElementById(`increase`).onclick = function(){
    num++;
    console.log(num)
    document.getElementById(`counternum`).textContent = num;
}
document.getElementById(`decrease`).onclick = function(){
    num--;
    console.log(num)
    document.getElementById(`counternum`).textContent = num;
}
document.getElementById(`reset`).onclick = function(){
    num = 0;
    num = Number(num);
    document.getElementById(`counternum`).textContent = num;

}
*/





////MATH OBJECT EXERCISE 8////////
console.log(`MAT OBJECT USAGE`)
console.log(Math.PI);
let X = 3.99;
console.log(Math.floor(X));
console.log(Math.ceil(X));
console.log(Math.round(X));
console.log(Math.trunc(X));// This gets rid of decimals
console.log(Math.pow(X,X)); //use sqrt, log, sin, cos, tan, abs you get the idea 
//max, min

//random number generator of 50-100
let randomnum = Math.floor(Math.random()*(100-50))+50; // random number between 1 and 6 Math.random()*max-min)+min)
console.log(randomnum)
//

//if statements same as c++
if (age>21){
    console.log(`Ya`)
}
else{
    console.log(`na`)
}

//// checked property//

const chkbx = document.getElementById(`chkbx`);
const visabtn = document.getElementById(`visabtn`);
const mstrcrdbtn = document.getElementById(`mstrcrdbtn`);
const paypalbtn = document.getElementById(`paypalbtn`);
const paymentsubmit = document.getElementById(`paymentsubmit`);
submissionresult = document.getElementById(`submissionresult`);

paymentsubmit.onclick = function(){
    if(chkbx.checked){
        if(visabtn.checked){
            submissionresult.textContent = "You are paying digitally using VISA!"
        }
        else if(mstrcrdbtn.checked){
            submissionresult.textContent = "You are paying digitally using Mastercard!"

        }
        else if(paypalbtn.checked){
            submissionresult.textContent = "You are paying digitally using PayPal!"
        }
        else{
            submissionresult.textContent = "Please Select a payment method!"
        }
        
    }
    else{
        submissionresult.textContent = "Will you be paying cash?"
    }
}
//already covered:

//ternary operator same as c++

// switch same as c++

// string methods same as c++:
//examples: indexOf() charAt() lastindexOf() .length .trim()-trims whitespaces .toUpperCase .repeat(xtimes) .startsWith("sth") .endsWith .includes("sth") .replaceAll("relacethis", "with this") .padStart(string length, padwith this) -> (15,0)-> pad in fron with 0 until 15 char long .padEnd() same

//String slicing string.slecie(start this is inclusive ,end this is exclusive) could use index of a space





///////////////METHOD CHAINING///////////////////////

//this is calling one method after the other in one continuous line of code.

//no chaining:
/*
let p = window.prompt(`Type in your username: `);
p = p.trim();
let letter = p.charAt(0);
letter = letter.toUpperCase();

let extraChars = p.slice(1);
extraChars = extraChars.toLowerCase();
p = letter+extraChars;
console.log(p)

//chaining:
p = p.trim().charAt(0).toUpperCase() + p.trim().slice(1).toLocaleLowerCase()+"x";
console.log(p);
*/


//Logical operators: AND &&, OR ||, NOT !
// strict equal operator useful for input method
/* 
= is the assignment operator
== is the comparator (values are equal)
=== is the strict equality operator (values & datatypes are equal)
!= inequality
*/

//while loop
//while(condition){do} this is the same as c++

//for loops are same as c++ but does not need type declaration for (let i = 0; i<=2 (continue until), i++)











///////////number guessing game//////////////
/*
const min = 1;
const max = 100;
const answer = (Math.floor(Math.random()*(max-min)))+min;

let running = true;
let guess;
let tries = 0;
while(running){
    guess = window.prompt(`Enter your guess!`);
    guess = Number(guess);
    guess = Math.trunc(guess);

    if(guess>answer){
        window.alert(`Your answer is too big!`);
        tries++;
    }
        
    else if(guess<answer){
        window.alert(`Your answer is too small!`)
        tries++;
    }
    else{
        running = false;
        window.alert(`You guessed it right! The answer is ${answer}!\nNumber of tries: ${tries}!`)
    }
    
}
    */





// functions same as c++
function ya(){
    console.log(`Ya this function works`)
}
ya();

function adder(num1, num2){
    console.log(num1+num2); //doest need conversion
}
adder(2,3);
adder(`ok`,2); //using string will automarically make the other a string

// variable scope, local and globals functions cant see variables of other functions, locals are used first


//<!--Arrays-->
let students = ['syed','wais','shishir'];
console.log(students[2]);
students.push('takia'); //adds to the end

console.log(students);
students.unshift('Dion');//adds to the beginning
console.log(students)

students.shift();//removes first elem
console.log(students);
students.pop();//removes end
console.log(students);

let numstudents = students.length;
console.log(numstudents);
console.log(students.indexOf(`shishir`));//if not found, returns -1

//iterate through array
for(let i = 0; i<students.length;i++){
    console.log(students[i]);
}

//shortcut like for i in arr in python
for(let idx of students){
//    if(idx!=`syed`){
    console.log(idx);
//    }
}

students.sort().reverse();
console.log(students);

//spread operator = allows arrays/strings to be expanded into seperate elements

let numbers = [1,2,3,4,5];
let max = Math.max(...numbers); //this unpacks it
let min = Math.min(...numbers);
console.log(min);
console.log(max);
let nums = [...numbers].join('-')
console.log(nums)

fruits = ['apple','banane'];
newfruits = [...fruits];
console.log(newfruits); //exact same copy
vegetal = ['carrots', 'celery'];
let foods = [...newfruits,...vegetal, "eggs", "milk"];
console.log(foods);


//rest parameters allow functions to work with ariable arguments by bundling into an array

function openFridge(foods){
    for(i of foods){
        console.log(i);
    }
}
openFridge(foods);


function openFridge2(...foodss){
    console.log(foodss);
}

const food1 = 'Pizza';
const food2 = 'Burger';
const food3 = 'Sushi';
openFridge2(food1,food2,food3);

//rest operatots bundle elements into array, opposite of spread

function brosjoin(...arr){
    console.log(arr);
}

brosjoin(`benis`,`man`);//returns array [benis,man]

function sum(...numbers){
    let result = 0;
    for(let x of numbers){
        result+= x;
    }
    return result;
}

const total = sum(1,2,3,4,4,5,5,5,55,2)
console.log(total)

function combineString(...names){
    let x = names.join(' ');
    return(x)

}
let namee = combineString("Mr.", "Syed", "Tahmid");
console.log(namee)


//callbacks= this is a fuction that is passed as an argument to another fucntion, this handles asynchronous operations
// like reading a file, network requests and database queries, when done call this
//example 1
function displayGoodbye(){
    console.log("Goodbye");
}
function displayHello(callback){
        console.log("Hello");
        callback();
}

displayHello(displayGoodbye);


//example two

function sum_callback(callback, x, y){
    let result = x+y;
    callback(result);
}
function displayresult(result){
    console.log(`The result is ${result}!`);
}
sum_callback(displayresult, 2,22);

////////////////////////////////for eachmethid, it can utilize callback for each element of an array

let arrey = [1,2,3,4,5];

arrey.forEach(displayarey);

function displayarey(element){
    console.log(element);
}

//////////////////////// the map method, accepts callback and applies to each element in the array
const mapnumbers = [1,2,3,4,5,6]

const squares = numbers.map(square);

console.log(squares);
function square(elem){
    return elem*elem;
}

//.filer method created new array by fitlering out elements
let numbersforfilter = [1,2,3,4,5,6,7];

function isEven(element){
    return element%2 ===0; //returns a true or flase and filters on t/f
}

console.log(numbersforfilter.filter(isEven))

let wordsforfilter = ['Ambigiuous', 'Dexterity', "cat"];
function wordfilter(element){
    return (element.length<=4)
}
function wordfilter2(element){
    return (element.length>4)
}
console.log(wordsforfilter.filter(wordfilter))
console.log(wordsforfilter.filter(wordfilter2))

//reduce method recudes elements of an array to single value

const cart = [23,41,23.5,23,5];

const total_cart = cart.reduce(sumcart)

function sumcart(previous, element){
    return previous+element //during first iteration, previous = 0
}
console.log(`$${total_cart}`);

//function expressions, defining functions like value/variable ,can also use in callbacks and not pollute the global namespace
 const heilo = function(){
    console.log(`Hello`);
 }

 heilo();

 setTimeout(heilo, 3000);
 ///////////////
 //////////////
 /////ARROW FUNCTIONS//////////

 const heirlo = () => console.log("this is a arrow function");
 heirlo();

 const arrow_name = (element) =>console.log(`this is your parameter: ${element}`)
 arrow_name(21)

 setTimeout(() => console.log(`ya`),0);

 const arownums = [1,23,4,64,34,2];
 const arrwsqr = arownums.map((element)=>Math.pow(element,2));
 console.log(arrwsqr)

 // objects are basically like dictionaries, have key values, they are basically what modules are in ruby
// objects can have functions inside the object
//example

const person1 = {
    firstName: "Syed",
    lastname: "Zarif",
    sayHello: function(){console.log(`Hellow ${this.firstName+" " + this.lastname}`)}//the this keyword accesses local variables indie the object
}
person1.sayHello()
console.log(person1.firstName)


//constructors = special method for defining properties and methods
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.display = function(){ return(`The car is a ${color} ${year} ${make} ${model}!`)}
    
}
const car1 = new Car(`Toyota`, `Premio`, 2008, `Grey`);
console.log(car1.display());

//classes are es6 feature

class Product{
    constructor(name, price){
        this.name=name,
        this.price=price
    }
    displayProduct(){
        console.log(`Product: ${this.name}\nPrice: $${this.price.toFixed(2)}`)
    }
}
const product1 = new Product("Shirt",19.99);
product1.displayProduct();

//the STATIC keyword, defines properties or methods of the class

class MathUtil{
    static PI = 3.14159;
}

console.log(MathUtil.PI);
///can use the static value

class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

console.log(User.userCount)

const firstuser = new User(`syed2213`);
console.log(User.userCount)

//inheritance

//this is almost like c++ 
/*
class Parent{
    functions and statics
}

class Child extends Parent{

}

x = new Child;
x.functionfromparent(); unless redefined it will carry out the function as usual*/

//super is used to call constructor or access properties and methods of parent

class Animal{
    constructor(name, age){
        this.name = name,
        this.age = age

    }
    run(){
        console.log(`The ${this.name} is running!`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, speed){
        super(name,age); //this needs to be called to inherit commo  properties, gets name and age from parent constructor this also gets the functions 
        this.speed = speed
    }
}

const rabbit = new Rabbit(`Bugs Bunny`, 1, 25);
console.log(rabbit.name)
rabbit.run();

// ---------- EXAMPLE 1 GETTERS AND SETTERS----------
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){ //this is a setter
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

//getters
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
   
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }


    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(2, 3);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//destructuring, swappig values [] for arrays {} for objects

let a = 1;
let b = 2;

[a,b] = [b,a];

const colors= ['red','blue', `green`,`white`,`black`];
[colors[0],colors[2]] = [colors[2],colors[0]]
console.log(colors)

const[firstcolor, secondcolor, ...extracolors] = colors;
console.log(extracolors);

//---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person12 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  job: "Fry cook",
};

const person13 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 34
};

const {firstName, lastName, ages, job="Unemployed"} = person13;

console.log(firstName);
console.log(lastName);
console.log(ages);
console.log(job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person12);
displayPerson(person13);

//nested objects: objects inside other bojects
// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person10 = new Person("Spongebob", 30, "124 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person20 = new Person("Patrick", 37,   "128 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person30 = new Person("Squidward", 45, "126 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

console.log(person10.name);
console.log(person10.age); 
console.log(person10.address);                                   
console.log(person10.address.street);
console.log(person10.address.city);
console.log(person10.address.country);

/////////////////////////////////////////////ARRAY OF OBJECTS//////////
const AOOFruits = [ {name: "apple", color: "red", calories: 95}, 
    {name: "orange", color: "orange", calories: 45}, 
    {name: "banana", color: "yellow", calories: 105}, 
    {name: "coconut", color: "white", calories: 159}, 
    {name: "pineapple", color: "yellow", calories: 37}];

// Access properties of a fruit object
console.log(AOOFruits[0].calories);

// Add a new fruit object
AOOFruits.push({ name: "grapes", color: "purple", calories: 62});

// Remove the last fruit object
AOOFruits.pop();

// Remove fruit objects by indices
AOOFruits.splice(1, 2);

// ---------- forEach() ----------
AOOFruits.forEach(fruit => console.log(fruit));
AOOFruits.forEach(fruit => console.log(fruit.name));
AOOFruits.forEach(fruit => console.log(fruit.color));
AOOFruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = AOOFruits.map(fruit => fruit.name);
const fruitColors = AOOFruits.map(fruit => fruit.color);
const fruitCalories = AOOFruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ----------
const yellowAOOFruits = AOOFruits.filter(fruit => fruit.color === "yellow");
const lowCalAOOFruits = AOOFruits.filter(fruit => fruit.calories < 100);
const highCalAOOFruits = AOOFruits.filter(fruit => fruit.calories >= 100);

console.log(yellowAOOFruits);
console.log(lowCalAOOFruits);
console.log(highCalAOOFruits);

// ---------- reduce() ----------
const maxFruit = AOOFruits.reduce( (max, fruit) =>
                                  fruit.calories > max.calories ?
                                  fruit : max);

const minFruit = AOOFruits.reduce( (min, fruit) =>
                                 fruit.calories < min.calories ?
                                 fruit : min);

console.log(maxFruit);
console.log(minFruit);

//sort elements, lexicographical sorts .sort()
// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

// ---------- EXAMPLE 1 ----------
const numberos = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numberos.sort((a, b) => a - b); //FORWARD
numberos.sort((a, b) => b - a); //REVERSE

console.log(numberos);

// ---------- EXAMPLE 2 ----------
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                            {name: "Patrick", age: 37, gpa: 1.5},
                            {name: "Squidward", age: 51, gpa: 2.5},
                            {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
people.sort((a, b) => b.age - a.age); //REVERSE

people.sort((a, b) => a.gpa - b.gpa); //FORWARD
people.sort((a, b) => b.gpa - a.gpa); //REVERSE

people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD for string
people.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE for string

console.log(people);
// date objects

//Date (year, month, day, hour, minute, second, ms)
const date = new Date();
console.log(`${date.getDate()}`+`${date.getHours()}`+`${date.getMinutes()}`+`${date.getMilliseconds()}`);

//can set the date
const registerdate = new Date();
registerdate.setFullYear(2021);
console.log(registerdate)

//closures function in another function, they allow private stuff, react viue and angular use these

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }
    inner();
}
outer();