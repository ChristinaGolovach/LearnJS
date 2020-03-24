//https://learn.javascript.ru/closure

//task //https://learn.javascript.ru/task/closure-sum
function sum(x) {
    return function(y) {
        return x + y;
    }
}

console.log(sum(1)(2));


//task //https://learn.javascript.ru/task/filter-through-function
function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6)));
//alert(arr.filter(x => x >= 3 && x <= 6));

alert(arr.filter(inArray([1, 2, 10])));
//let arr2 = [1, 2, 10];
//alert(arr.filter(x => arr2.includes(x)));


//task  //https://learn.javascript.ru/task/sort-by-field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function byField(filedName) {
    return function(a, b) {
        return a[filedName] > b[filedName] ? 1 : -1;
    }
}

users.sort(byField('name'))
console.log(users.forEach(user => console.log(user.name)));

users.sort(byField('age'))
console.log(users.forEach(user => console.log(user.age)));


//task //https://learn.javascript.ru/task/make-army
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() {
        alert( j );
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0]();
  army[5]();
