//https://learn.javascript.ru/call-apply-decorators

//task //https://learn.javascript.ru/task/spy-decorator
function work(a, b) {
    alert(a + b);
}

function spy(func) {
    decorator.calls = [];

    function decorator(...params) {
        decorator.calls.push(params);

        return func.apply(this, params);
    }

    return decorator;
}

work = spy(work);

work(1, 2);
work(4, 5); 

for (let args of work.calls) {
  alert( 'call:' + args);
}


//task //https://learn.javascript.ru/task/delay
function f(x) {
    alert(x);
}

function delay(func, delayMs) {
    return function decorator(...params) {
        setTimeout(func.bind(this, params), delayMs);
    }
}

let f1000 = delay(f, 1000);
let f3500 = delay(f, 3500);

f1000("test");
f3500("test");


//task https://learn.javascript.ru/task/debounce
function debounce(func, ms) {
    let isTimeUp = false;

    return function(...params) {
        if (!isTimeUp) {
            func.apply(this, params);

            isTimeUp = true;
            setTimeout(() => isTimeUp = false, ms);
        }
    }
}

let  debouncedAlert = debounce(alert, 1000);

debouncedAlert(1);
debouncedAlert(2);

setTimeout(() => debouncedAlert(3), 100);
setTimeout( () => debouncedAlert(4), 1100);
setTimeout( () => debouncedAlert(5), 1500);