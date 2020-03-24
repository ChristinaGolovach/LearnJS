//https://learn.javascript.ru/recursion

//task //https://learn.javascript.ru/task/sum-to
function sumTo(n) {
  let currentSum = 0;

  while(n >= 1) {
    currentSum += n;
    n--;
  }
  
  return currentSum;
}

console.log(sumTo(4));


function recursiveSumTo(n) {
  if (n === 1) {
    return 1;
  }

  return n + recursiveSumTo(n - 1);  
}

console.log(recursiveSumTo(4));

function arithmeticSumTo(n) {
  return (1 + n) / 2 * n;
} 

console.log(arithmeticSumTo(4));


//task //https://learn.javascript.ru/task/factorial
function factorial(n) {
  if (n === 1) {
    return n;
  }
  
  return n * factorial(n - 1);
}

console.log(factorial(5));


//task //https://learn.javascript.ru/task/fibonacci-numbers
function fib(n) {
  let x = 1, y = 1;
  for(let i = 3; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }

  return y;
}

console.log(fib(7));

//task //https://learn.javascript.ru/task/output-single-linked-list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  while(list) {
    console.log(`list value is ${list.value}`);
    list = list.next;
  }
}

printList(list); //TODO ask


function recursivePrintList(list) {
  if (list !== null) {
    console.log(`list value is ${list.value}`);
    printList(list.next);
  }
}

recursivePrintList(list); 


//task //https://learn.javascript.ru/task/output-single-linked-list-reverse
function recursiveReversePrintList(list) {
  if (list.next) {
    recursiveReversePrintList(list.next);
  } 
  console.log(`list value is ${list.value}`);
}

recursiveReversePrintList(list);
