// https://learn.javascript.ru/object-methods

//https://learn.javascript.ru/object-methods

//task https://learn.javascript.ru/task/calculator

let calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = +prompt('Enter x value:', 0);
        this.y = +prompt('Enter y value:', 0);
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
};

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());

//task https://learn.javascript.ru/task/chain-calls
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() {
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep();