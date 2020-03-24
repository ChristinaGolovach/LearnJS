// https://learn.javascript.ru/function-object

//task //https://learn.javascript.ru/task/counter-inc-dec
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = function (currentValue) {
        count = currentValue;        
    }

    counter.decrease = function () {
        count--;
    }
    
    return counter;
  }
  
  let counter = makeCounter();
  
  alert(counter());
  alert(counter());
  
  counter.set(10);
  
  alert(counter());
  
  counter.decrease();
  
  alert(counter());


//task //https://learn.javascript.ru/task/sum-many-brackets
function sum(a) {
    let currentSum = a;

    function addNext(x) {
        currentSum += x;

        return addNext;
    }

    addNext[Symbol.toPrimitive] = function(hint) {
        if (hint === 'string') {
            return currentSum;
        }
    }

    return addNext;
}

alert(sum(1)(2));
alert(sum(5)(-1)(2));