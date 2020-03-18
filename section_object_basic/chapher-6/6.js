// https://learn.javascript.ru/constructor-new

//task https://learn.javascript.ru/task/two-functions-one-object
const someObj = {};

function A() {  
    return someObj;
}

function B() { 
    return someObj;
}

let a = new A;
let b = new B;

alert( a == b );


//task https://learn.javascript.ru/task/calculator-constructor
function Calculator() {
    this.read = function() {
        this.x = +prompt('Enter x value', 0);
        this.y = +prompt('Enter y value', 0);
    },
    this.sum = function() {
        return this.x + this.y;
    },
    this.mul = function() {
        return this.x * this.y;
    }
}

let calculator = new Calculator();
calculator.read();

alert( 'Sum=' + calculator.sum() );
alert( 'Mul=' + calculator.mul() );


//task https://learn.javascript.ru/task/accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read  = function() {
        this.value+= +prompt('Enter a value for add', 0);
    }
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);