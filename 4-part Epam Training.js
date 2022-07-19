
// Create a car object, add a color property to it with the value equals 'black'
// Change the color property of the car object to 'green'

const car = {
    color: 'black',
    warehouse: 'Apples, Pears',
    engine_power: 500

}
car.color = 'green';
console.log(car.color);
console.log(car["warehouse"]);
console.log(car["engine_power"]);


// Add the power property to the car object, which is a function and displays the engine power to the console

function power(a) {
    return a 
}
const resultx = power(500)
console.log('engine power ',resultx);

//  Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
// 1 - way solution

function makefuncsd() {
let named = "Mukhammad Yusuf"

// closure
return function innersd() {
console.log('hello', named);
}
}

const printsd = makefuncsd()
console.log(printsd())


// 2 -way solution

function call() {
let names = "Mukhammad"
if (names === 'Mukhammad') {
console.log('hello '+names);
} else {
alert('there is no such name')
console.log('there is no such name');
}
}
call()

// Write a function for calculating the type of argument and type output to the console

const calculating = (a, b) => { return a + b }
const argument = calculating(3, 4)
console.log( typeof argument);
console.log(argument);


// Write a function that determines whether a number is prime or not

function makefuncs() {
let count = 3

    // closure
return function inners() {
console.log('inside inner count: ', count);
return count += 2
}
}

const prints = makefuncs()
console.log(prints())